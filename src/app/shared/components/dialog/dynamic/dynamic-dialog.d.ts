import { Location } from "@angular/common";
import { Injector, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DynamicOverlay } from "./dynamic-overlay";
import { DynamicOverlayContainer } from '@shared/components/dialog/dynamic/dynamic-overlay-container';
import { ComponentType, ScrollStrategy } from '@angular/cdk/overlay';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
export interface DynamicMatDialogConfig<D> extends MatDialogConfig<D> {
    containerElement?: HTMLElement;
}
export declare class DynamicMatDialog extends MatDialog {
    private _customOverlay;
    constructor(_overlay: DynamicOverlay, _injector: Injector, location: Location, _defaultOptions: MatDialogConfig, _scrollStrategy: ScrollStrategy, _parentDialog: DynamicMatDialog, _overlayContainer: DynamicOverlayContainer);
    open<T, D = any, R = any>(component: ComponentType<T> | TemplateRef<T>, config?: DynamicMatDialogConfig<D>): MatDialogRef<T, R>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicMatDialog, [null, null, { optional: true; }, null, null, { optional: true; skipSelf: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicMatDialog>;
}
export declare class DynamicDialog extends Dialog {
    constructor(_overlay: DynamicOverlay, _injector: Injector, _defaultOptions: DialogConfig, _scrollStrategy: ScrollStrategy, _parentDialog: DynamicDialog, _overlayContainer: DynamicOverlayContainer);
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDialog, [null, null, null, null, { optional: true; skipSelf: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicDialog>;
}
