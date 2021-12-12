// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Product, Campaign, ProductCampaigns } = initSchema(schema);

export {
  Cart,
  Product,
  Campaign,
  ProductCampaigns
};