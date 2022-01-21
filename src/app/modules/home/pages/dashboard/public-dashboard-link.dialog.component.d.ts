import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from '@core/http/dashboard.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityGroupInfo, ShortEntityView } from '@shared/models/entity-group.models';
import { DashboardInfo } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface PublicDashboardLinkDialogData {
    dashboard: ShortEntityView | DashboardInfo;
    entityGroup: EntityGroupInfo;
}
export declare class PublicDashboardLinkDialogComponent extends DialogComponent<PublicDashboardLinkDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: PublicDashboardLinkDialogData;
    translate: TranslateService;
    private dashboardService;
    dialogRef: MatDialogRef<PublicDashboardLinkDialogComponent>;
    fb: FormBuilder;
    dashboard: ShortEntityView | DashboardInfo;
    entityGroup: EntityGroupInfo;
    publicLink: string;
    constructor(store: Store<AppState>, router: Router, data: PublicDashboardLinkDialogData, translate: TranslateService, dashboardService: DashboardService, dialogRef: MatDialogRef<PublicDashboardLinkDialogComponent>, fb: FormBuilder);
    ngOnInit(): void;
    close(): void;
    onPublicLinkCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PublicDashboardLinkDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PublicDashboardLinkDialogComponent, "tb-public-dashboard-link-dialog", never, {}, {}, never, never>;
}
