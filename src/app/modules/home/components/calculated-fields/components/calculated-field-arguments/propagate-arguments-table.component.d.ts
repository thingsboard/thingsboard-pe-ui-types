import { ChangeDetectorRef, DestroyRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverService } from '@shared/components/popover.service';
import { EntityService } from '@core/http/entity.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CalculatedFieldArgumentsTableComponent } from '@home/components/calculated-fields/components/calculated-field-arguments/calculated-field-arguments-table.component';
import { CalculatedFieldArgumentValue } from '@shared/models/calculated-field.models';
import * as i0 from "@angular/core";
export declare class PropagateArgumentsTableComponent extends CalculatedFieldArgumentsTableComponent implements OnInit {
    protected fb: FormBuilder;
    protected popoverService: TbPopoverService;
    protected viewContainerRef: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected entityService: EntityService;
    protected destroyRef: DestroyRef;
    protected store: Store<AppState>;
    constructor(fb: FormBuilder, popoverService: TbPopoverService, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, renderer: Renderer2, entityService: EntityService, destroyRef: DestroyRef, store: Store<AppState>);
    ngOnInit(): void;
    protected changeIsScriptMode(): void;
    private updatedValue;
    protected isEditButtonShowBadge(argument: CalculatedFieldArgumentValue): boolean;
    protected updateErrorText(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropagateArgumentsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropagateArgumentsTableComponent, "tb-propagate-arguments-table", never, {}, {}, never, never, false, never>;
}
