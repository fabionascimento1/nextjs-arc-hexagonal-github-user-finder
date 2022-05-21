import { AsyncHandler, FilterRequestDTO } from "core/shared/types";
import { GetUserRequestDTO } from "core/users/types";
import { UserReposReponseDTO } from "./dto";

export type GetUserRepos = (
  handler: AsyncHandler<UserReposReponseDTO>,
  dto: GetUserRequestDTO,
  filterDTO: FilterRequestDTO
) => Promise<void>