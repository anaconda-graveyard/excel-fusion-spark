import { CatalogFunction } from '../models/catalogue-function.model'
import { CatalogFunctionMeta } from '../models/catalogue-function-meta.model'

const fi = { name: 'my_scotch', type: 'str'};
const meta = new CatalogFunctionMeta(
  'make_rec', '', [fi]
);

export const mockCatalogueFunctions = [
  new CatalogFunction(
    // tslint:disable-next-line: max-line-length
    'Make recommendations about the close Scotches to the selected scotch based on custom scotch based passed as input. Make recommendations about the close Scotches to the selected scotch based on custom scotch based passed as input. Make recommendations about the close Scotches to the selected scotch based on custom scotch based passed as input. Make recommendations about the close Scotches to the selected scotch based on custom scotch based passed as input.', //description
    'make_rec', // name
    'ml, ai', // tags
    'www.espn.com', // url
    [meta],
    false
  )
];
