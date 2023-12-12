import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { ImagePipe } from '@shared/pipe/image.pipe';
import * as i0 from "@angular/core";
export declare class FaviconService {
    private whiteLabelingService;
    private imagePipe;
    private favicon;
    constructor(whiteLabelingService: WhiteLabelingService, imagePipe: ImagePipe);
    setFavicon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FaviconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FaviconService>;
}
