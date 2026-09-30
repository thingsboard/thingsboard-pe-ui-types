import { TbFunction } from '@shared/models/js-function.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { WidgetResource } from '@shared/models/widget.models';
export declare enum HtmlContainerWidgetType {
    PLAIN = "PLAIN",
    ANGULAR = "ANGULAR"
}
export interface HtmlContainerWidgetSettings {
    type: HtmlContainerWidgetType;
    html: string;
    css: string;
    js: TbFunction;
    resources: WidgetResource[];
}
export declare const htmlContainerDefaultSettings: HtmlContainerWidgetSettings;
export type WidgetContainerPlainFunction = (ctx: WidgetContext, container: HTMLElement) => void;
export type WidgetContainerAngularFunction = (ctx: WidgetContext) => void;
export declare const AngularContainerFunctionEditorCompleter: TbEditorCompleter;
export declare const HTMLContainerFunctionEditorCompleter: TbEditorCompleter;
