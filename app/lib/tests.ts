// export async function GET() {
//     try {
//         console.log('Starting database seeding...');
//         await client.sql`BEGIN`;

//         console.log('Deleting existing data...');
//         await deleteAllData();

//         console.log('Seeding users...');
//         await seedUsers();

//         console.log('Seeding admins...');
//         await seedAdmins();

//         console.log('Seeding products...');
//         await seedProducts();

//         await client.sql`COMMIT`;
//         console.log('Database seeded successfully.');

//         return Response.json({ message: 'Database cleared and seeded successfully' });
//     } catch (error) {
//         console.error('Error during seeding:', error);
//         await client.sql`ROLLBACK`;
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }


// export async function testDatabaseConnection() {
//     try {
//         const result = await client.sql`SELECT 1+1 AS result`;
//         console.log('Database connection test successful:', result.rows);
//     } catch (error) {
//         console.error('Database connection test failed:', error);
//     }
// }

// export async function GET() {
//     try {
//         console.log('Testing database connection...');
//         await testDatabaseConnection();

//         console.log('Starting database seeding...');
//         await client.sql`BEGIN`;

//         // Rest of the seeding logic...
//     } catch (error) {
//         console.error('Error during seeding:', error);
//         await client.sql`ROLLBACK`;
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }