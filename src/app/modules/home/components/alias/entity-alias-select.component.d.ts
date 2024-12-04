import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { EntityAlias } from '@shared/models/alias.models';
import { IAliasController } from '@core/api/widget-api.models';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { EntityAliasSelectCallbacks } from './entity-alias-select.component.models';
import { ErrorStateMatcher } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class EntityAliasSelectComponent implements ControlValueAccessor, OnInit, ErrorStateMatcher {
    private errorStateMatcher;
    private entityService;
    translate: TranslateService;
    truncate: TruncatePipe;
    private fb;
    selectEntityAliasFormGroup: FormGroup;
    modelValue: string | null;
    aliasController: IAliasController;
    allowedEntityTypes: Array<EntityType>;
    callbacks: EntityAliasSelectCallbacks;
    showLabel: boolean;
    entityAliasAutocomplete: MatAutocomplete;
    autoCompleteTrigger: MatAutocompleteTrigger;
    tbRequired: boolean;
    disabled: boolean;
    entityAliasInput: ElementRef;
    entityAliasList: Array<EntityAlias>;
    filteredEntityAliases: Observable<Array<EntityAlias>>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(errorStateMatcher: ErrorStateMatcher, entityService: EntityService, translate: TranslateService, truncate: TruncatePipe, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    onFocus(): void;
    updateView(value: EntityAlias | null): void;
    displayEntityAliasFn(entityAlias?: EntityAlias): string | undefined;
    fetchEntityAliases(searchText?: string): Observable<Array<EntityAlias>>;
    clear(value?: string): void;
    textIsNotEmpty(text: string): boolean;
    entityAliasEnter($event: KeyboardEvent): void;
    editEntityAlias($event: Event): void;
    createEntityAlias($event: Event, alias: string, focusOnCancel?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityAliasSelectComponent, [{ skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityAliasSelectComponent, "tb-entity-alias-select", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "allowedEntityTypes": { "alias": "allowedEntityTypes"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "tbRequired": { "alias": "tbRequired"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
