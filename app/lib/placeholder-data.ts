// import { user } from './definitions';
// // Contains the Database place holder information

// //This code is for normal user where seller status is false
// const users = [
//   {
//     id: '410544b2-4001-4271-9855-fec4b6a6442a',
//     name: 'User',
//     email: 'user@nextmail.com',
//     password: '123456',
//     privilege: 'User',
//   },
// ];

// //This code is for normal user where seller status is True
// const admin = [
//   {
//     id: '410544b2-4001-4271-9855-fec4b6a6442a',
//     name: 'User1',
//     email: 'admin@nextmail.com',
//     password: '123456',
//     privilege: 'Seller',
//   },
// ];


// const product = [
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     product_name: 'Evil Rabbit',
//     image_url: 'https://images.unsplash.com/photo-1739054239615-02944e9c338b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     rating: '4/5',
//     age: '02-04-1900',
//     artist: 'Evil Rabbit',
//     style: 'Abstract',
//     category: 'Weird',
//     price: 1000,
//     status: 'Onsale',
//     description: 'Lorem Ipsum Skbiibidid',
//     reviews: '',
//   }
// ];
// export { users, admin, product };

// Contains the Database placeholder information

// Users with Client privilege
const user = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Emo',
    email: 'user@nextmail.com',
    password: '123456',
    privilege: 'User', // Changed from 'Client' to 'User'
  },
  {
    id: '550544b2-4001-4271-9855-fec4b6a6442b',
    name: 'John Doe',
    email: 'john@nextmail.com',
    password: '123456',
    privilege: 'User', // Changed from 'Client' to 'User'
  },
  {
    id: '660544b2-4001-4271-9855-fec4b6a6442c',
    name: 'Jane Smith',
    email: 'jane@nextmail.com',
    password: '123456',
    privilege: 'User', // Changed from 'Client' to 'User'
  },
];

const admin = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin User',
    email: 'admin@nextmail.com',
    password: '123456',
    privilege: 'Admin', // Ensure this is 'Admin', 'Seller', or 'User'
  },
  {
    id: '770544b2-4001-4271-9855-fec4b6a6442d',
    name: 'Alice Johnson',
    email: 'alice@nextmail.com',
    password: '123456',
    privilege: 'Seller', // Ensure this is 'Admin', 'Seller', or 'User'
  },
  {
    id: '880544b2-4001-4271-9855-fec4b6a6442e',
    name: 'Bob Brown',
    email: 'bob@nextmail.com',
    password: '123456',
    privilege: 'Seller', // Ensure this is 'Admin', 'Seller', or 'User'
  },
];
const product = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    product_name: 'Evil Rabbit',
    image_url: 'https://images.unsplash.com/photo-1739054239615-02944e9c338b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: '4/5',
    age: '1900-04-02', // Updated to YYYY-MM-DD
    artist: 'Evil Rabbit',
    style: 'Abstract',
    category: 'Weird',
    price: 1000,
    status: 'On Sale',
    description: 'Lorem Ipsum Skbiibidid',
    reviews: '',
  },
  {
    id: 'a1b2c3d4-1234-5678-9101-112131415161',
    product_name: 'Golden Sunset',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '5/5',
    age: '2000-01-01', // Updated to YYYY-MM-DD
    artist: 'John Artist',
    style: 'Impressionism',
    category: 'Landscape',
    price: 1500,
    status: 'On Sale',
    description: 'A beautiful depiction of a golden sunset.',
    reviews: '',
  },
  {
    id: 'e5f6g7h8-1234-5678-9101-112131415162',
    product_name: 'Mystic Forest',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1995-03-15', // Updated to YYYY-MM-DD
    artist: 'Jane Painter',
    style: 'Realism',
    category: 'Nature',
    price: 1200,
    status: 'Not For Sale',
    description: 'A serene forest scene with mystical vibes.',
    reviews: '',
  },
  {
    id: 'i9j0k1l2-1234-5678-9101-112131415163',
    product_name: 'Urban Chaos',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '3/5',
    age: '1985-07-22', // Updated to YYYY-MM-DD
    artist: 'Mike Creator',
    style: 'Modern',
    category: 'Cityscape',
    price: 800,
    status: 'Sold',
    description: 'A chaotic yet beautiful urban landscape.',
    reviews: '',
  },
  {
    id: 'm3n4o5p6-1234-5678-9101-112131415164',
    product_name: 'Ocean Waves',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '3/5',
    age: '2010-05-10', // Updated to YYYY-MM-DD
    artist: 'Sarah Artist',
    style: 'Abstract',
    category: 'Seascape',
    price: 2000,
    status: 'On Sale',
    description: 'Vivid representation of ocean waves.',
    reviews: '',
  },
  {
    id: 'q7r8s9t0-1234-5678-9101-112131415165',
    product_name: 'Desert Mirage',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1975-11-30', // Updated to YYYY-MM-DD
    artist: 'David Painter',
    style: 'Surrealism',
    category: 'Desert',
    price: 950,
    status: 'Not For Sale',
    description: 'A surreal depiction of a desert mirage.',
    reviews: '',
  },
  {
    id: 'u1v2w3x4-1234-5678-9101-112131415166',
    product_name: 'Mountain Peak',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '2005-09-12', // Updated to YYYY-MM-DD
    artist: 'Emily Creator',
    style: 'Realism',
    category: 'Mountain',
    price: 1800,
    status: 'Sold',
    description: 'A majestic mountain peak under the sun.',
    reviews: '',
  },
  {
    id: 'y5z6a7b8-1234-5678-9101-112131415167',
    product_name: 'Winter Wonderland',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1990-12-25', // Updated to YYYY-MM-DD
    artist: 'Chris Artist',
    style: 'Impressionism',
    category: 'Winter',
    price: 1300,
    status: 'On Sale',
    description: 'A snowy landscape that feels magical.',
    reviews: '',
  },
  {
    id: 'c9d0e1f2-1234-5678-9101-112131415168',
    product_name: 'Autumn Leaves',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1980-10-15', // Updated to YYYY-MM-DD
    artist: 'Laura Painter',
    style: 'Realism',
    category: 'Autumn',
    price: 1100,
    status: 'Not For Sale',
    description: 'A vibrant autumn scene with falling leaves.',
    reviews: '',
  },
  {
    id: 'g3h4i5j6-1234-5678-9101-112131415169',
    product_name: 'Spring Blossoms',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '3/5',
    age: '2002-04-01', // Updated to YYYY-MM-DD
    artist: 'Mark Creator',
    style: 'Impressionism',
    category: 'Spring',
    price: 1600,
    status: 'Sold',
    description: 'A colorful depiction of spring blossoms.',
    reviews: '',
  },
  {
    id: 'k7l8m9n0-1234-5678-9101-112131415170',
    product_name: 'Starry Night',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '5/5',
    age: '1889-06-18', // Updated to YYYY-MM-DD
    artist: 'Vincent Van Gogh',
    style: 'Post-Impressionism',
    category: 'Night',
    price: 3000,
    status: 'On Sale',
    description: 'A masterpiece depicting a starry night.',
    reviews: '',
  },
  {
    id: 'o1p2q3r4-1234-5678-9101-112131415171',
    product_name: 'The Scream',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '3/5',
    age: '1893-01-01', // Updated to YYYY-MM-DD
    artist: 'Edvard Munch',
    style: 'Expressionism',
    category: 'Emotion',
    price: 2500,
    status: 'Not For Sale',
    description: 'A powerful representation of human emotion.',
    reviews: '',
  },
  {
    id: 's5t6u7v8-1234-5678-9101-112131415172',
    product_name: 'Mona Lisa',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '5/5',
    age: '1503-01-01', // Updated to YYYY-MM-DD
    artist: 'Leonardo da Vinci',
    style: 'Renaissance',
    category: 'Portrait',
    price: 10000,
    status: 'Sold',
    description: 'The most famous portrait in the world.',
    reviews: '',
  },
  {
    id: 'w9x0y1z2-1234-5678-9101-112131415173',
    product_name: 'The Persistence of Memory',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '3/5',
    age: '1931-01-01', // Updated to YYYY-MM-DD
    artist: 'Salvador Dali',
    style: 'Surrealism',
    category: 'Time',
    price: 5000,
    status: 'On Sale',
    description: 'A surreal depiction of melting clocks.',
    reviews: '',
  },
  {
    id: 'a3b4c5d6-1234-5678-9101-112131415174',
    product_name: 'The Kiss',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1908-01-01', // Updated to YYYY-MM-DD
    artist: 'Gustav Klimt',
    style: 'Art Nouveau',
    category: 'Romance',
    price: 4500,
    status: 'Not For Sale',
    description: 'A romantic and golden embrace.',
    reviews: '',
  },
  {
    id: 'e7f8g9h0-1234-5678-9101-112131415175',
    product_name: 'Girl with a Pearl Earring',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1665-01-01', // Updated to YYYY-MM-DD
    artist: 'Johannes Vermeer',
    style: 'Baroque',
    category: 'Portrait',
    price: 6000,
    status: 'Sold',
    description: 'A captivating portrait of a young woman.',
    reviews: '',
  },
  {
    id: 'i1j2k3l4-1234-5678-9101-112131415176',
    product_name: 'The Birth of Venus',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1485-01-01', // Updated to YYYY-MM-DD
    artist: 'Sandro Botticelli',
    style: 'Renaissance',
    category: 'Mythology',
    price: 7000,
    status: 'On Sale',
    description: 'A classic depiction of the birth of Venus.',
    reviews: '',
  },
  {
    id: 'm5n6o7p8-1234-5678-9101-112131415177',
    product_name: 'The Last Supper',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '5/5',
    age: '1498-01-01', // Updated to YYYY-MM-DD
    artist: 'Leonardo da Vinci',
    style: 'Renaissance',
    category: 'Religious',
    price: 9000,
    status: 'Not For Sale',
    description: 'A monumental religious scene.',
    reviews: '',
  },
  {
    id: 'q9r0s1t2-1234-5678-9101-112131415178',
    product_name: 'The Night Watch',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '4/5',
    age: '1642-01-01', // Updated to YYYY-MM-DD
    artist: 'Rembrandt',
    style: 'Baroque',
    category: 'Group Portrait',
    price: 8000,
    status: 'Sold',
    description: 'A dynamic group portrait of a city guard.',
    reviews: '',
  },
  {
    id: 'u3v4w5x6-1234-5678-9101-112131415179',
    product_name: 'Guernica',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    rating: '5/5',
    age: '1937-01-01', // Updated to YYYY-MM-DD
    artist: 'Pablo Picasso',
    style: 'Cubism',
    category: 'War',
    price: 12000,
    status: 'On Sale',
    description: 'A powerful anti-war statement.',
    reviews: '',
  },
];

export { user, admin, product };