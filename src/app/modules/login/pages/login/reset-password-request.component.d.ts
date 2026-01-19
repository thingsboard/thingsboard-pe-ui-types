import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class ResetPasswordRequestComponent extends PageComponent {
    protected store: Store<AppState>;
    private authService;
    private translate;
    wl: WhiteLabelingService;
    fb: UntypedFormBuilder;
    clicked: boolean;
    requestPasswordRequest: import("@angular/forms").UntypedFormGroup;
    class: string;
    constructor(store: Store<AppState>, authService: AuthService, translate: TranslateService, wl: WhiteLabelingService, fb: UntypedFormBuilder);
    disableInputs(): void;
    sendResetPasswordLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResetPasswordRequestComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResetPasswordRequestComponent, "tb-reset-password-request", never, {}, {}, never, never, false, never>;
}
