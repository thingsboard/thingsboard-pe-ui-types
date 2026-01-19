import { AuthService } from '@core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class EmailVerifiedComponent {
    private route;
    private router;
    wl: WhiteLabelingService;
    private authService;
    activated: BehaviorSubject<boolean>;
    isLoading: boolean;
    class: string;
    private emailCode;
    private loginResponse;
    constructor(route: ActivatedRoute, router: Router, wl: WhiteLabelingService, authService: AuthService);
    login(): void;
    private activateAndGetCredentials;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailVerifiedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailVerifiedComponent, "tb-email-verified", never, {}, {}, never, never, false, never>;
}
