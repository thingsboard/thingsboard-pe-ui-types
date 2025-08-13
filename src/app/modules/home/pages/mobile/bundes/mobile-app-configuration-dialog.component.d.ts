import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MobileApp, MobileAppBundleInfo } from '@shared/models/mobile-app.models';
import { ImportExportService } from '@shared/import-export/import-export.service';
import * as i0 from "@angular/core";
export interface MobileAppConfigurationDialogData {
    afterAdd: boolean;
    androidApp: MobileApp;
    iosApp: MobileApp;
    bundle: MobileAppBundleInfo;
}
export declare class MobileAppConfigurationDialogComponent extends DialogComponent<MobileAppConfigurationDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    protected dialogRef: MatDialogRef<MobileAppConfigurationDialogComponent>;
    private importExportService;
    private fileName;
    notShowAgain: boolean;
    showDontShowAgain: boolean;
    gitRepositoryLink: string;
    flutterRunCommand: string;
    constructor(store: Store<AppState>, router: Router, data: MobileAppConfigurationDialogData, dialogRef: MatDialogRef<MobileAppConfigurationDialogComponent>, importExportService: ImportExportService);
    close(): void;
    createMarkDownCommand(commands: string): string;
    downloadSettings(): void;
    private createMarkDownSingleCommand;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppConfigurationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppConfigurationDialogComponent, "tb-mobile-app-configuration-dialog", never, {}, {}, never, never, false, never>;
}
