import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { EntityType } from '@shared/models/entity-type.models';
import { PageComponent } from '@shared/components/page.component';
import { EntityGroupDetailsMode, EntityGroupSettings } from '@shared/models/entity-group.models';
import * as i0 from "@angular/core";
export declare class EntityGroupSettingsComponent extends PageComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    modelValue: EntityGroupSettings | null;
    settingsFormGroup: UntypedFormGroup;
    entityType: EntityType;
    disabled: boolean;
    entityGroupDetailsModes: string[];
    entityGroupDetailsModeTranslations: Map<EntityGroupDetailsMode, string>;
    entityTypes: typeof EntityType;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityGroupSettings | null): void;
    private propagateChange;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupSettingsComponent, "tb-entity-group-settings", never, { "entityType": "entityType"; "disabled": "disabled"; }, {}, never, never, false>;
}
