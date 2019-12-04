
export interface Deferred<T> extends Promise<T> {
  resolve(value: T): void;
  reject(err?: any): void;
}

export function deferred<T = any>(): Deferred<T> {
  let resolve!: (value: T) => void;
  let reject!: (err?: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return Object.assign(promise, { resolve, reject });
}
