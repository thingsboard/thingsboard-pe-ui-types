import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UiSettingsService } from '@core/http/ui-settings.service';
import * as i0 from "@angular/core";
export declare class HelpService {
    private translate;
    private http;
    private uiSettingsService;
    private siteBaseUrl;
    private helpCache;
    constructor(translate: TranslateService, http: HttpClient, uiSettingsService: UiSettingsService);
    getHelpContent(key: string): Observable<string>;
    private loadHelpContent;
    private loadHelpContentFromBaseUrl;
    private processVariables;
    private processIncludes;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HelpService>;
}
