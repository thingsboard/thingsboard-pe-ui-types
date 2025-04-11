import { AnimationTriggerMetadata } from '@angular/animations';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ComponentRef, Injector, Renderer2, Type, ViewContainerRef } from '@angular/core';
export declare const popoverMotion: AnimationTriggerMetadata;
export declare const PopoverPlacements: readonly ["top", "topLeft", "topRight", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "left", "leftTop", "leftBottom"];
type PopoverPlacementTuple = typeof PopoverPlacements;
export type PopoverPlacement = PopoverPlacementTuple[number];
export declare const StrictPopoverPlacements: readonly ["topOnly", "topLeftOnly", "topRightOnly", "rightOnly", "rightTopOnly", "rightBottomOnly", "bottomOnly", "bottomLeftOnly", "bottomRightOnly", "leftOnly", "leftTopOnly", "leftBottomOnly"];
type StrictPopoverPlacementTuple = typeof StrictPopoverPlacements;
export type StrictPopoverPlacement = StrictPopoverPlacementTuple[number];
export type PopoverPreferredPlacement = PopoverPlacement | PopoverPlacement[] | StrictPopoverPlacement | StrictPopoverPlacement[];
export declare const DEFAULT_POPOVER_POSITIONS: import("@angular/cdk/overlay").ConnectionPositionPair[];
export declare const isStrictPopoverPlacement: (placement: string) => boolean;
export declare const convertStrictPopoverPlacement: (placement: StrictPopoverPlacement) => PopoverPlacement;
export declare const getPlacementName: (position: ConnectedOverlayPositionChange) => PopoverPlacement | undefined;
export interface PropertyMapping {
    [key: string]: [string, () => unknown];
}
export interface PopoverWithTrigger {
    trigger: Element;
    popoverComponent: TbPopoverComponent;
}
export interface DisplayPopoverConfig<T> extends Omit<DisplayPopoverWithComponentRefConfig<T>, 'componentRef'> {
    hostView: ViewContainerRef;
}
export interface DisplayPopoverWithComponentRefConfig<T> {
    componentRef: ComponentRef<TbPopoverComponent>;
    trigger: Element;
    renderer: Renderer2;
    componentType: Type<T>;
    preferredPlacement?: PopoverPreferredPlacement;
    hideOnClickOutside?: boolean;
    injector?: Injector;
    context?: any;
    overlayStyle?: any;
    popoverStyle?: any;
    style?: any;
    showCloseButton?: boolean;
    visibleFn?: (visible: boolean) => void;
    popoverContentStyle?: any;
    isModal?: boolean;
}
export declare const defaultPopoverConfig: Partial<DisplayPopoverWithComponentRefConfig<any>>;
export {};
