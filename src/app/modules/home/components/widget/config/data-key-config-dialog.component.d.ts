import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { DataKey, Widget, widgetType } from '@shared/models/widget.models';
import { DataKeysCallbacks } from './data-keys.component.models';
import { DataKeyConfigComponent } from '@home/components/widget/config/data-key-config.component';
import { Dashboard } from '@shared/models/dashboard.models';
import { IAliasController } from '@core/api/widget-api.models';
import * as i0 from "@angular/core";
export interface DataKeyConfigDialogData {
    dataKey: DataKey;
    dataKeySettingsSchema: any;
    dataKeySettingsDirective: string;
    dashboard: Dashboard;
    aliasController: IAliasController;
    widget: Widget;
    widgetType: widgetType;
    deviceId?: string;
    entityAliasId?: string;
    showPostProcessing?: boolean;
    callbacks?: DataKeysCallbacks;
    hideDataKeyLabel: boolean;
    hideDataKeyColor: boolean;
    hideDataKeyUnits: boolean;
    hideDataKeyDecimals: boolean;
}
export declare class DataKeyConfigDialogComponent extends DialogComponent<DataKeyConfigDialogComponent, DataKey> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: DataKeyConfigDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DataKeyConfigDialogComponent, DataKey>;
    fb: UntypedFormBuilder;
    dataKeyConfig: DataKeyConfigComponent;
    dataKeyFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: DataKeyConfigDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DataKeyConfigDialogComponent, DataKey>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeyConfigDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeyConfigDialogComponent, "tb-data-key-config-dialog", never, {}, {}, never, never, false, never>;
}
