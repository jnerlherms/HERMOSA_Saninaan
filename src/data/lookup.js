import { categories } from "./categories";
import { conditions } from "./conditions";
import { vendors } from "./vendors";
import { products } from "./products";

export const getCategory = (id) => categories.find((c) => c.id === id);
export const getCondition = (id) => conditions.find((c) => c.id === id);
export const getVendor = (id) => vendors.find((v) => v.id === id);
export const getProduct = (id) => products.find((p) => p.id === id);
