import { ControlValueAccessor, Validator, ValidationErrors, FormBuilder, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { ArgumentType, CalculatedFieldEventArguments, CalculatedFieldType } from '@shared/models/calculated-field.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class CalculatedFieldTestArgumentsComponent extends PageComponent implements ControlValueAccessor, Validator {
    private fb;
    private dialog;
    argumentsTypeMap: Map<string, ArgumentType>;
    argumentsFormArray: import("@angular/forms").FormArray<FormGroup<any>>;
    readonly entityTypeTranslations: Map<import("@shared/models/entity-type.models").EntityType | import("@shared/models/entity-type.models").AliasEntityType, import("@shared/models/entity-type.models").EntityTypeTranslation>;
    readonly ArgumentTypeTranslations: Map<ArgumentType, string>;
    readonly ArgumentType: typeof ArgumentType;
    readonly CalculatedFieldType: typeof CalculatedFieldType;
    private propagateChange;
    constructor(fb: FormBuilder, dialog: MatDialog);
    registerOnChange(propagateChange: (value: CalculatedFieldEventArguments) => void): void;
    registerOnTouched(_: any): void;
    writeValue(argumentsObj: CalculatedFieldEventArguments): void;
    validate(): ValidationErrors | null;
    openEditJSONDialog(group: FormGroup): void;
    private getSimpleArgumentFormGroup;
    private getRollingArgumentFormGroup;
    private getValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldTestArgumentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldTestArgumentsComponent, "tb-calculated-field-test-arguments", never, { "argumentsTypeMap": { "alias": "argumentsTypeMap"; "required": false; }; }, {}, never, never, false, never>;
}
