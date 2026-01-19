import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppState } from '@app/core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { NotificationService } from '@core/http/notification.service';
import * as i0 from "@angular/core";
export declare class TrendzAnalyticsUnavailableComponent extends DialogComponent<TrendzAnalyticsUnavailableComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TrendzAnalyticsUnavailableComponent>;
    private wl;
    private translate;
    private dialogs;
    private notificationService;
    name: any;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TrendzAnalyticsUnavailableComponent>, wl: WhiteLabelingService, translate: TranslateService, dialogs: DialogService, notificationService: NotificationService);
    reportIssue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendzAnalyticsUnavailableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendzAnalyticsUnavailableComponent, "tb-trendz-analytics-unavailable", never, {}, {}, never, never, false, never>;
}
