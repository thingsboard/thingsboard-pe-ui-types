import { WidgetActionType, widgetType } from '@shared/models/widget.models';
import { WidgetActionCallbacks, WidgetActionsData } from '@home/components/widget/action/manage-widget-actions.component.models';
import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export interface ManageWidgetActionsDialogData {
    widgetTitle: string;
    actionsData: WidgetActionsData;
    callbacks: WidgetActionCallbacks;
    widgetType: widgetType;
    defaultIconColor?: string;
    additionalWidgetActionTypes?: WidgetActionType[];
}
export declare class ManageWidgetActionsDialogComponent extends DialogComponent<ManageWidgetActionsDialogComponent, WidgetActionsData> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageWidgetActionsDialogData;
    private fb;
    dialogRef: MatDialogRef<ManageWidgetActionsDialogComponent, WidgetActionsData>;
    widgetActionTypesList: WidgetActionType[];
    actionSources: {
        [actionSourceId: string]: import("@shared/models/widget.models").WidgetActionSource;
    };
    actionsSettings: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, data: ManageWidgetActionsDialogData, fb: UntypedFormBuilder, dialogRef: MatDialogRef<ManageWidgetActionsDialogComponent, WidgetActionsData>);
    ngOnInit(): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageWidgetActionsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageWidgetActionsDialogComponent, "tb-manage-widget-actions-dialog", never, {}, {}, never, never, false, never>;
}
