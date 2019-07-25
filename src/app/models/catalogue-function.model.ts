import { CatalogFunctionMeta } from './catalogue-function-meta.model';

export class CatalogFunction {
  catalogue: string;
  description: string;
  name: string;
  tags: any;
  url: string;
  meta: CatalogFunctionMeta;
  starred: boolean;

  constructor(
    description: string,
    name: string,
    tags: any,
    url: string,
    meta: CatalogFunctionMeta,
    starred: boolean,
    catalogue?: string
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
