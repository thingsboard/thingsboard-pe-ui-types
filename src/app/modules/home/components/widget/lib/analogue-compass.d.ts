import { WidgetContext } from '@home/models/widget-component.models';
import * as CanvasGauges from 'canvas-gauges';
import { AnalogueCompassSettings } from '@home/components/widget/lib/analogue-compass.models';
import { TbBaseGauge } from '@home/components/widget/lib/analogue-gauge.models';
import RadialGaugeOptions = CanvasGauges.RadialGaugeOptions;
import BaseGauge = CanvasGauges.BaseGauge;
export declare class TbAnalogueCompass extends TbBaseGauge<AnalogueCompassSettings, RadialGaugeOptions> {
    constructor(ctx: WidgetContext, canvasId: string);
    protected createGaugeOptions(gaugeElement: HTMLElement, settings: AnalogueCompassSettings): RadialGaugeOptions;
    protected createGauge(gaugeData: RadialGaugeOptions): BaseGauge;
}
