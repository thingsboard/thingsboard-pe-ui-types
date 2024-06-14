import { PieChartSettings } from '@home/components/widget/lib/chart/pie-chart.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TbLatestChart } from '@home/components/widget/lib/chart/latest-chart';
export declare class TbPieChart extends TbLatestChart<PieChartSettings> {
    private totalValueColor;
    private totalTextNode;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<PieChartSettings>, chartElement: HTMLElement, renderer: Renderer2, translate: TranslateService, autoResize?: boolean);
    protected defaultSettings(): PieChartSettings;
    protected initSettings(): void;
    protected prepareLatestChartOption(): void;
    protected afterDrawChart(): void;
    protected doUpdateSeriesData(): void;
    protected afterUpdateSeriesData(initial: boolean): void;
    protected initialShapeWidth(): number;
    protected initialShapeHeight(): number;
    protected beforeResize(shapeWidth: number, shapeHeight: number): void;
    protected afterResize(shapeWidth: number, shapeHeight: number): void;
    private renderTotal;
}
