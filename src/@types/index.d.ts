/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />

import "styled-components";

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: any | DefaultTheme;
  }
}

// Add support for Jest configuration
declare global {
  namespace NodeJS {
    export interface Global {
      ___loader: any;
    }
  }
}

declare const firebase: typeof import('firebase');

// Prevent typescript from complaining about various file paths
declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.sass' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.yaml' {
  const content: any;
  export default content;
}

declare module 'async!*' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare namespace JSX {
  interface HTMLAttributes {
    native?: string;
  }
}

type ZustandCreate<T> = (set) => T;
type ZustandUse<T> = (store: T) => Partial<T>;
declare module "zustand" {
  function create<T>(fn: ZustandCreate<T>): ZustandUse<T>[];
  export = create;
}