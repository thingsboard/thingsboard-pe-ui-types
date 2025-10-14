import { EntityTableReportComponentConfig } from '@shared/models/report-component.models';
import { DataKey } from '@shared/models/widget.models';
import { AbstractReportTablePreviewComponent } from '@home/pages/reporting/template/components/report-table-preview.component';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class EntityTablePreviewComponent extends AbstractReportTablePreviewComponent<EntityTableReportComponentConfig> {
    private date;
    private destroyRef;
    private templatePage;
    private timestampPreview;
    ngOnInit(): void;
    cellContent(column: DataKey): string;
    protected styleFromColumnSettings(column: DataKey, header?: boolean): ComponentStyle;
    get columns(): DataKey[];
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTablePreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTablePreviewComponent, "tb-entity-table-preview", never, {}, {}, never, never, false, never>;
}
