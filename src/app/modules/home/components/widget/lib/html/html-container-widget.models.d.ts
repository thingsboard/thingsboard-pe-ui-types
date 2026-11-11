import { WidgetContext } from '@home/models/widget-component.models';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
export { HtmlContainerWidgetType, htmlContainerDefaultSettings } from '@shared/models/html-container.models';
export type { HtmlContainerWidgetSettings } from '@shared/models/html-container.models';
export type WidgetContainerPlainFunction = (ctx: WidgetContext, container: HTMLElement) => void;
export type WidgetContainerAngularFunction = (ctx: WidgetContext) => void;
export declare const AngularContainerFunctionEditorCompleter: TbEditorCompleter;
export declare const HTMLContainerFunctionEditorCompleter: TbEditorCompleter;
