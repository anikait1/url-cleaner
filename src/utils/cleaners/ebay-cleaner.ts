import { ProductIdPath, urlCleaner } from "../../@types/types";

export const ebayCleaner: urlCleaner = (url) => {
  const baseUrl = url.origin;
  const productId = getProductIdPath(url.pathname);

  if (productId.success) {
    return baseUrl + "/itm/" + productId.path;
  } else {
    return ""; // call to some other function
  }
};


// URL Given: https://www.ebay.com/itm/For-Nintendo-Switch-Pro-Controller-Black-GET-IT-FAST-US-SHIPPER/333755245488?hash=item4db55ce3b0:g:BhsAAOSwIs9fiJnr
// Result: 333755245488
const getProductIdPath = (urlPath: string): ProductIdPath => {
  const pattern = new RegExp(/a/); // to be implemented
  const result = urlPath.match(pattern);

  if (result !== null) {
    return { success: true, path: result[0] };
  } else {
    return { success: false, path: null };
  }
};
