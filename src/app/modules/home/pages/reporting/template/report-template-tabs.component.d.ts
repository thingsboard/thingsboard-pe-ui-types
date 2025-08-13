import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { TranslateService } from '@ngx-translate/core';
import { ReportTemplate } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportTemplateTabsComponent extends EntityTabsComponent<ReportTemplate> {
    protected store: Store<AppState>;
    private translate;
    constructor(store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateTabsComponent, "tb-report-template-tabs", never, {}, {}, never, never, false, never>;
}
