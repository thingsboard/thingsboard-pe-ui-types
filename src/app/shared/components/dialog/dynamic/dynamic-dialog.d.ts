import { TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
export interface DynamicMatDialogConfig<D> extends MatDialogConfig<D> {
    containerElement?: HTMLElement;
}
export declare class DynamicMatDialog extends MatDialog {
    private _customOverlay;
    open<T, D = any, R = any>(component: ComponentType<T> | TemplateRef<T>, config?: DynamicMatDialogConfig<D>): MatDialogRef<T, R>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicMatDialog, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicMatDialog>;
}
export declare class DynamicDialog extends Dialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDialog, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicDialog>;
}
