import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlarmInfo } from '@shared/models/alarm.models';
import * as i0 from "@angular/core";
export interface AlarmCommentDialogData {
    alarmId?: string;
    alarm?: AlarmInfo;
}
export declare class AlarmCommentDialogComponent extends DialogComponent<AlarmCommentDialogComponent, void> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmCommentDialogData;
    dialogRef: MatDialogRef<AlarmCommentDialogComponent, void>;
    alarmId: string;
    constructor(store: Store<AppState>, router: Router, data: AlarmCommentDialogData, dialogRef: MatDialogRef<AlarmCommentDialogComponent, void>);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmCommentDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmCommentDialogComponent, "tb-alarm-comment-dialog", never, {}, {}, never, never, false, never>;
}
