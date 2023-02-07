import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityGroupColumn, EntityGroupSortOrder } from '@shared/models/entity-group.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class EntityGroupColumnsComponent extends PageComponent implements ControlValueAccessor, OnInit {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    entityType: EntityType;
    columnsFormGroup: UntypedFormGroup;
    private propagateChange;
    private valueChangeSubscription;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    columnsFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(columns: EntityGroupColumn[]): void;
    removeColumn(index: number): void;
    addColumn(): void;
    defaultSortOrderChanged(index: number, sortOrder?: EntityGroupSortOrder): void;
    updateColumn(index: number, column: EntityGroupColumn): void;
    trackByColumnControl(index: number, columnControl: AbstractControl): any;
    onDrop(event: CdkDragDrop<string[]>): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupColumnsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupColumnsComponent, "tb-entity-group-columns", never, { "disabled": "disabled"; "entityType": "entityType"; }, {}, never, never, false>;
}
