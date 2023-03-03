import { InjectionToken } from '@angular/core';
import { widgetType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare const DISPLAY_WIDGET_TYPES_PANEL_DATA: InjectionToken<any>;
export interface WidgetTypes {
    type: widgetType;
    display: boolean;
}
export interface DisplayWidgetTypesPanelData {
    types: WidgetTypes[];
    typesUpdated: (columns: WidgetTypes[]) => void;
}
export declare class DisplayWidgetTypesPanelComponent {
    data: DisplayWidgetTypesPanelData;
    types: WidgetTypes[];
    constructor(data: DisplayWidgetTypesPanelData);
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisplayWidgetTypesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DisplayWidgetTypesPanelComponent, "tb-widget-types-panel", never, {}, {}, never, never, false, never>;
}
