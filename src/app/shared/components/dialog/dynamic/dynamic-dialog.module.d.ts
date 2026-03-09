import { DynamicMatDialog } from './dynamic-dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/dialog";
import * as i3 from "@angular/material/dialog";
export declare const DYNAMIC_MAT_DIALOG_PROVIDERS: {
    provide: typeof DynamicMatDialog;
    useFactory: () => DynamicMatDialog;
}[];
export declare class DynamicMatDialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicMatDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DynamicMatDialogModule, never, [typeof i1.OverlayModule, typeof i2.DialogModule, typeof i3.MatDialogModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DynamicMatDialogModule>;
}
