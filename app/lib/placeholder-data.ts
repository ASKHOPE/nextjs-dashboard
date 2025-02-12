// Contains the Database place holder information

//This code is for normal user where seller status is false
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    privilege: 'User',
  },
];

//This code is for normal user where seller status is True
const admin = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User1',
    email: 'admin@nextmail.com',
    password: '123456',
    privilege: 'Seller',
  },
];


const product = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    product_name: 'Evil Rabbit',
    image_url: 'https://images.unsplash.com/photo-1739054239615-02944e9c338b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: '4/5',
    age: '02-04-1900',
    artist: 'Evil Rabbit',
    style: 'Abstract',
    category: 'Weird',
    price: 1000,
    status: 'Onsale',
    description: 'Lorem Ipsum Skbiibidid',
    reviews: '',
  }
];
export { users, admin, product };