// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Business, BusinessProduct, Product, Cart, CartIte, User } = initSchema(schema);

export {
  Business,
  BusinessProduct,
  Product,
  Cart,
  CartIte,
  User
};