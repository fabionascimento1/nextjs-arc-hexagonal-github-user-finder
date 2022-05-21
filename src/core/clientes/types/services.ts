import { AsyncHandler, FilterRequestDTO, GetListRequestDTO } from "core/shared/types";
import { GetClienteRequestDTO, GetClientesResponseDTO } from "./dto";

export type GetCliente = (handler: AsyncHandler<GetClienteRequestDTO>, dto: GetClienteRequestDTO) => Promise<void>

export type GetClientes = (
  handler: AsyncHandler<GetClientesResponseDTO>,
  dto: GetListRequestDTO,
  filterDTO: FilterRequestDTO,
) => Promise<void>
