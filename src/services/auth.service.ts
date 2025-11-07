import apiClient from "./base.service";

interface SignupData {
  email: string;
  password?: string;
  id_token?: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const AuthService = {
  signup: async (payload: any) => {
    const { data } = await apiClient.post("/auth/sign-up", payload);
    return data;
  },

  login: async (data: LoginData) => {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  },

  refreshToken: async (refreshToken: string) => {
    const response = await apiClient.post("/auth/refresh-token", { refreshToken });
    return response.data;
  },

  googleAuth: async (idToken: string) => {
    const response = await apiClient.post("/auth/google", { id_token: idToken });
    return response.data;
  },
};
