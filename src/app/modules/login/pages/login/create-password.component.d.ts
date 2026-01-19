import { AuthService } from '@core/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import { PageComponent } from '@shared/components/page.component';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class CreatePasswordComponent extends PageComponent {
    private route;
    private authService;
    wl: WhiteLabelingService;
    private fb;
    passwordPolicy: UserPasswordPolicy;
    createPassword: FormGroup;
    isLoading: boolean;
    private activateToken;
    class: string;
    constructor(route: ActivatedRoute, authService: AuthService, wl: WhiteLabelingService, fb: FormBuilder);
    private buildCreatePasswordForm;
    onCreatePassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreatePasswordComponent, "tb-create-password", never, {}, {}, never, never, false, never>;
}
