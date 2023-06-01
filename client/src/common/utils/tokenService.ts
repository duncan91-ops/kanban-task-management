import api from "./api.interceptor";

export type Token = {
  access: string;
  refresh: string;
};

const saveToken = (token: Token) => {
  localStorage.removeItem("token");
  localStorage.setItem("token", JSON.stringify(token));
};

const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token.access) {
    return token as Token;
  }
  return null;
};

const refreshToken = async () => {
  const token = getToken();
  const refresh = token?.refresh || null;
  if (refresh) {
    const response = await api.post("/auth/jwt/refresh/", { refresh });
    const access = response.data.access;
    saveToken({ access, refresh });
  }
};

const tokenService = { saveToken, getToken, refreshToken };
export default tokenService;
