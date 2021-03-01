export interface ProductIdPath {
  success: boolean;
  path: string | null;
}

export type tdomainMapper = {
  [key: string]: urlCleaner | null;
};

export type urlCleaner = (url: URL) => string;
