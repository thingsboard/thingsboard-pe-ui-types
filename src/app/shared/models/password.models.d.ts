import { UserPasswordPolicy } from '@shared/models/settings.models';
import { ValidatorFn } from '@angular/forms';
export declare enum TooltipPasswordErrorMessageKey {
    minLength = "security.password-requirement.password-tooltip-min-length",
    maxLength = "security.password-requirement.password-tooltip-max-length",
    notUpperCase = "security.password-requirement.password-tooltip-uppercase",
    notLowerCase = "security.password-requirement.password-tooltip-lowercase",
    notNumeric = "security.password-requirement.password-tooltip-digit",
    notSpecial = "security.password-requirement.password-tooltip-special-characters",
    hasWhitespaces = "security.password-requirement.password-should-not-contain-spaces"
}
export declare const passwordErrorRules: {
    key: string;
    policyProp: string;
    translation: TooltipPasswordErrorMessageKey;
}[];
export declare const passwordsMatchValidator: (firstControlName: string, secondControlName: string) => ValidatorFn;
export declare const passwordStrengthValidator: (passwordPolicy: UserPasswordPolicy) => ValidatorFn;
