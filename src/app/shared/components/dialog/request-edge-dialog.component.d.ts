import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@core/auth/auth.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@core/http/notification.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class RequestEdgeDialogComponent extends DialogComponent<RequestEdgeDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RequestEdgeDialogComponent>;
    private authService;
    private dialogs;
    private translate;
    private notificationService;
    private wl;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RequestEdgeDialogComponent>, authService: AuthService, dialogs: DialogService, translate: TranslateService, notificationService: NotificationService, wl: WhiteLabelingService);
    requestAccess($event: Event): void;
    learnMore($event: Event): void;
    loginAsSysAdmin($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequestEdgeDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RequestEdgeDialogComponent, "tb-request-edge-dialog", never, {}, {}, never, never, false, never>;
}
