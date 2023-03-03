import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { Widget } from '@shared/models/widget.models';
import { Dashboard } from '@app/shared/models/dashboard.models';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetInfo } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export interface AddWidgetDialogData {
    dashboard: Dashboard;
    aliasController: IAliasController;
    widget: Widget;
    widgetInfo: WidgetInfo;
}
export declare class AddWidgetDialogComponent extends DialogComponent<AddWidgetDialogComponent, Widget> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddWidgetDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddWidgetDialogComponent, Widget>;
    private fb;
    widgetFormGroup: UntypedFormGroup;
    dashboard: Dashboard;
    aliasController: IAliasController;
    widget: Widget;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AddWidgetDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddWidgetDialogComponent, Widget>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    helpLinkIdForWidgetType(): string;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddWidgetDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddWidgetDialogComponent, "tb-add-widget-dialog", never, {}, {}, never, never, false, never>;
}
