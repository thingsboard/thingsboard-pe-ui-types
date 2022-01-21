import { JsonSettingsSchema } from '@shared/models/widget.models';
import { AnalogueGaugeSettings } from '@home/components/widget/lib/analogue-gauge.models';
export interface AnalogueLinearGaugeSettings extends AnalogueGaugeSettings {
    barStrokeWidth: number;
    colorBarStroke: string;
    colorBar: string;
    colorBarEnd: string;
    colorBarProgress: string;
    colorBarProgressEnd: string;
}
export declare function getAnalogueLinearGaugeSettingsSchema(): JsonSettingsSchema;
