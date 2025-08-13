import { ActivatedRouteSnapshot } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { ReportInfo } from '@shared/models/report.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ReportService } from '@core/http/report.service';
import * as i0 from "@angular/core";
export declare class ReportsTableConfigResolver {
    private store;
    private reportService;
    private userPermissionsService;
    private translate;
    private datePipe;
    constructor(store: Store<AppState>, reportService: ReportService, userPermissionsService: UserPermissionsService, translate: TranslateService, datePipe: DatePipe);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<ReportInfo>;
    private configDefaults;
    private configureColumns;
    private configureEntityFunctions;
    private configureCellActions;
    private configureGroupActions;
    private downloadReport;
    onReportAction(action: EntityAction<ReportInfo>, _config: EntityTableConfig<ReportInfo>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportsTableConfigResolver>;
}
