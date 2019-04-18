import { CatalogFunctionMeta } from './catalogue-function-meta.model';

export class CatalogFunction {
  catalogue: string;
  description: string;
  name: string;
  tags: string[];
  url: string;
  meta: CatalogFunctionMeta[];
  starred: boolean;

  constructor(
    catalogue: string,
    description: string,
    name: string,
    tags: string[],
    url: string,
    meta: CatalogFunctionMeta[],
    starred: boolean
  ) {
    this.catalogue = catalogue;
    this.description = description;
    this.name = name;
    this.tags = tags;
    this.url = url;
    this.meta = meta;
    this.starred = starred;
  }
}
