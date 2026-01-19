import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AbstractControl } from '@angular/forms';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class PasswordRequirementsTooltipComponent {
    passwordControl: AbstractControl;
    passwordPolicy: UserPasswordPolicy;
    trigger: CdkOverlayOrigin;
    passwordErrorRules: {
        key: string;
        policyProp: string;
        translation: import("@shared/models/password.models").TooltipPasswordErrorMessageKey;
    }[];
    isTooltipOpen: boolean;
    overlayPositions: ConnectionPositionPair[];
    checkForError(errorName: string): boolean;
    onFocus(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordRequirementsTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PasswordRequirementsTooltipComponent, "tb-password-requirements-tooltip", never, { "passwordControl": { "alias": "passwordControl"; "required": false; }; "passwordPolicy": { "alias": "passwordPolicy"; "required": false; }; "trigger": { "alias": "trigger"; "required": false; }; }, {}, never, never, false, never>;
}
