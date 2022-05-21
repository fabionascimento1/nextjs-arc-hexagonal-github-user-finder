import { httpInstance } from "core/shared/request/httpInstance";
import { IHttpClient } from "../types";

export const httpClient: IHttpClient = {
  list: async ({ login, ...dto }, filterDTO) => {
    const { data } = await httpInstance.get(`/users/${login}/repos`, { params: { ...dto, ...filterDTO } });
    return data
  },
}