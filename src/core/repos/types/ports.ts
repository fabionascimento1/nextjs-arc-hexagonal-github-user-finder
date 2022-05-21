import { FilterRequestDTO } from "core/shared/types";
import { GetUserRequestDTO } from "core/users/types";
import { UserReposReponseDTO } from "./dto";

export interface IHttpClient {
  list(dto: GetUserRequestDTO, filterDTO: FilterRequestDTO): Promise<UserReposReponseDTO>
}