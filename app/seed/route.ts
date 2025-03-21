import bcryptjs from 'bcryptjs';
import { db } from '@vercel/postgres';
import { v4 as uuidv4, validate as validateUUID } from 'uuid';
import { user, product } from '../lib/placeholder-data';

const client = await db.connect();

// Function to fix invalid UUIDs
function fixInvalidUUIDs(product: any[]) {
  return product.map((prod) => {
    if (!validateUUID(prod.id)) {
      console.warn(`Replacing invalid UUID: ${prod.id} with a new one.`);
      prod.id = uuidv4(); // Replace invalid UUID with a new one
    }
    return prod;
  });
}

// Fix invalid UUIDs in the product array
const fixedProducts = fixInvalidUUIDs(product);

// Function to create tables if they don't exist
async function createTables() {
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

  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_name VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL,
      rating VARCHAR(4) CHECK (rating IN ('1/5', '2/5', '3/5', '4/5', '5/5')) NOT NULL,
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

  console.log('Tables created or verified.');
}

// Function to delete all data from the tables
async function deleteAllData() {
  await client.sql`DELETE FROM products;`;
  await client.sql`DELETE FROM users;`;
  console.log('All data deleted from tables.');
}

// Function to seed users (including admins)
async function seedUsers() {
  const insertedUsers = await Promise.all(
    user.map(async (user: any) => {
      try {
        if (!user.password || typeof user.password !== 'string') {
          console.error('Invalid password for user:', user);
          throw new Error(`Invalid password for user: ${user.email}`);
        }

        const hashedPassword = await bcryptjs.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, email, password, privilege)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.privilege})
          ON CONFLICT (id) DO NOTHING;
        `;
      } catch (error) {
        console.error('Error seeding user:', user, error);
        throw error; // Re-throw the error to stop the seeding process
      }
    }),
  );

  return insertedUsers;
}

async function seedProducts() {
  const insertedProducts = await Promise.all(
    fixedProducts.map(async (prod: any) => {
      return client.sql`
        INSERT INTO products (id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews)
        VALUES (${prod.id}, ${prod.product_name}, ${prod.image_url}, ${prod.rating}, ${prod.age}, ${prod.artist}, ${prod.style}, ${prod.category}, ${prod.price}, ${prod.status}, ${prod.description}, ${prod.reviews})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedProducts;
}

export async function GET() {
  try {
    console.log('Starting database seeding...');
    await client.sql`BEGIN`;

    console.log('Creating tables if they do not exist...');
    await createTables();

    console.log('Deleting existing data...');
    await deleteAllData();

    console.log('Seeding users (including admins)...');
    await seedUsers();

    console.log('Seeding products...');
    await seedProducts();

    await client.sql`COMMIT`;
    console.log('Database seeded successfully.');

    return Response.json({ message: 'Database cleared and seeded successfully' });
  } catch (error) {
    console.error('Error during seeding:', error);
    await client.sql`ROLLBACK`;
    return Response.json({ error: "error.message" }, { status: 500 });
  }
}