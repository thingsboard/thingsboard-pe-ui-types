export interface ILayoutController {
    reload(): any;
    resetHighlight(): any;
    highlightWidget(widgetId: string, delay?: number): any;
    selectWidget(widgetId: string, delay?: number): any;
    pasteWidget($event: MouseEvent): any;
    pasteWidgetReference($event: MouseEvent): any;
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
