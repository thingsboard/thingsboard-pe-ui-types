import { TbFunction } from '@shared/models/js-function.models';
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
