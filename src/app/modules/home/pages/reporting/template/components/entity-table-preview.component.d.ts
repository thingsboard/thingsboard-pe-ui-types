import { EntityTableReportComponentConfig } from '@shared/models/report-component.models';
import { DataKey } from '@shared/models/widget.models';
import { AbstractReportTablePreviewComponent } from '@home/pages/reporting/template/components/report-table-preview.component';
import * as i0 from "@angular/core";
export declare class EntityTablePreviewComponent extends AbstractReportTablePreviewComponent<EntityTableReportComponentConfig> {
    get columns(): DataKey[];
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTablePreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTablePreviewComponent, "tb-entity-table-preview", never, {}, {}, never, never, false, never>;
}
