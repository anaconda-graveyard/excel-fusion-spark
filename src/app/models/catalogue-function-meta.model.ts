export interface FunctionInput {
  name: string;
  type: string;
}

export class CatalogFunctionMeta {
  name: string;
  docstring: string;
  inputs: FunctionInput[];

  constructor(name: string, docstring: string, inputs: FunctionInput[]) {
    this.name = name;
    this.docstring = docstring;
    this.inputs = inputs;
  }
}
