import { TbContextMenuEvent } from '@shared/models/jquery-event.models';
export interface ILayoutController {
    reload(): any;
    resetHighlight(): any;
    highlightWidget(widgetId: string, delay?: number): any;
    selectWidget(widgetId: string, delay?: number): any;
    pasteWidget($event: TbContextMenuEvent | KeyboardEvent): any;
    pasteWidgetReference($event: TbContextMenuEvent | KeyboardEvent): any;
}
export declare enum LayoutWidthType {
    PERCENTAGE = "percentage",
    FIXED = "fixed"
}
export declare enum LayoutPercentageSize {
    MIN = 10,
    MAX = 90
}
export declare enum LayoutFixedSize {
    MIN = 150,
    MAX = 4000
}
