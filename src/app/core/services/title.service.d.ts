import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { MenuService } from '@core/services/menu.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class TitleService {
    private translate;
    private menuService;
    private utils;
    private whiteLabelingService;
    private title;
    constructor(translate: TranslateService, menuService: MenuService, utils: UtilsService, whiteLabelingService: WhiteLabelingService, title: Title);
    setTitle(snapshot: ActivatedRouteSnapshot, lazyTranslate?: TranslateService): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TitleService>;
}
