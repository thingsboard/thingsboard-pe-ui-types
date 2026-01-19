import { AuthService } from '@core/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class ResetPasswordComponent {
    private route;
    private router;
    private authService;
    private fb;
    wl: WhiteLabelingService;
    isExpiredPassword: boolean;
    isLoading: boolean;
    resetPassword: FormGroup;
    passwordPolicy: UserPasswordPolicy;
    private resetToken;
    class: string;
    constructor(route: ActivatedRoute, router: Router, authService: AuthService, fb: FormBuilder, wl: WhiteLabelingService);
    private buildResetPasswordForm;
    onResetPassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResetPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResetPasswordComponent, "tb-reset-password", never, {}, {}, never, never, false, never>;
}
