import { OverlayContainer } from "@angular/cdk/overlay";
import { InjectionToken } from "@angular/core";
import * as i0 from "@angular/core";
export declare const PARENT_OVERLAY_CONTAINER: InjectionToken<OverlayContainer>;
export declare class DynamicOverlayContainer extends OverlayContainer {
    private _globalContainer;
    private _customElement;
    getContainerElement(): HTMLElement;
    setContainerElement(element: HTMLElement | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicOverlayContainer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicOverlayContainer>;
}
