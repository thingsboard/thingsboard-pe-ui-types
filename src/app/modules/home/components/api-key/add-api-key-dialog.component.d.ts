import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ApiKeyService } from '@core/http/api-key.service';
import { ApiKeyInfo } from '@shared/models/api-key.models';
import { ApiKeysTableDialogData } from '@home/components/api-key/api-keys-table-dialog.component';
import * as i0 from "@angular/core";
export declare class AddApiKeyDialogComponent extends DialogComponent<AddApiKeyDialogComponent, ApiKeyInfo | string> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<AddApiKeyDialogComponent, ApiKeyInfo | string>;
    private fb;
    private apiKeyService;
    data: ApiKeysTableDialogData;
    readonly startDate: Date;
    readonly expirationTimeOptions: Array<number>;
    readonly apiKeyForm: import("@angular/forms").FormGroup<{
        description: import("@angular/forms").FormControl<any>;
        enabled: import("@angular/forms").FormControl<boolean>;
        expirationTime: import("@angular/forms").FormControl<string | number>;
        customExpirationTime: import("@angular/forms").FormControl<any>;
    }>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AddApiKeyDialogComponent, ApiKeyInfo | string>, fb: FormBuilder, apiKeyService: ApiKeyService, data: ApiKeysTableDialogData);
    close(): void;
    add(): void;
    isCustomExpirationTime(): boolean;
    onExpirationDateChange(): void;
    private calcExpirationTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddApiKeyDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddApiKeyDialogComponent, "tb-add-api-key-dialog", never, {}, {}, never, never, false, never>;
}
