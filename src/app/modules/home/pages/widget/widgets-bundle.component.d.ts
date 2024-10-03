import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class WidgetsBundleComponent extends EntityComponent<WidgetsBundle> {
    protected store: Store<AppState>;
    protected entityValue: WidgetsBundle;
    protected entitiesTableConfigValue: EntityTableConfig<WidgetsBundle>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    standalone: boolean;
    constructor(store: Store<AppState>, entityValue: WidgetsBundle, entitiesTableConfigValue: EntityTableConfig<WidgetsBundle>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    buildForm(entity: WidgetsBundle): UntypedFormGroup;
    updateForm(entity: WidgetsBundle): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleComponent, [null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetsBundleComponent, "tb-widgets-bundle", never, { "standalone": "standalone"; }, {}, never, never, false, never>;
}
