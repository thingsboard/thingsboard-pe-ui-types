import { AlarmTableReportComponentConfig } from '@shared/models/report-component.models';
import { DataKey } from '@shared/models/widget.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { AbstractReportTablePreviewComponent } from '@home/pages/reporting/template/components/report-table-preview.component';
import * as i0 from "@angular/core";
export declare class AlarmTablePreviewComponent extends AbstractReportTablePreviewComponent<AlarmTableReportComponentConfig> {
    private date;
    private destroyRef;
    private templatePage;
    private timestampPreview;
    ngOnInit(): void;
    onComponentUpdated(): void;
    private updateTimestampPreview;
    get columns(): DataKey[];
    cellContent(column: DataKey): string;
    protected styleFromColumnSettings(column: DataKey, header?: boolean): ComponentStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTablePreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTablePreviewComponent, "tb-alarm-table-preview", never, {}, {}, never, never, false, never>;
}
