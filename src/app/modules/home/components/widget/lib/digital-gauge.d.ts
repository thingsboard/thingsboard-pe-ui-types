import { WidgetContext } from '@home/models/widget-component.models';
import { IWidgetSubscription } from '@core/api/widget-api.models';
export declare class TbCanvasDigitalGauge {
    protected ctx: WidgetContext;
    constructor(ctx: WidgetContext, canvasId: string);
    private localSettings;
    private ticksSourcesSubscription;
    private readonly barColorProcessor;
    private gauge;
    private static toRadians;
    init(): void;
    updateAttribute(subscription: IWidgetSubscription): void;
    updateSetting(): void;
    update(): void;
    mobileModeChanged(): void;
    resize(): void;
    destroy(): void;
}
