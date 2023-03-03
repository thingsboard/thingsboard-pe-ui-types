import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { EntityType } from '@shared/models/entity-type.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class OwnerEntityGroupListComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    entityType: EntityType;
    ownerEntityGroupListFormGroup: UntypedFormGroup;
    modelValue: Array<string> | null;
    currentUser: import("../../../../shared/public-api").AuthUser;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | undefined): void;
    validate(c: UntypedFormControl): {
        ownerEntityGroups: {
            valid: boolean;
        };
    };
    private prepareOwnerEntityGroupsFormArray;
    private createOwnerEntityGroupsControl;
    ownerEntityGroupsArray(): UntypedFormGroup[];
    entityGroupsTitle(): string;
    trackByOwnerEntityGroups(index: number, ownerEntityGroupsControl: AbstractControl): any;
    excludeOwnerIds(ownerEntityGroupsControl: AbstractControl): Array<string>;
    removeOwnerEntityGroups(index: number): void;
    addOwnerEntityGroup(): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwnerEntityGroupListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwnerEntityGroupListComponent, "tb-owner-entity-group-list", never, { "disabled": "disabled"; "entityType": "entityType"; }, {}, never, never, false, never>;
}
