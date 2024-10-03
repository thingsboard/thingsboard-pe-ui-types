import { ScadaSymbolObjectSettings } from '@home/components/widget/lib/scada/scada-symbol.models';
import { BackgroundSettings } from '@shared/models/widget-settings.models';
export interface ScadaSymbolWidgetSettings {
    scadaSymbolUrl?: string;
    scadaSymbolContent?: string;
    simulated?: boolean;
    scadaSymbolObjectSettings: ScadaSymbolObjectSettings;
    background: BackgroundSettings;
    padding: string;
}
export declare const scadaSymbolWidgetDefaultSettings: ScadaSymbolWidgetSettings;
