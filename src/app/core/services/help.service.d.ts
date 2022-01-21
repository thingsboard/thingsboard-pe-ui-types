import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UiSettingsService } from '@core/http/ui-settings.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class HelpService {
    private translate;
    private wl;
    private http;
    private uiSettingsService;
    private helpCache;
    private wlHelpBaseUrl;
    constructor(translate: TranslateService, wl: WhiteLabelingService, http: HttpClient, uiSettingsService: UiSettingsService);
    getHelpContent(key: string): Observable<string>;
    private getHelpBaseUrl;
    private loadHelpContent;
    private loadHelpContentFromBaseUrl;
    private processVariables;
    private processIncludes;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HelpService>;
}
