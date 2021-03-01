import { tdomainMapper } from "../@types/types";
import amazonCleaner from "./cleaners/amazon-cleaner";


const domainMapper: tdomainMapper = {
  "https://www.amazon.in": amazonCleaner,
}

export default domainMapper;