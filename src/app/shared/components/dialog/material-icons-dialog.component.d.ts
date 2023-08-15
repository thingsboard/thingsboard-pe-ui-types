import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface MaterialIconsDialogData {
    icon: string;
    iconClearButton: boolean;
}
export interface MaterialIconsDialogResult {
    icon?: string;
    canceled?: boolean;
}
export declare class MaterialIconsDialogComponent extends DialogComponent<MaterialIconsDialogComponent, MaterialIconsDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    data: MaterialIconsDialogData;
    dialogRef: MatDialogRef<MaterialIconsDialogComponent, MaterialIconsDialogResult>;
    selectedIcon: string;
    iconClearButton: boolean;
    constructor(store: Store<AppState>, router: Router, data: MaterialIconsDialogData, dialogRef: MatDialogRef<MaterialIconsDialogComponent, MaterialIconsDialogResult>);
    selectIcon(icon: string): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialIconsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialIconsDialogComponent, "tb-material-icons-dialog", never, {}, {}, never, never, false, never>;
}
