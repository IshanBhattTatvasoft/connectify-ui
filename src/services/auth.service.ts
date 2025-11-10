import { IApiResponse } from "@/models/standard-response";
import BaseService from "./base.service";
import { trackPromise } from "react-promise-tracker";

interface AuthPayload {
  email?: string;
  password?: string;
  id_token?: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const Signup = async (
  payload: AuthPayload
): Promise<IApiResponse<AuthResponse>> => {
  try {
    const response = await trackPromise(
      BaseService.post("/auth/signup", payload)
    );
    const res = response.data;
    return Promise.resolve({
      statusCode: res.statusCode,
      message: res.message,
      data: res.data,
      error: res.error || undefined,
    });
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};

export const GoogleAuthCallback = async (
  code: string
): Promise<IApiResponse<AuthResponse>> => {
  try {
    const response = await trackPromise(
      BaseService.post("/auth/google/callback", JSON.stringify({ code }))
    );
    const res = response.data;
    return Promise.resolve({
      statusCode: res.statusCode,
      message: res.message,
      data: res.data,
      error: res.error || undefined,
    });
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};

export const ForgotPassword = async (
  email: string
): Promise<IApiResponse<null>> => {
  try {
    const response = await trackPromise(
      BaseService.post("/auth/forgot-password/send-otp", email)
    );
    const res = response.data;
    return Promise.resolve({
      statusCode: res.statusCode,
      message: res.message,
      data: res.data,
      error: res.error || undefined,
    });
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};
