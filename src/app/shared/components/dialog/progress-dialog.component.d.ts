import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface ProgressDialogData<T> {
    progressObservable: Observable<T>;
    progressText: string;
}
export declare class ProgressDialogComponent<T> {
    dialogRef: MatDialogRef<ProgressDialogComponent<T>, T>;
    data: ProgressDialogData<T>;
    progressText: string;
    constructor(dialogRef: MatDialogRef<ProgressDialogComponent<T>, T>, data: ProgressDialogData<T>);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressDialogComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressDialogComponent<any>, "tb-progress-dialog", never, {}, {}, never, never>;
}
