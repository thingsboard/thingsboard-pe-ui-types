import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { CalculatedField, CalculatedFieldsQuery } from "@shared/models/calculated-field.models";
import { CalculatedFieldsTableConfig } from '@home/components/calculated-fields/calculated-fields-table-config';
import * as i0 from "@angular/core";
export declare class CalculatedFieldsHeaderComponent extends EntityTableHeaderComponent<CalculatedField> {
    protected store: Store<AppState>;
    get calculatedFieldsTableConfig(): CalculatedFieldsTableConfig;
    constructor(store: Store<AppState>);
    calculatedFieldsFilterChanged(calculatedFieldFilterConfig: CalculatedFieldsQuery): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldsHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldsHeaderComponent, "tb-calculated-fields-table-header", never, {}, {}, never, never, false, never>;
}
