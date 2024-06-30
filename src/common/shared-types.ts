/**
 * A type representing the type rather than instance of a class.
 */
export interface Type<T> extends Function {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  new (...args: any[]): T;
}
