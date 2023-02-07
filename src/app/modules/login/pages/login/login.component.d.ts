import { OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SelfRegistrationService } from '@core/http/self-register.service';
import { OAuth2ClientInfo } from '@shared/models/oauth2.models';
import * as i0 from "@angular/core";
export declare class LoginComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private authService;
    wl: WhiteLabelingService;
    selfRegistrationService: SelfRegistrationService;
    private translateService;
    fb: UntypedFormBuilder;
    private router;
    loginFormGroup: import("@angular/forms").UntypedFormGroup;
    oauth2Clients: Array<OAuth2ClientInfo>;
    class: string;
    constructor(store: Store<AppState>, authService: AuthService, wl: WhiteLabelingService, selfRegistrationService: SelfRegistrationService, translateService: TranslateService, fb: UntypedFormBuilder, router: Router);
    ngOnInit(): void;
    login(): void;
    platformNameAndVersion$(): Observable<string>;
    getOAuth2Uri(oauth2Client: OAuth2ClientInfo): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "tb-login", never, {}, {}, never, never, false>;
}
