import { OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SignupService } from '@core/http/signup.service';
import { DialogService } from '@core/services/dialog.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { SelfRegistrationService } from '@core/http/self-register.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class SignupComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private route;
    private router;
    private authService;
    private signupService;
    wl: WhiteLabelingService;
    private selfRegistrationService;
    private dialogService;
    private translate;
    private dialog;
    fb: UntypedFormBuilder;
    recaptchaComponent: RecaptchaComponent;
    signup: import("@angular/forms").UntypedFormGroup;
    passwordCheck: string;
    acceptPrivacyPolicy: boolean;
    acceptTermsOfUse: boolean;
    signupParams: import("../../../../shared/models/self-register.models").SignUpSelfRegistrationParams;
    class: string;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, authService: AuthService, signupService: SignupService, wl: WhiteLabelingService, selfRegistrationService: SelfRegistrationService, dialogService: DialogService, translate: TranslateService, dialog: MatDialog, fb: UntypedFormBuilder);
    ngOnInit(): void;
    signUp(): void;
    promptToResendEmailVerification(): void;
    validateSignUpRequest(): boolean;
    openPrivacyPolicy($event: Event): void;
    openTermsOfUse($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SignupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SignupComponent, "tb-signup", never, {}, {}, never, never, false>;
}
