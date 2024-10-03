import * as CanvasGauges from 'canvas-gauges';
import { FontSettings } from '@home/components/widget/lib/settings.models';
import { WidgetContext } from '@home/models/widget-component.models';
import Highlight = CanvasGauges.Highlight;
import BaseGauge = CanvasGauges.BaseGauge;
import GenericOptions = CanvasGauges.GenericOptions;
export type AnimationRule = 'linear' | 'quad' | 'quint' | 'cycle' | 'bounce' | 'elastic' | 'dequad' | 'dequint' | 'decycle' | 'debounce' | 'delastic';
export type AnimationTarget = 'needle' | 'plate';
export interface AnalogueGaugeSettings {
    minValue: number;
    maxValue: number;
    unitTitle: string;
    showUnitTitle: boolean;
    majorTicksCount: number;
    minorTicks: number;
    valueBox: boolean;
    valueInt: number;
    valueDec?: number;
    units?: string;
    defaultColor: string;
    colorPlate: string;
    colorMajorTicks: string;
    colorMinorTicks: string;
    colorNeedle: string;
    colorNeedleEnd: string;
    colorNeedleShadowUp: string;
    colorNeedleShadowDown: string;
    colorValueBoxRect: string;
    colorValueBoxRectEnd: string;
    colorValueBoxBackground: string;
    colorValueBoxShadow: string;
    highlights: Highlight[];
    highlightsWidth: number;
    showBorder: boolean;
    numbersFont: FontSettings;
    titleFont: FontSettings;
    unitsFont: FontSettings;
    valueFont: FontSettings;
    animation: boolean;
    animationDuration: number;
    animationRule: AnimationRule;
}
interface BaseGaugeModel extends BaseGauge {
    _value?: number;
}
export declare abstract class TbBaseGauge<S, O extends GenericOptions> {
    protected ctx: WidgetContext;
    private gauge;
    protected constructor(ctx: WidgetContext, canvasId: string);
    protected abstract createGaugeOptions(gaugeElement: HTMLElement, settings: S): O;
    protected abstract createGauge(gaugeData: O): BaseGaugeModel;
    update(): void;
    mobileModeChanged(): void;
    resize(): void;
    destroy(): void;
}
export declare abstract class TbAnalogueGauge<S extends AnalogueGaugeSettings, O extends GenericOptions> extends TbBaseGauge<S, O> {
    protected constructor(ctx: WidgetContext, canvasId: string);
    protected createGaugeOptions(gaugeElement: HTMLElement, settings: S): O;
    protected abstract prepareGaugeOptions(settings: S, gaugeData: O): any;
}
export {};
