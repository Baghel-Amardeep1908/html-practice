const users = [
  {
    id: 1,
    name: "Vishal",
    city: "Bihar",
  },
  {
    id: 2,
    name: "Ankit",
    city: "Morena",
  },
  {
    id: 3,
    name: "Ritesh",
    city: "Bhopal",
  },
];

const orders = [
  {
    id: 1,
    userId: 1,
    name: "Apple iPhone 14 Pro Max",
  },
  {
    id: 2,
    userId: 2,
    name: "Apple iPhone 13 Pro Max",
  },
  {
    id: 3,
    userId: 2,
    name: "Apple iPhone 12 Pro Max",
  },
  {
    id: 4,
    userId: 2,
    name: "Apple iPhone 11 Pro Max",
  },
];


const results = [
  {
    id: 1,
    name: 'Vishal',
    orders: [
      {
        productId: 1,
        productName: 'Apple iPhone 14 Pro Max'
      }
    ]
  },
  {
    id: 2,
    name: 'Ankit',
    orders: [
      {
        productId: 2,
        productName: 'Apple iPhone 13 Pro Max'
      },
      {
        productId: 3,
        productName: 'Apple iPhone 12 Pro Max'
      },
      {
        productId: 4,
        productName: 'Apple iPhone 11 Pro Max'
      }
    ]
  },
  {
    id: 3,
    name: 'Ritesh',
    orders: []
  }
]