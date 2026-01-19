import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UserId } from '@shared/models/id/user-id';
import * as i0 from "@angular/core";
export interface ApiKeysTableDialogData {
    userId: UserId;
}
export declare class ApiKeysTableDialogComponent {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ApiKeysTableDialogComponent>;
    data: ApiKeysTableDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ApiKeysTableDialogComponent>, data: ApiKeysTableDialogData);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiKeysTableDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApiKeysTableDialogComponent, "tb-api-keys-table-dialog", never, {}, {}, never, never, false, never>;
}
