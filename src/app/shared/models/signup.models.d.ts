interface SignupRequestFields {
    EMAIL: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    PASSWORD: string;
}
export declare class SignupRequest {
    fields: SignupRequestFields;
    recaptchaResponse: string;
    constructor(firstName: string, lastName: string, email: string, password: string, recaptchaResponse: string);
    static create(): SignupRequest;
}
export declare enum SignUpResult {
    SUCCESS = "SUCCESS",
    INACTIVE_USER_EXISTS = "INACTIVE_USER_EXISTS"
}
export {};
