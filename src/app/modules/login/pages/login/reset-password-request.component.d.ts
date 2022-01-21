import { OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ResetPasswordRequestComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private authService;
    private translate;
    fb: FormBuilder;
    clicked: boolean;
    requestPasswordRequest: import("@angular/forms").FormGroup;
    constructor(store: Store<AppState>, authService: AuthService, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    disableInputs(): void;
    sendResetPasswordLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResetPasswordRequestComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResetPasswordRequestComponent, "tb-reset-password-request", never, {}, {}, never, never>;
}
