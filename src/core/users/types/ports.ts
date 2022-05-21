import { FilterRequestDTO, GetListRequestDTO } from "core/shared/types";
import { GetUserRequestDTO, ListUsersResponseDTO } from "./dto";

export interface IHttpClient {
  list(dto: GetUserRequestDTO, filterDTO?: FilterRequestDTO): Promise<ListUsersResponseDTO>
}