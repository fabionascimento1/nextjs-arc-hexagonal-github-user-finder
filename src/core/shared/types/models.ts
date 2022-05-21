export type List<T> = {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  empty: boolean;
};

export type Pageable = {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type Sort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};
