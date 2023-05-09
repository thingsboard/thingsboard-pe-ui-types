import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute } from '@angular/router';
import { ReCaptcha2Component, ReCaptchaV3Service } from 'ngx-captcha';
import { MobileService } from '@core/services/mobile.service';
import { SelfRegistrationService } from '@app/core/http/self-register.service';
import * as i0 from "@angular/core";
export declare class TbRecaptchaComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private activatedRoute;
    private selfRegistrationService;
    private reCaptchaV3Service;
    private mobileService;
    recaptchaComponent: ReCaptcha2Component;
    signupParams: import("../../../../shared/models/self-register.models").SignUpSelfRegistrationParams;
    recaptchaResponse: string;
    isMobileApp: boolean;
    constructor(store: Store<AppState>, activatedRoute: ActivatedRoute, selfRegistrationService: SelfRegistrationService, reCaptchaV3Service: ReCaptchaV3Service, mobileService: MobileService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onRecaptchaResponse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbRecaptchaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbRecaptchaComponent, "tb-recaptcha", never, {}, {}, never, never, false, never>;
}
