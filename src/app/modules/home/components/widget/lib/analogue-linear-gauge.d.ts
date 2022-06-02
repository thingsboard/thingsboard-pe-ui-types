import * as CanvasGauges from 'canvas-gauges';
import { WidgetContext } from '@home/models/widget-component.models';
import { TbAnalogueGauge } from '@home/components/widget/lib/analogue-gauge.models';
import { AnalogueLinearGaugeSettings } from '@home/components/widget/lib/analogue-linear-gauge.models';
import LinearGaugeOptions = CanvasGauges.LinearGaugeOptions;
import BaseGauge = CanvasGauges.BaseGauge;
export declare class TbAnalogueLinearGauge extends TbAnalogueGauge<AnalogueLinearGaugeSettings, LinearGaugeOptions> {
    constructor(ctx: WidgetContext, canvasId: string);
    protected prepareGaugeOptions(settings: AnalogueLinearGaugeSettings, gaugeData: LinearGaugeOptions): void;
    protected createGauge(gaugeData: LinearGaugeOptions): BaseGauge;
}
