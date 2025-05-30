import { DestroyRef, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { ImageMapProviderSettings } from '@home/components/widget/lib/maps-legacy/map-models';
import { IAliasController } from '@core/api/widget-api.models';
import { Observable } from 'rxjs';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export declare class ImageMapProviderSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private entityService;
    private fb;
    private destroyRef;
    entityAliasInput: ElementRef;
    keyInput: ElementRef;
    disabled: boolean;
    aliasController: IAliasController;
    private modelValue;
    private propagateChange;
    providerSettingsFormGroup: UntypedFormGroup;
    filteredEntityAliases: Observable<Array<string>>;
    aliasSearchText: string;
    filteredKeys: Observable<Array<string>>;
    keySearchText: string;
    private latestKeySearchResult;
    private keysFetchObservable$;
    private entityAliasList;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ImageMapProviderSettings): void;
    validate(c: UntypedFormControl): {
        imageMapProviderSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    clearEntityAlias(): void;
    onEntityAliasFocus(): void;
    clearKey(): void;
    onKeyFocus(): void;
    private fetchEntityAliases;
    private fetchKeys;
    private getKeys;
    private fetchEntityKeys;
    private createKeyFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageMapProviderSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageMapProviderSettingsComponent, "tb-image-map-provider-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; }, {}, never, never, false, never>;
}
