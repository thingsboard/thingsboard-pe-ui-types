export declare class SignupRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    recaptchaResponse: string;
    constructor(firstName: string, lastName: string, email: string, password: string, recaptchaResponse: string);
    static create(): SignupRequest;
}
export declare enum SignUpResult {
    SUCCESS = "SUCCESS",
    INACTIVE_USER_EXISTS = "INACTIVE_USER_EXISTS"
}
