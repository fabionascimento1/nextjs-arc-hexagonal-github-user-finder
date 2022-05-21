import { exceptionLoggerClient } from "core/shared/adapters/exceptionLoggerClient";
import { httpClient } from "../adapters";
import { GetClientes } from "../types";

export const getClientes: GetClientes = async ({ onSuccess, onError}, dto, filterDTO) => {
  try {
    const data = await httpClient.list(dto, filterDTO)
    onSuccess?.(data)
  } catch (error) {
    exceptionLoggerClient.captureException(error);
    onError?.('Ocorreu um erro ao listar os clientes');
  }
}