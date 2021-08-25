const data = {
  users: [
    {
      phone: "8866867958",
      isAdmin: true,
    },
    {
      name: "testuser",
      phone: "9876543219",
    },
  ],
  products: [
    {
      name: "Potato",
      price: 21,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_294635.jpg?ts=1624365346",
      quantity: 0,
      purchasing: false,
      unit: "1 kg",
      description: "Good quality Potatos",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do. Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Onions",
      price: 21,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_391306.jpg?ts=1624365351",
      quantity: 0,
      purchasing: false,
      unit: "1 kg",
      description: "good quality Onions",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Tomato",
      price: 31,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_391307.jpg?ts=1624365348",
      quantity: 0,
      purchasing: false,
      unit: "1 kg",
      description: "good quality Tomato",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Onion",
      price: 20,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_294626.jpg?ts=1624365348",
      quantity: 0,
      purchasing: false,
      unit: "1 kg",
      description: "good quality Onion",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Beetroot",
      price: 25,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_166848.jpg?ts=1624364061",
      quantity: 0,
      purchasing: false,
      unit: "500 g",
      description: "good quality Beetroot",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Black Brinjal",
      price: 23,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_9098.jpg?ts=1624364057",
      quantity: 0,
      purchasing: false,
      unit: "500 g",
      description: "good quality Black Brinjal",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Green Chilli",
      price: 11,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_3897.jpg?ts=1603280420",
      quantity: 0,
      purchasing: false,
      unit: "100 g",
      description: "good quality Green Chilli",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Colocasia",
      price: 13,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_3885.jpg?ts=1624370250",
      quantity: 0,
      purchasing: false,
      unit: "250 g",
      description: "good quality Colocasia",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Lady Finger - Bhindi",
      price: 41,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_237680.jpg?ts=1624364060",
      quantity: 0,
      purchasing: false,
      unit: "500 g",
      description: "good quality Lady Finger - Bhindi",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Lady Ginger",
      price: 18,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_95032.jpg?ts=1610740218",
      quantity: 0,
      purchasing: false,
      unit: "200 g",
      description: "good quality Lady Ginger",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Royal Gala Apple Imported",
      price: 196,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_311059.jpg?ts=1624365352",
      quantity: 0,
      purchasing: false,
      unit: "4 units (500 - 700 g)",
      description: "good quality Royal Gala Apple Imported",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Brown Coconut (Nariyal)",
      price: 35,
      image:
        "//cdn.grofers.com/app/images/products/normal/pro_4943.jpg?ts=1624364059",
      quantity: 0,
      purchasing: false,
      unit: "1 unit",
      description: "good quality Brown Coconut (Nariyal)",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Lemon",
      price: 16,
      image:
        "//cdn.grofers.com/app/images/products/normal/pro_17748.jpg?ts=1624370253",
      quantity: 0,
      purchasing: false,
      unit: "6 units (200 g)",
      description: "good quality Lemon",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Lotus Stem (Kamal Kakri)",
      price: 71,
      image:
        "//cdn.grofers.com/app/images/products/normal/pro_443551.jpg?ts=1624367310",
      quantity: 0,
      purchasing: false,
      unit: "250 g",
      description: "good quality Lotus Stem (Kamal Kakri)",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Pomegranate (Anaar)",
      price: 91,
      image:
        "//cdn.grofers.com/app/images/products/normal/pro_321169.jpg?ts=1603280422",
      quantity: 0,
      purchasing: false,
      unit: "2units (400-500 g)",
      description: "good quality Pomegranate (Anaar)",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Bitter Gourd (Karela)",
      price: 50,
      image:
        "//cdn.grofers.com/app/images/products/normal/pro_240847.jpg?ts=1624364060",
      quantity: 0,
      purchasing: false,
      unit: "500 g",
      description: "good quality Bitter Gourd (Karela)",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Yellow Capsicum",
      price: 39,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_39395.jpg?ts=1606811352",
      quantity: 0,
      purchasing: false,
      unit: "1 unit ( 150-200 g)",
      description: "good quality Yellow Capsicum",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Pineapple",
      price: 91,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_189822.jpg?ts=1624364059",
      quantity: 0,
      purchasing: false,
      unit: "1 unit (1 kg - 1.4 kg)",
      description: "good quality Pineapple",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Green Apple Imported",
      price: 231,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_336515.jpg?ts=1624365350",
      quantity: 0,
      purchasing: false,
      unit: "4 units ( 500-700 g)",
      description: "good quality Green Apple Imported",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Red Capsicum",
      price: 39,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_39394.jpg?ts=1606811352",
      quantity: 0,
      purchasing: false,
      unit: "1 unit ( 150-200 g)",
      description: "good quality Red Capsicum",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Baby Corn - Packet",
      price: 67,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_137816.jpg?ts=1627482575",
      quantity: 0,
      purchasing: false,
      unit: "200 g",
      description: "good quality Baby Corn - Packet",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Basil Leaves",
      price: 38,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_440230.jpg?ts=1624367312",
      quantity: 0,
      purchasing: false,
      unit: "50 g",
      description: "good quality Basil Leaves",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Celery",
      price: 88,
      image:
        "//cdn.grofers.com/app/images/products/normal/pro_444358.jpg?ts=1624367315",
      quantity: 0,
      purchasing: false,
      unit: "250 g",
      description: "good quality Celery",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Cluster Beans (Guar Phali)",
      price: 28,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_3924.jpg?ts=1627649571",
      quantity: 0,
      purchasing: false,
      unit: "250 g",
      description: "good quality Cluster Beans (Guar Phali)",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
    {
      name: "Red Globe Grapes Imported",
      price: 248,
      image:
        "https://cdn.grofers.com/app/images/products/normal/pro_294781.jpg?ts=1624365347",
      quantity: 0,
      purchasing: false,
      unit: "500 g",
      description: "good quality Red Globe Grapes Imported",
      nutrient:
        "Nulla cupidatat consectetur mollit Lorem duis magna adipisicing anim do.",
    },
  ],
};

export default data;
