import authHttp from "../authHttp";

export const getUserService = async () => {
  const url = `/api/user/getuser`;
  const { data } = await authHttp.get(url);
  return data;
};

// ** Edit User Info
export const editUserInfo = async (val) => {
  const url = "/api/user/update-user-info";
  const res = await authHttp.post(url, val);
  return res;
};
