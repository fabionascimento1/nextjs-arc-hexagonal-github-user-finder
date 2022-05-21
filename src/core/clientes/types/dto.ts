import { List } from "core/shared/types";
import { Cliente } from "./models";
export type GetClienteResponseDTO = Cliente & Required<Pick<Cliente, 'id'>>
export type GetClientesResponseDTO = List<GetClienteResponseDTO>
export type GetClienteRequestDTO = Required<Pick<Cliente, 'id'>>