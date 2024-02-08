import authHttp from "../authHttp";
import { endPoint } from "../utils";

export const getUserDetails = async () => {
  const url = endPoint.user_details;
  const { data } = await authHttp.get(url);
  return data;
};
