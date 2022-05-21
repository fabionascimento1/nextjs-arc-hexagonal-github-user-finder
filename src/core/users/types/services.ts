import { AsyncHandler, FilterRequestDTO, GetListRequestDTO } from "core/shared/types";
import { GetUserRequestDTO, ListUsersResponseDTO } from "./dto";

export type GetUser = (
  handler: AsyncHandler<ListUsersResponseDTO>,
  dto: GetUserRequestDTO,
  filterDTO: FilterRequestDTO,
) => Promise<void>
