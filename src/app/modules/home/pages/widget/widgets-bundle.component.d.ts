import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class WidgetsBundleComponent extends EntityComponent<WidgetsBundle> {
    protected store: Store<AppState>;
    protected entityValue: WidgetsBundle;
    protected entitiesTableConfigValue: EntityTableConfig<WidgetsBundle>;
    protected fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    constructor(store: Store<AppState>, entityValue: WidgetsBundle, entitiesTableConfigValue: EntityTableConfig<WidgetsBundle>, fb: FormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    buildForm(entity: WidgetsBundle): FormGroup;
    updateForm(entity: WidgetsBundle): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetsBundleComponent, "tb-widgets-bundle", never, {}, {}, never, never>;
}
