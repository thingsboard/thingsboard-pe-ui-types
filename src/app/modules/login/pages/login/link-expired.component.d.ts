import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class LinkExpiredComponent extends PageComponent {
    protected store: Store<AppState>;
    private route;
    private router;
    isPasswordLinkExpired: boolean;
    title: string;
    message: string;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router);
    navigateToLoginPage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkExpiredComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkExpiredComponent, "tb-link-expired", never, {}, {}, never, never, false, never>;
}
