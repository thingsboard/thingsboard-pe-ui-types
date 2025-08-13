import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import { TableReportComponentConfig } from '@shared/models/report-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { DataKey } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare abstract class AbstractReportTablePreviewComponent<C extends TableReportComponentConfig> extends AbstractReportComponentPreview<C> {
    showTableHeading: boolean;
    headingText: string;
    headingHeight: string;
    headingStyle: ComponentStyle;
    onComponentUpdated(): void;
    headerStyle(column: DataKey): ComponentStyle;
    cellStyle(column: DataKey): ComponentStyle;
    columnWidth(column: DataKey): string;
    hasSortOrder(column: DataKey): boolean;
    ascSortOrder(): boolean;
    cellContent(column: DataKey): string;
    protected styleFromColumnSettings(column: DataKey, header?: boolean): ComponentStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractReportTablePreviewComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractReportTablePreviewComponent<any>, never, never, {}, {}, never, never, false, never>;
}
