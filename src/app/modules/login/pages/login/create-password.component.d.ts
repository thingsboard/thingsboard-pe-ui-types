import { OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CreatePasswordComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private authService;
    private translate;
    fb: FormBuilder;
    activateToken: string;
    sub: Subscription;
    createPassword: import("@angular/forms").FormGroup;
    constructor(store: Store<AppState>, route: ActivatedRoute, authService: AuthService, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onCreatePassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreatePasswordComponent, "tb-create-password", never, {}, {}, never, never>;
}
