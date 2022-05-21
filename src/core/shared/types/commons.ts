import { SafelyOmit } from "helpers/utility-types";

export type AsyncHandler<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
};

export type MutateAsyncHandler<T> =
  | AsyncHandler<T>
  | (SafelyOmit<AsyncHandler<T>, 'onSuccess'> & {
      onSuccess?: () => void;
    });

export type GetListRequestDTO = {
  offset?: number;
  size?: number;
};

export type FilterRequestDTO = {
  [K: string]: '';
};

export interface GenericListResponseDTO<T> {
  content: T;
  totalElements: number;
  totalPages: number;
  empty: boolean;
}
