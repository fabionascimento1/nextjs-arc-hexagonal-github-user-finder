import { FilterRequestDTO } from '../types';

export class FilterBuilder {
  readonly dto: FilterRequestDTO = {};

  equals(key: string, value: any) {
    this.dto[`${key}::${value}`] = '';

    return this;
  }

  like(key: string[], value: string) {
    this.dto[`${key.toString()}:like:${value}`] = '';

    return this;
  }
}
