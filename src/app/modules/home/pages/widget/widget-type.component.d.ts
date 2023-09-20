import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { WidgetTypeDetails } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class WidgetTypeComponent extends EntityComponent<WidgetTypeDetails> {
    protected store: Store<AppState>;
    protected entityValue: WidgetTypeDetails;
    protected entitiesTableConfigValue: EntityTableConfig<WidgetTypeDetails>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    constructor(store: Store<AppState>, entityValue: WidgetTypeDetails, entitiesTableConfigValue: EntityTableConfig<WidgetTypeDetails>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    buildForm(entity: WidgetTypeDetails): UntypedFormGroup;
    updateForm(entity: WidgetTypeDetails): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetTypeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetTypeComponent, "tb-widget-type", never, {}, {}, never, never, false, never>;
}
