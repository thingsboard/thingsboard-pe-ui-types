export interface ILayoutController {
    reload(): any;
    resetHighlight(): any;
    highlightWidget(widgetId: string, delay?: number): any;
    selectWidget(widgetId: string, delay?: number): any;
    pasteWidget($event: MouseEvent): any;
    pasteWidgetReference($event: MouseEvent): any;
}
