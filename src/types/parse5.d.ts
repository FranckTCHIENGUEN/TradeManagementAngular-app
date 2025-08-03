declare module 'parse5/dist/tree-adapters/default' {
  export interface Element {
    tagName: string;
    attrs: Array<{ name: string; value: string }>;
    childNodes: Element[];
    parentNode?: Element;
  }

  export interface Document {
    childNodes: Element[];
  }

  export interface TextNode {
    value: string;
    parentNode?: Element;
  }
}

