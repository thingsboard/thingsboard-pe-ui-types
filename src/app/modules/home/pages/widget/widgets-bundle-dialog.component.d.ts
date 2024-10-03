import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { WidgetsBundleComponent } from '@home/pages/widget/widgets-bundle.component';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export interface WidgetsBundleDialogData {
    widgetsBundle: WidgetsBundle;
}
export declare class WidgetsBundleDialogComponent extends DialogComponent<WidgetsBundleDialogComponent, WidgetsBundle> implements ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: WidgetsBundleDialogData;
    dialogRef: MatDialogRef<WidgetsBundleDialogComponent, WidgetsBundle>;
    private errorStateMatcher;
    private widgetsService;
    widgetsBundle: WidgetsBundle;
    submitted: boolean;
    widgetsBundleComponent: WidgetsBundleComponent;
    constructor(store: Store<AppState>, router: Router, data: WidgetsBundleDialogData, dialogRef: MatDialogRef<WidgetsBundleDialogComponent, WidgetsBundle>, errorStateMatcher: ErrorStateMatcher, widgetsService: WidgetService);
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleDialogComponent, [null, null, null, null, { skipSelf: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetsBundleDialogComponent, "tb-widgets-bundle-dialog", never, {}, {}, never, never, false, never>;
}
