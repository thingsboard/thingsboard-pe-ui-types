import { OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class EmailVerificationComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private router;
    wl: WhiteLabelingService;
    private authService;
    email: string;
    sub: Subscription;
    class: string;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, wl: WhiteLabelingService, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    resendEmail(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailVerificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailVerificationComponent, "tb-email-verification", never, {}, {}, never, never>;
}
