import { FilterRequestDTO, GetListRequestDTO } from "core/shared/types";
import { GetClienteRequestDTO, GetClienteResponseDTO, GetClientesResponseDTO } from "./dto";

export interface IHttpClient {
  list(dto: GetListRequestDTO, filterDTO?: FilterRequestDTO): Promise<GetClientesResponseDTO>
  get(dto: GetClienteRequestDTO): Promise<GetClienteResponseDTO>
}