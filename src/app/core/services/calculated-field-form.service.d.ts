import { DestroyRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CalculatedField, CalculatedFieldConfiguration, CalculatedFieldEventArguments } from '@shared/models/calculated-field.models';
import { CalculatedFieldsTableEntity } from '@home/components/calculated-fields/calculated-fields-table-config';
import * as i0 from "@angular/core";
export declare class CalculatedFieldFormService {
    private fb;
    private calculatedFieldsService;
    buildForm(): FormGroup;
    buildAlarmRuleForm(): FormGroup;
    setupTypeChange(form: FormGroup, destroyRef: DestroyRef, isEditActive?: () => boolean): void;
    prepareConfig(configuration: CalculatedFieldConfiguration): CalculatedFieldConfiguration;
    testScript(calculatedFieldId: string, formValue: CalculatedField, testDialogFn: (calculatedField: CalculatedFieldsTableEntity, argumentsObj?: CalculatedFieldEventArguments, openCalculatedFieldEdit?: boolean, expression?: string) => Observable<string>, destroyRef: DestroyRef, expression?: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldFormService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalculatedFieldFormService>;
}
