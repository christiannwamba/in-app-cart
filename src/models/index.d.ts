import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductCampaignsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cart {
  readonly id: string;
  readonly productId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Product {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly country?: string;
  readonly image?: string;
  readonly campaigns?: (ProductCampaigns | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Campaign {
  readonly id: string;
  readonly trigger?: string;
  readonly discount?: number;
  readonly products?: (ProductCampaigns | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Campaign, CampaignMetaData>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void): Campaign;
}

export declare class ProductCampaigns {
  readonly id: string;
  readonly productID: string;
  readonly campaignID: string;
  readonly product: Product;
  readonly campaign: Campaign;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductCampaigns, ProductCampaignsMetaData>);
  static copyOf(source: ProductCampaigns, mutator: (draft: MutableModel<ProductCampaigns, ProductCampaignsMetaData>) => MutableModel<ProductCampaigns, ProductCampaignsMetaData> | void): ProductCampaigns;
}