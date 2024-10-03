import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup, ValidatorFn } from '@angular/forms';
import { ContactBased } from '@shared/models/contact-based.model';
import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HasId } from '@shared/models/base-data';
import { EntityComponent } from './entity.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { CountryData } from '@shared/models/country.models';
import * as i0 from "@angular/core";
export declare abstract class ContactBasedComponent<T extends ContactBased<HasId>> extends EntityComponent<T> implements AfterViewInit {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    protected entityValue: T;
    protected entitiesTableConfigValue: EntityTableConfig<T>;
    protected cd: ChangeDetectorRef;
    protected countryData: CountryData;
    protected constructor(store: Store<AppState>, fb: UntypedFormBuilder, entityValue: T, entitiesTableConfigValue: EntityTableConfig<T>, cd: ChangeDetectorRef, countryData: CountryData);
    buildForm(entity: T): UntypedFormGroup;
    updateForm(entity: T): void;
    ngAfterViewInit(): void;
    zipValidators(country: string): ValidatorFn[];
    abstract buildEntityForm(entity: T): UntypedFormGroup;
    abstract updateEntityForm(entity: T): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactBasedComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContactBasedComponent<any>, never, never, {}, {}, never, never, false, never>;
}
