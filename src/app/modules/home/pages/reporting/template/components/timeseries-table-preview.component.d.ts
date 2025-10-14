import { TimeseriesTableReportComponentConfig } from '@shared/models/report-component.models';
import { DataKey } from '@shared/models/widget.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { AbstractReportTablePreviewComponent } from '@home/pages/reporting/template/components/report-table-preview.component';
import * as i0 from "@angular/core";
export declare class TimeseriesTablePreviewComponent extends AbstractReportTablePreviewComponent<TimeseriesTableReportComponentConfig> {
    columns: DataKey[];
    private date;
    private destroyRef;
    private templatePage;
    private timestampColumn;
    private timestampPreview;
    private createdTimePreview;
    ngOnInit(): void;
    onComponentUpdated(): void;
    private updateCreatedTimePreview;
    cellContent(column: DataKey): string;
    protected styleFromColumnSettings(column: DataKey, header?: boolean): ComponentStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeseriesTablePreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeseriesTablePreviewComponent, "tb-timeseries-table-preview", never, {}, {}, never, never, false, never>;
}
