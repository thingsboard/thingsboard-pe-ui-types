import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SocialSharePanelComponent implements OnInit {
    shareTitle: string;
    shareText: string;
    shareLink: string;
    shareHashTags: string;
    constructor();
    ngOnInit(): void;
    isShareLinkLocal(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocialSharePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SocialSharePanelComponent, "tb-social-share-panel", never, { "shareTitle": "shareTitle"; "shareText": "shareText"; "shareLink": "shareLink"; "shareHashTags": "shareHashTags"; }, {}, never, never, false, never>;
}
