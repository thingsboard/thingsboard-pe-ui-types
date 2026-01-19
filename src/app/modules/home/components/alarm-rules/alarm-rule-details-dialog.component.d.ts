import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface AlarmRuleDetailsDialogData {
    alarmDetails: string;
    readonly: boolean;
}
export declare class AlarmRuleDetailsDialogComponent extends DialogComponent<AlarmRuleDetailsDialogComponent, string> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmRuleDetailsDialogData;
    dialogRef: MatDialogRef<AlarmRuleDetailsDialogComponent, string>;
    private fb;
    alarmDetailsControl: FormControl<string>;
    constructor(store: Store<AppState>, router: Router, data: AlarmRuleDetailsDialogData, dialogRef: MatDialogRef<AlarmRuleDetailsDialogComponent, string>, fb: FormBuilder);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleDetailsDialogComponent, "tb-edit-alarm-details-dialog", never, {}, {}, never, never, false, never>;
}
