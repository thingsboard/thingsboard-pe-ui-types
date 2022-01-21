export interface LoginRequest {
    username: string;
    password: string;
}
export interface PublicLoginRequest {
    publicId: string;
}
export interface LoginResponse {
    token: string;
    refreshToken: string;
}
