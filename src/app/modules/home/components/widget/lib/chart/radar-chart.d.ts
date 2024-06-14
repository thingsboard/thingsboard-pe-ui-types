import { TbLatestChart } from '@home/components/widget/lib/chart/latest-chart';
import { RadarChartSettings } from '@home/components/widget/lib/chart/radar-chart.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataKey } from '@shared/models/widget.models';
export declare class TbRadarChart extends TbLatestChart<RadarChartSettings> {
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<RadarChartSettings>, chartElement: HTMLElement, renderer: Renderer2, translate: TranslateService, autoResize?: boolean);
    protected defaultSettings(): RadarChartSettings;
    protected prepareLatestChartOption(): void;
    protected doUpdateSeriesData(): void;
    protected forceRedrawOnResize(): boolean;
    keyEnter(dataKey: DataKey): void;
    keyLeave(dataKey: DataKey): void;
    toggleKey(dataKey: DataKey): void;
}
