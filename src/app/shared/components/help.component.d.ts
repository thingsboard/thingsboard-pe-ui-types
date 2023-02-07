import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class HelpComponent {
    wl: WhiteLabelingService;
    constructor(wl: WhiteLabelingService);
    helpLinkId: string;
    gotoHelpPage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelpComponent, "[tb-help]", never, { "helpLinkId": "tb-help"; }, {}, never, never, false>;
}
