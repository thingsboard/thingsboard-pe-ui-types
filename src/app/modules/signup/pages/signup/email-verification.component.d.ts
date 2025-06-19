import { AuthService } from '@core/auth/auth.service';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute } from '@angular/router';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class EmailVerificationComponent extends PageComponent {
    private route;
    wl: WhiteLabelingService;
    private authService;
    class: string;
    private email;
    constructor(route: ActivatedRoute, wl: WhiteLabelingService, authService: AuthService);
    resendEmail(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailVerificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailVerificationComponent, "tb-email-verification", never, {}, {}, never, never, false, never>;
}
