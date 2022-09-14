import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartIteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Business {
  readonly id: string;
  readonly name?: string | null;
  readonly descirption?: string | null;
  readonly image?: string | null;
  readonly rating?: string | null;
  readonly BusinessProducts?: (BusinessProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}

export declare class BusinessProduct {
  readonly id: string;
  readonly Product?: Product | null;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessProductProductId?: string | null;
  constructor(init: ModelInit<BusinessProduct, BusinessProductMetaData>);
  static copyOf(source: BusinessProduct, mutator: (draft: MutableModel<BusinessProduct, BusinessProductMetaData>) => MutableModel<BusinessProduct, BusinessProductMetaData> | void): BusinessProduct;
}

export declare class Product {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly rating?: number | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Cart {
  readonly id: string;
  readonly CartItes?: (CartIte | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class CartIte {
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly Product?: Product | null;
  readonly cartID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartIteProductId?: string | null;
  constructor(init: ModelInit<CartIte, CartIteMetaData>);
  static copyOf(source: CartIte, mutator: (draft: MutableModel<CartIte, CartIteMetaData>) => MutableModel<CartIte, CartIteMetaData> | void): CartIte;
}

export declare class User {
  readonly id: string;
  readonly userrname?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly image?: string | null;
  readonly Cart?: Cart | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}