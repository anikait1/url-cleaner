import { ProductIdPath, urlCleaner } from "../../@types/types";

const flipkartCleaner: urlCleaner = (url) => {
  const baseUrl = url.origin;
  const productId = getProductIdPath(url.pathname);

  if (productId.success) {
    return baseUrl + productId.path;
  } else {
    return "";
  }
};

const getProductIdPath = (urlPath: string): ProductIdPath => {
  const pattern = new RegExp(""); // to be implemented
  const result = urlPath.search(pattern);

  if (result !== -1) {
    return { success: true, path: urlPath };
  } else {
    return { success: false, path: null };
  }
};

export default flipkartCleaner;
