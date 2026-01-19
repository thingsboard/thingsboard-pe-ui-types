import { ChangeDetectorRef, DestroyRef, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverService } from '@shared/components/popover.service';
import { EntityService } from '@core/http/entity.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CalculatedFieldArgumentsTableComponent } from '@home/components/calculated-fields/components/calculated-field-arguments/calculated-field-arguments-table.component';
import * as i0 from "@angular/core";
export declare class EntityAggregationArgumentsTableComponent extends CalculatedFieldArgumentsTableComponent {
    protected fb: FormBuilder;
    protected popoverService: TbPopoverService;
    protected viewContainerRef: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected entityService: EntityService;
    protected destroyRef: DestroyRef;
    protected store: Store<AppState>;
    constructor(fb: FormBuilder, popoverService: TbPopoverService, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, renderer: Renderer2, entityService: EntityService, destroyRef: DestroyRef, store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityAggregationArgumentsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityAggregationArgumentsTableComponent, "tb-entity-aggregation-arguments-table", never, {}, {}, never, never, false, never>;
}
