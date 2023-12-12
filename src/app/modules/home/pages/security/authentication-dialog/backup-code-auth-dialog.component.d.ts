import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder } from '@angular/forms';
import { BackupCodeTwoFactorAuthAccountConfig } from '@shared/models/two-factor-auth.models';
import { ImportExportService } from '@shared/import-export/import-export.service';
import * as i0 from "@angular/core";
export declare class BackupCodeAuthDialogComponent extends DialogComponent<BackupCodeAuthDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private twoFaService;
    private importExportService;
    dialogRef: MatDialogRef<BackupCodeAuthDialogComponent>;
    fb: UntypedFormBuilder;
    private config;
    backupCode: BackupCodeTwoFactorAuthAccountConfig;
    constructor(store: Store<AppState>, router: Router, twoFaService: TwoFactorAuthenticationService, importExportService: ImportExportService, dialogRef: MatDialogRef<BackupCodeAuthDialogComponent>, fb: UntypedFormBuilder);
    closeDialog(): void;
    downloadFile(): void;
    printCode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackupCodeAuthDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackupCodeAuthDialogComponent, "tb-backup-code-auth-dialog", never, {}, {}, never, never, false, never>;
}
