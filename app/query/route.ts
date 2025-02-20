import postgres from 'postgres';

// Configure SSL based on the environment
const sql = postgres(process.env.POSTGRES_URL as string, {
  ssl: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

async function getAllData() {
  try {
    const usersData = await sql`SELECT * FROM users;`;
    const productsData = await sql`SELECT * FROM products;`;

    return {
      users: usersData,
      products: productsData,

    };
  } catch (error) {
    console.error('Error fetching data:', error);
    console.error('Database URL:', process.env.POSTGRES_URL); // Log the database URL for debugging
    return { error: 'Got an error fetching from the database', details: 'error.message' };
  }
}

export async function GET() {
  try {
    const data = await getAllData();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'error.message' }, { status: 500 });
  }
}