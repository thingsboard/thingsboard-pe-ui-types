import { DialogConfig } from '@angular/cdk/dialog';
import { DynamicDialog, DynamicMatDialog } from './dynamic-dialog';
import { DynamicOverlay } from './dynamic-overlay';
import { DynamicOverlayContainer } from './dynamic-overlay-container';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/dialog";
import * as i3 from "@angular/material/dialog";
export declare const DYNAMIC_MAT_DIALOG_PROVIDERS: (typeof DynamicOverlayContainer | typeof DynamicOverlay | typeof DynamicMatDialog | typeof DynamicDialog | {
    provide: import("@angular/core").InjectionToken<DialogConfig<unknown, unknown, import("@angular/cdk/portal").BasePortalOutlet>>;
    useValue: {
        viewContainerRef?: import("@angular/core").ViewContainerRef;
        injector?: import("@angular/core").Injector;
        id?: string;
        role?: import("@angular/cdk/dialog").DialogRole;
        panelClass?: string | string[];
        hasBackdrop?: boolean;
        backdropClass?: string | string[];
        disableClose?: boolean;
        width?: string;
        height?: string;
        minWidth?: number | string;
        minHeight?: number | string;
        maxWidth?: number | string;
        maxHeight?: number | string;
        positionStrategy?: import("@angular/cdk/overlay").PositionStrategy;
        data?: unknown;
        direction?: import("@angular/cdk/bidi").Direction;
        ariaDescribedBy?: string | null;
        ariaLabelledBy?: string | null;
        ariaLabel?: string | null;
        ariaModal?: boolean;
        autoFocus?: import("@angular/cdk/dialog").AutoFocusTarget | string | boolean;
        restoreFocus?: boolean | string | HTMLElement;
        scrollStrategy?: import("@angular/cdk/overlay").ScrollStrategy;
        closeOnNavigation?: boolean;
        closeOnDestroy?: boolean;
        closeOnOverlayDetachments?: boolean;
        componentFactoryResolver?: import("@angular/core").ComponentFactoryResolver;
        providers?: import("@angular/core").StaticProvider[] | ((dialogRef: unknown, config: DialogConfig<unknown, unknown, import("@angular/cdk/portal").BasePortalOutlet>, container: import("@angular/cdk/portal").BasePortalOutlet) => import("@angular/core").StaticProvider[]);
        container?: import("@angular/core").Type<import("@angular/cdk/portal").BasePortalOutlet> | {
            type: import("@angular/core").Type<import("@angular/cdk/portal").BasePortalOutlet>;
            providers: (config: DialogConfig<unknown, unknown, import("@angular/cdk/portal").BasePortalOutlet>) => import("@angular/core").StaticProvider[];
        };
        templateContext?: Record<string, any> | (() => Record<string, any>);
    };
})[];
export declare class DynamicMatDialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicMatDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DynamicMatDialogModule, never, [typeof i1.OverlayModule, typeof i2.DialogModule, typeof i3.MatDialogModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DynamicMatDialogModule>;
}
