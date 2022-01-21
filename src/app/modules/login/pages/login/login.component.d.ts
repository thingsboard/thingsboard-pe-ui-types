import { OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OAuth2ClientInfo } from '@shared/models/oauth2.models';
import * as i0 from "@angular/core";
export declare class LoginComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private authService;
    fb: FormBuilder;
    private router;
    loginFormGroup: import("@angular/forms").FormGroup;
    oauth2Clients: Array<OAuth2ClientInfo>;
    constructor(store: Store<AppState>, authService: AuthService, fb: FormBuilder, router: Router);
    ngOnInit(): void;
    login(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "tb-login", never, {}, {}, never, never>;
}
