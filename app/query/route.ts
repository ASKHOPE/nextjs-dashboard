import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL as string, {
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function getAllData() {
  try {
    const usersData = await sql`SELECT * FROM users;`;
    const adminsData = await sql`SELECT * FROM admins;`;
    const productsData = await sql`SELECT * FROM product;`; // this is product not products

    return {
      users: usersData,
      admins: adminsData,
      products: productsData,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Got an error fetching from the database" };
  }
}

export async function GET() {
  try {
    const data = await getAllData();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "error.message" }, { status: 500 });
  }
}
