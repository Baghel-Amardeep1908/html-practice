const userProfile = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
  },
  contact: {
    email: "john.doe@example.com",
    phone: {
      home: "555-123-4567",
      work: "555-987-6543",
    },
  },
  isAdmin: false,
};

let deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let result = {};
  for (let i in obj) {
    result[i] = deepCopy(obj[i]);
    console.log("result ", result);
  }
  return result;
};
const copyObj = deepCopy(userProfile);
copyObj.address.state = "LA";
console.log("obj ", userProfile);
console.log("Copy ", copyObj);
