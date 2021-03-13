import { ProductIdPath, urlCleaner } from "../../@types/types";

export const walmartCleaner: urlCleaner = (url) => {
  const baseUrl = url.origin;
  const productId = getProductIdPath(url.pathname);

  if (productId.success) {
    return baseUrl + "/ip/" + productId.path;
  } else {
    return ""; // call to some other function
  }
};


// URL Given: https://www.walmart.com/ip/Activision-Tony-Hawk-s-Pro-Skater-1-2-for-XBOX-ONE/804076244
// Result: 804076244
const getProductIdPath = (urlPath: string): ProductIdPath => {
  const pattern = new RegExp(/a/); // to be implemented
  const result = urlPath.match(pattern);

  if (result !== null) {
    return { success: true, path: result[0] };
  } else {
    return { success: false, path: null };
  }
};
