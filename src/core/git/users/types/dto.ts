import { GetListRequestDTO } from "core/shared/types"
import { Users } from "./model"

export type GetUserRequestDTO = Pick<Users, 'login'> & GetListRequestDTO

export type ListUsersResponseDTO = Users