import { ProductIdPath, urlCleaner } from "../../@types/types";

const amazonCleaner: urlCleaner = (url) => {
  const baseUrl = url.origin;
  const productId = getProductIdPath(url.pathname);

  if (productId.success) {
    return baseUrl + "/dp/" + productId.path;
  } else {
    return "" // call to some other function
  }
};

const removeExtraQueryParameters = () => {
  throw new Error("To be implemented");
}

const getProductIdPath = (urlPath: string): ProductIdPath => {
  const pattern = new RegExp(/gp\/product\/([A-Z0-9]{10})|dp\/([A-Z0-9]{10})/);
  const result = urlPath.match(pattern);

  if (result !== null) {
    return { success: true, path: result[1] ?? result[2] };
  } else {
    return { success: false, path: null };
  }
};

export default amazonCleaner;
