import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MobileApp } from '@shared/models/mobile-app.models';
import * as i0 from "@angular/core";
export interface MobileAppConfigurationDialogData {
    afterAdd: boolean;
    androidApp: MobileApp;
    iosApp: MobileApp;
}
export declare class MobileAppConfigurationDialogComponent extends DialogComponent<MobileAppConfigurationDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    protected dialogRef: MatDialogRef<MobileAppConfigurationDialogComponent>;
    notShowAgain: boolean;
    setApplication: boolean;
    showDontShowAgain: boolean;
    gitRepositoryLink: string;
    pathToConstants: string;
    flutterRunCommand: string;
    flutterInstallRenameCommand: string;
    configureApi: string;
    renameCommands: string[];
    constructor(store: Store<AppState>, router: Router, data: MobileAppConfigurationDialogData, dialogRef: MatDialogRef<MobileAppConfigurationDialogComponent>);
    close(): void;
    createMarkDownCommand(commands: string | string[]): string;
    private createMarkDownSingleCommand;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppConfigurationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppConfigurationDialogComponent, "tb-mobile-app-configuration-dialog", never, {}, {}, never, never, false, never>;
}
