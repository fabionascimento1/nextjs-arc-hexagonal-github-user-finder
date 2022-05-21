import { httpInstance } from "core/shared/request/httpInstance";
import { IHttpClient } from "../types";

export const httpClient: IHttpClient = {
  list: async (dto, filterDTO) => {
    const {data} = await httpInstance.get('/clientes', {params: {...dto, ...filterDTO } });
    return data
  },
  get: async ({id}) => {
    const { data } = await httpInstance.get(`/clientes/${id}`)
    return data
  }
}