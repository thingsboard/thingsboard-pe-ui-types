import { ChangeDetectorRef, DestroyRef, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverService } from '@shared/components/popover.service';
import { EntityService } from '@core/http/entity.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CalculatedFieldArgumentsTableComponent } from '@home/components/calculated-fields/components/calculated-field-arguments/calculated-field-arguments-table.component';
import { RelationPathLevel } from '@shared/models/calculated-field.models';
import * as i0 from "@angular/core";
export declare class RelatedAggregationArgumentsTableComponent extends CalculatedFieldArgumentsTableComponent {
    protected fb: FormBuilder;
    protected popoverService: TbPopoverService;
    protected viewContainerRef: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected entityService: EntityService;
    protected destroyRef: DestroyRef;
    protected store: Store<AppState>;
    set relation(value: RelationPathLevel);
    constructor(fb: FormBuilder, popoverService: TbPopoverService, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, renderer: Renderer2, entityService: EntityService, destroyRef: DestroyRef, store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<RelatedAggregationArgumentsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelatedAggregationArgumentsTableComponent, "tb-related-aggregation-arguments-table", never, { "relation": { "alias": "relation"; "required": true; }; }, {}, never, never, false, never>;
}
