import { tdomainMapper } from "../@types/types";
import amazonCleaner from "./cleaners/amazon-cleaner";
import flipkartCleaner from "./cleaners/flipkart-cleaner";


const domainMapper: tdomainMapper = {
  "amazon": amazonCleaner,
  "flipkart": flipkartCleaner,
}

export default domainMapper;