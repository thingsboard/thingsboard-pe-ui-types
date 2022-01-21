import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class FaviconService {
    private whiteLabelingService;
    private favicon;
    constructor(whiteLabelingService: WhiteLabelingService);
    setFavicon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FaviconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FaviconService>;
}
