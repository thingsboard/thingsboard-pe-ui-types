import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injector, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { PopoverPlacement } from '@shared/components/popover.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ComponentType } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare class TbPopoverService {
    private resolver;
    private helpMarkdownComponent;
    private popoverWithTriggers;
    componentFactory: ComponentFactory<TbPopoverComponent>;
    constructor(resolver: ComponentFactoryResolver, helpMarkdownComponent: ComponentType<any>);
    hasPopover(trigger: Element): boolean;
    hidePopover(trigger: Element): boolean;
    createPopoverRef(hostView: ViewContainerRef): ComponentRef<TbPopoverComponent>;
    displayPopover<T>(trigger: Element, renderer: Renderer2, hostView: ViewContainerRef, componentType: Type<T>, preferredPlacement?: PopoverPlacement, hideOnClickOutside?: boolean, injector?: Injector, context?: any, overlayStyle?: any, popoverStyle?: any, style?: any, showCloseButton?: boolean): TbPopoverComponent<T>;
    displayPopoverWithComponentRef<T>(componentRef: ComponentRef<TbPopoverComponent>, trigger: Element, renderer: Renderer2, componentType: Type<T>, preferredPlacement?: PopoverPlacement, hideOnClickOutside?: boolean, injector?: Injector, context?: any, overlayStyle?: any, popoverStyle?: any, style?: any, showCloseButton?: boolean): TbPopoverComponent<T>;
    toggleHelpPopover(trigger: Element, renderer: Renderer2, hostView: ViewContainerRef, helpId?: string, helpContent?: string, visibleFn?: (visible: boolean) => void, readyFn?: (ready: boolean) => void, preferredPlacement?: PopoverPlacement, overlayStyle?: any, helpStyle?: any): void;
    private findPopoverByTrigger;
    private removePopoverByComponent;
    private elementsAreEqualOrDescendant;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbPopoverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbPopoverService>;
}
