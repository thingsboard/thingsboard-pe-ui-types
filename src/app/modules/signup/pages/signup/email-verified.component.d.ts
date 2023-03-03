import { OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { LoginResponse } from '@shared/models/login.models';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class EmailVerifiedComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private router;
    wl: WhiteLabelingService;
    private authService;
    emailCode: string;
    sub: Subscription;
    loginResponse: LoginResponse;
    activated: Subject<boolean>;
    class: string;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, wl: WhiteLabelingService, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    activateAndGetCredentials(): void;
    login(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailVerifiedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailVerifiedComponent, "tb-email-verified", never, {}, {}, never, never, false, never>;
}
