import { exceptionLoggerClient } from "core/shared/adapters/exceptionLoggerClient";
import { httpClient } from "../adapters";
import { GetUser } from "../types";

export const getUser: GetUser = async ({ onSuccess, onError }, dto, filterDTO) => {
  try {
    const data = await httpClient.list(dto, filterDTO)
    onSuccess?.(data)
  } catch (error) {
    exceptionLoggerClient.captureException(error);
    onError?.('Ocorreu um erro ao listar User');
  }
}