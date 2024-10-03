import { ValueType } from '@shared/models/constants';
import { Element, MatrixTransformParam, Svg } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.panzoom.js';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { Observer } from 'rxjs';
import { WidgetContext } from '@home/models/widget-component.models';
import { Font } from '@shared/models/widget-settings.models';
import { WidgetAction } from '@shared/models/widget.models';
import { MatIconRegistry } from '@angular/material/icon';
import { RafService } from '@core/services/raf.service';
export interface ScadaSymbolApi {
    generateElementId: () => string;
    formatValue: (value: any, dec?: number, units?: string, showZeroDecimals?: boolean) => string | undefined;
    text: (element: Element | Element[], text: string) => void;
    font: (element: Element | Element[], font: Font, color: string) => void;
    icon: (element: Element | Element[], icon: string, size?: number, color?: string, center?: boolean) => void;
    cssAnimate: (element: Element, duration: number) => ScadaSymbolAnimation;
    cssAnimation: (element: Element) => ScadaSymbolAnimation | undefined;
    resetCssAnimation: (element: Element) => void;
    finishCssAnimation: (element: Element) => void;
    disable: (element: Element | Element[]) => void;
    enable: (element: Element | Element[]) => void;
    callAction: (event: Event, behaviorId: string, value?: any, observer?: Partial<Observer<void>>) => void;
    setValue: (valueId: string, value: any) => void;
}
export interface ScadaSymbolContext {
    api: ScadaSymbolApi;
    tags: {
        [id: string]: Element[];
    };
    values: {
        [id: string]: any;
    };
    properties: {
        [id: string]: any;
    };
    svg: Svg;
}
export type ScadaSymbolStateRenderFunction = (ctx: ScadaSymbolContext, svg: Svg) => void;
export type ScadaSymbolTagStateRenderFunction = (ctx: ScadaSymbolContext, element: Element) => void;
export type ScadaSymbolActionTrigger = 'click';
export type ScadaSymbolActionFunction = (ctx: ScadaSymbolContext, element: Element, event: Event) => void;
export interface ScadaSymbolAction {
    actionFunction?: string;
    action?: ScadaSymbolActionFunction;
}
export interface ScadaSymbolTag {
    tag: string;
    stateRenderFunction?: string;
    stateRender?: ScadaSymbolTagStateRenderFunction;
    actions?: {
        [trigger: string]: ScadaSymbolAction;
    };
}
export declare enum ScadaSymbolBehaviorType {
    value = "value",
    action = "action",
    widgetAction = "widgetAction"
}
export declare const scadaSymbolBehaviorTypes: ScadaSymbolBehaviorType[];
export declare const scadaSymbolBehaviorTypeTranslations: Map<ScadaSymbolBehaviorType, string>;
export interface ScadaSymbolBehaviorBase {
    id: string;
    name: string;
    hint?: string;
    group?: string;
    type: ScadaSymbolBehaviorType;
}
export interface ScadaSymbolBehaviorValue extends ScadaSymbolBehaviorBase {
    valueType: ValueType;
    defaultGetValueSettings?: GetValueSettings<any>;
    trueLabel?: string;
    falseLabel?: string;
    stateLabel?: string;
}
export interface ScadaSymbolBehaviorAction extends ScadaSymbolBehaviorBase {
    valueType: ValueType;
    defaultSetValueSettings?: SetValueSettings;
    defaultWidgetActionSettings?: WidgetAction;
}
export type ScadaSymbolBehavior = ScadaSymbolBehaviorValue & ScadaSymbolBehaviorAction;
export declare enum ScadaSymbolPropertyType {
    text = "text",
    number = "number",
    switch = "switch",
    color = "color",
    color_settings = "color_settings",
    font = "font",
    units = "units",
    icon = "icon"
}
export declare const scadaSymbolPropertyTypes: ScadaSymbolPropertyType[];
export declare const scadaSymbolPropertyTypeTranslations: Map<ScadaSymbolPropertyType, string>;
export declare const scadaSymbolPropertyRowClasses: string[];
export declare const scadaSymbolPropertyFieldClasses: string[];
export interface ScadaSymbolPropertyBase {
    id: string;
    name: string;
    type: ScadaSymbolPropertyType;
    default: any;
    required?: boolean;
    subLabel?: string;
    divider?: boolean;
    fieldSuffix?: string;
    disableOnProperty?: string;
    rowClass?: string;
    fieldClass?: string;
}
export interface ScadaSymbolNumberProperty extends ScadaSymbolPropertyBase {
    min?: number;
    max?: number;
    step?: number;
}
export type ScadaSymbolProperty = ScadaSymbolPropertyBase & ScadaSymbolNumberProperty;
export interface ScadaSymbolMetadata {
    title: string;
    description?: string;
    searchTags?: string[];
    widgetSizeX: number;
    widgetSizeY: number;
    stateRenderFunction?: string;
    stateRender?: ScadaSymbolStateRenderFunction;
    tags: ScadaSymbolTag[];
    behavior: ScadaSymbolBehavior[];
    properties: ScadaSymbolProperty[];
}
export declare const emptyMetadata: (width?: number, height?: number) => ScadaSymbolMetadata;
export declare const applyTbNamespaceToSvgContent: (svgContent: string) => string;
export declare const parseScadaSymbolMetadataFromContent: (svgContent: string) => ScadaSymbolMetadata;
export declare const parseScadaSymbolsTagsFromContent: (svgContent: string) => string[];
export declare const updateScadaSymbolMetadataInContent: (svgContent: string, metadata: ScadaSymbolMetadata) => string;
export interface ScadaSymbolContentData {
    svgRootNode: string;
    innerSvg: string;
}
export declare const removeScadaSymbolMetadata: (svgContent: string) => string;
export declare const scadaSymbolContentData: (svgContent: string) => ScadaSymbolContentData;
export declare const defaultGetValueSettings: (valueType: ValueType) => GetValueSettings<any>;
export declare const defaultSetValueSettings: (valueType: ValueType) => SetValueSettings;
export declare const defaultWidgetActionSettings: WidgetAction;
export declare const updateBehaviorDefaultSettings: (behavior: ScadaSymbolBehavior) => ScadaSymbolBehavior;
export declare const defaultScadaSymbolObjectSettings: (metadata: ScadaSymbolMetadata) => ScadaSymbolObjectSettings;
export type ScadaSymbolObjectSettings = {
    behavior: {
        [id: string]: any;
    };
    properties: {
        [id: string]: any;
    };
};
export interface ScadaSymbolObjectCallbacks {
    onScadaSymbolObjectLoadingState: (loading: boolean) => void;
    onScadaSymbolObjectError: (error: string) => void;
    onScadaSymbolObjectMessage: (message: string) => void;
}
export declare class ScadaSymbolObject {
    private rootElement;
    private ctx;
    private iconRegistry;
    private raf;
    private readonly svgContent;
    private inputSettings;
    private callbacks;
    private simulated;
    private readonly metadata;
    private settings;
    private context;
    private cssAnimations;
    private svgShape;
    private box;
    private valueGetters;
    private valueActions;
    private valueSetters;
    private stateValueSubjects;
    private readonly shapeResize$;
    private readonly destroy$;
    private scale;
    private performInit;
    constructor(rootElement: HTMLElement, ctx: WidgetContext, iconRegistry: MatIconRegistry, raf: RafService, svgContent: string, inputSettings: ScadaSymbolObjectSettings, callbacks: ScadaSymbolObjectCallbacks, simulated: boolean);
    destroy(): void;
    private prepareMetadata;
    private prepareSvgShape;
    private init;
    private onLoadingState;
    private onError;
    private onMessage;
    private callAction;
    private resize;
    private onValue;
    private setValue;
    private onStateValueChanged;
    private renderState;
    private normalizeValue;
    private setElementText;
    private setElementFont;
    private setElementIcon;
    private createIconElement;
    private cssAnimate;
    private cssAnimation;
    private resetCssAnimation;
    private finishCssAnimation;
    private disableElement;
    private enableElement;
    private elements;
    private getProperty;
    private getPropertyValue;
}
interface ScadaSymbolAnimation {
    running(): boolean;
    play(): void;
    pause(): void;
    stop(): void;
    finish(): void;
    speed(speed: number): ScadaSymbolAnimation;
    ease(easing: string): ScadaSymbolAnimation;
    loop(times?: number, swing?: boolean): ScadaSymbolAnimation;
    transform(transform: MatrixTransformParam, relative?: boolean): ScadaSymbolAnimation;
    rotate(r: number, cx?: number, cy?: number): ScadaSymbolAnimation;
    x(x: number): ScadaSymbolAnimation;
    y(y: number): ScadaSymbolAnimation;
    size(width: number, height: number): ScadaSymbolAnimation;
    width(width: number): ScadaSymbolAnimation;
    height(height: number): ScadaSymbolAnimation;
    move(x: number, y: number): ScadaSymbolAnimation;
    dmove(dx: number, dy: number): ScadaSymbolAnimation;
    relative(x: number, y: number): ScadaSymbolAnimation;
    scale(x: number, y?: number, cx?: number, cy?: number): ScadaSymbolAnimation;
    attr(attr: string | object, value?: any): ScadaSymbolAnimation;
}
export {};
