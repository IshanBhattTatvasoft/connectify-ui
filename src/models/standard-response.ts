export interface IApiResponse<T> {
    statusCode?: number;
    message?: string;
    data?: T | null;
    error?: string; // optional, for error detail if needed
}
