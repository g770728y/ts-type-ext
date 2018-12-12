/**
 * X = {a:any, b:any, c:any}
 * Omit<X, 'a'|'b'> = {c:any}
 */
export type Omit<T, K extends keyof any> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

/**
 * X = {a:any, b:any, c:any}
 * Stringify<X> = {a:string, b:string, c:string}
 */
export type Stringify<T> = { [P in keyof T]: string };

/**
 * X = {a:any, b:any, c:any}
 * Boolify<X> = {a:boolean, b:boolean, c:boolean}
 */
export type Boolify<T> = { [P in keyof T]: boolean };
