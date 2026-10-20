import ProductCondition from "../models/ProductCondition";

export const conditions = [
  new ProductCondition({ id: 1, name: "Like New", description: "Barely used, no visible wear." }),
  new ProductCondition({ id: 2, name: "Good", description: "Used with light signs of wear." }),
  new ProductCondition({ id: 3, name: "Fair", description: "Visible wear, still full of life." }),
];
