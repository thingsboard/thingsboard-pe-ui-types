import { ActivatedRoute } from '@angular/router';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class LinkExpiredComponent {
    private route;
    wl: WhiteLabelingService;
    isPasswordLinkExpired: boolean;
    title: string;
    message: string;
    constructor(route: ActivatedRoute, wl: WhiteLabelingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkExpiredComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkExpiredComponent, "tb-link-expired", never, {}, {}, never, never, false, never>;
}
