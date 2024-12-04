import { OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { ReCaptcha2Component, ReCaptchaV3Service } from 'ngx-captcha';
import { MobileService } from '@core/services/mobile.service';
import { SelfRegistrationService } from '@app/core/http/self-register.service';
import { ActivatedRoute } from '@angular/router';
import { CaptchaParams } from '@shared/models/self-register.models';
import * as i0 from "@angular/core";
export declare class TbRecaptchaComponent extends PageComponent implements OnInit, OnDestroy {
    private selfRegistrationService;
    private reCaptchaV3Service;
    private mobileService;
    private route;
    recaptchaComponent: ReCaptcha2Component;
    captcha: CaptchaParams;
    recaptchaResponse: string;
    activeCaptcha: boolean;
    private isMobileApp;
    constructor(selfRegistrationService: SelfRegistrationService, reCaptchaV3Service: ReCaptchaV3Service, mobileService: MobileService, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onRecaptchaResponse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbRecaptchaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbRecaptchaComponent, "tb-recaptcha", never, {}, {}, never, never, false, never>;
}
