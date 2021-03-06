import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { ContactBased } from '@shared/models/contact-based.model';
import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HasId } from '@shared/models/base-data';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import * as i0 from "@angular/core";
export declare abstract class GroupContactBasedComponent<T extends ContactBased<HasId>> extends GroupEntityComponent<T> implements AfterViewInit {
    protected store: Store<AppState>;
    protected fb: FormBuilder;
    protected entityValue: T;
    protected entitiesTableConfigValue: GroupEntityTableConfig<T>;
    protected cd: ChangeDetectorRef;
    protected constructor(store: Store<AppState>, fb: FormBuilder, entityValue: T, entitiesTableConfigValue: GroupEntityTableConfig<T>, cd: ChangeDetectorRef);
    buildForm(entity: T): FormGroup;
    updateForm(entity: T): void;
    ngAfterViewInit(): void;
    zipValidators(country: string): ValidatorFn[];
    abstract buildEntityForm(entity: T): FormGroup;
    abstract updateEntityForm(entity: T): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupContactBasedComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GroupContactBasedComponent<any>, never, never, {}, {}, never>;
}
