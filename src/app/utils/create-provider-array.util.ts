import { Type } from '@angular/core';

export function createProviderArray<T>(
  baseClasses: Type<any>[],
  ...customClasses: Type<any>[]
): Type<T>[] {
  const providerArray: Type<T>[] = [];

  for (const customClass of customClasses) {
    let foundBaseClass: Type<T> | null = null;

    for (const baseClass of baseClasses) {
      if (customClass.prototype instanceof baseClass) {
        foundBaseClass = customClass;
        break;
      }
    }

    providerArray.push(foundBaseClass || customClass);
  }

  return providerArray;
}
