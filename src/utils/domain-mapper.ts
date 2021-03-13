import { tdomainMapper } from "../@types/types";
import { amazonCleaner } from "./cleaners/amazon-cleaner";
import { flipkartCleaner } from "./cleaners/flipkart-cleaner";
import { ebayCleaner } from "./cleaners/ebay-cleaner";
import { walmartCleaner } from "./cleaners/walmart-cleaner";

const domainMapper: tdomainMapper = {
  "amazon": amazonCleaner,
  "flipkart": flipkartCleaner,
  "ebay": ebayCleaner,
  "walmart": walmartCleaner,
};

export default domainMapper;
