import { TbLatestChart } from '@home/components/widget/lib/chart/latest-chart';
import { BarsChartSettings } from '@home/components/widget/lib/chart/bars-chart.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { PieChartSettings } from '@home/components/widget/lib/chart/pie-chart.models';
import { Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class TbBarsChart extends TbLatestChart<BarsChartSettings> {
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<PieChartSettings>, chartElement: HTMLElement, renderer: Renderer2, translate: TranslateService, autoResize?: boolean);
    protected defaultSettings(): BarsChartSettings;
    protected prepareLatestChartOption(): void;
    protected doUpdateSeriesData(): void;
}
