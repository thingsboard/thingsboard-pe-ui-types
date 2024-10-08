import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { Resource } from '@shared/models/security.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
interface ResourceTypeInfo {
    name: string;
    value: Resource;
}
export declare class ResourceTypeAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private store;
    translate: TranslateService;
    private userPermissionsService;
    private fb;
    resourceTypeFormGroup: UntypedFormGroup;
    modelValue: Resource | null;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    resourceTypeInput: ElementRef<HTMLInputElement>;
    filteredResources: Observable<Array<ResourceTypeInfo>>;
    resources: Array<ResourceTypeInfo>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, userPermissionsService: UserPermissionsService, fb: UntypedFormBuilder);
    private sortResource;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Resource | null): void;
    onFocus(): void;
    updateView(value: ResourceTypeInfo | string | null): void;
    displayResourceTypeFn(resource?: ResourceTypeInfo): string | undefined;
    fetchResources(searchText?: string): Observable<Array<ResourceTypeInfo>>;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourceTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResourceTypeAutocompleteComponent, "tb-resource-type-autocomplete", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
