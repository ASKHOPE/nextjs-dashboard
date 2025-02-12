// This is seeded already to vercel DB on 11/FEB/2025 7:30 PM Indian Standard Time

import bcryptjs from 'bcryptjs';
import { db } from '@vercel/postgres';
import { users, admin, product } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
        CREATE TABLE IF NOT EXISTS users (
                                             id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            privilege VARCHAR(10) CHECK (privilege IN ('User', 'Seller', 'Admin')) NOT NULL
            );
    `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcryptjs.hash(user.password, 10);
      return client.sql`
                INSERT INTO users (id, name, email, password, privilege)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.privilege})
                    ON CONFLICT (id) DO NOTHING;
            `;
    }),
  );

  return insertedUsers;
}

async function seedAdmins() {
  await client.sql`
        CREATE TABLE IF NOT EXISTS admins (
                                              id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            privilege VARCHAR(10) CHECK (privilege IN ('User', 'Seller', 'Admin')) NOT NULL
            );
    `;

  const insertedAdmins = await Promise.all(
    admin.map(async (adminUser) => {
      const hashedPassword = await bcryptjs.hash(adminUser.password, 10);
      return client.sql`
                INSERT INTO admins (id, name, email, password, privilege)
                VALUES (${adminUser.id}, ${adminUser.name}, ${adminUser.email}, ${hashedPassword}, ${adminUser.privilege})
                    ON CONFLICT (id) DO NOTHING;
            `;
    }),
  );

  return insertedAdmins;
}

async function seedProducts() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_name VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL,
      rating VARCHAR(3) CHECK (rating IN ('1/5', '2/5', '3/5', '4/5', '5/5')) NOT NULL,
      age VARCHAR(10) CHECK (age ~ '^[0-9]{4}(-[0-9]{2}-[0-9]{2})?$') NOT NULL,
      artist VARCHAR(255) NOT NULL,
      style VARCHAR(100) NOT NULL,
      category VARCHAR(100) NOT NULL,
      price INTEGER NOT NULL,
      status VARCHAR(15) CHECK (status IN ('On Sale', 'Not For Sale', 'Sold')) NOT NULL,
      description TEXT CHECK (LENGTH(description) <= 300),
      reviews TEXT
    );
  `;

 
  function validateAgeFormat(age: any) {
    return /^[0-9]{4}(-[0-9]{2}-[0-9]{2})?$/.test(age);
  }

  const insertedProducts = await Promise.all(
    product.map(async (prod) => {
      if (!validateAgeFormat(prod.age)) {
        console.error(`Skipping invalid age format: ${prod.age}`);
        return null; // Skip invalid entries
      }

      return client.sql`
        INSERT INTO products (id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews)
        VALUES (${prod.id}, ${prod.product_name}, ${prod.image_url}, ${prod.rating}, ${prod.age}, ${prod.artist}, ${prod.style}, ${prod.category}, ${prod.price}, ${prod.status}, ${prod.description}, ${prod.reviews})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedProducts.filter(Boolean); // Remove null values
}


// async function seedProducts() {
//   await client.sql`
//         CREATE TABLE IF NOT EXISTS products (
//                                                 id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//             product_name VARCHAR(255) NOT NULL,
//             image_url TEXT NOT NULL,
//             rating VARCHAR(3) CHECK (rating IN ('1/5', '2/5', '3/5', '4/5', '5/5')) NOT NULL,
//             age VARCHAR(10) CHECK (age ~ '^[0-9]{10}$') NOT NULL,
//             artist VARCHAR(255) NOT NULL,
//             style VARCHAR(100) NOT NULL,
//             category VARCHAR(100) NOT NULL,
//             price INTEGER NOT NULL,
//             status VARCHAR(15) CHECK (status IN ('On Sale', 'Not For Sale', 'Sold')) NOT NULL,
//             description TEXT CHECK (LENGTH(description) <= 300),
//             reviews TEXT
//             );
//     `;

//   const insertedProducts = await Promise.all(
//     product.map(async (prod) => {
//       return client.sql`
//                 INSERT INTO products (id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews)
//                 VALUES (${prod.id}, ${prod.product_name}, ${prod.image_url}, ${prod.rating}, ${prod.age}, ${prod.artist}, ${prod.style}, ${prod.category}, ${prod.price}, ${prod.status}, ${prod.description}, ${prod.reviews})
//                     ON CONFLICT (id) DO NOTHING;
//             `;
//     }),
//   );

//   return insertedProducts;
// }

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedAdmins();
    await seedProducts();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    //@ts-expect-error // ignore this for now as we need to run this code only once
    return Response.json({ error: error.message }, { status: 500 });
  }
}
