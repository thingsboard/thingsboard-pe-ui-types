import { DestroyRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { CalculatedField, CalculatedFieldTestScriptFn, CalculatedFieldType, OutputType } from '@shared/models/calculated-field.models';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import { EntityType } from '@shared/models/entity-type.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { AdditionalDebugActionConfig } from '@home/components/entity/debug/entity-debug-settings.model';
import * as i0 from "@angular/core";
export interface CalculatedFieldDialogData {
    value?: CalculatedField;
    buttonTitle: string;
    entityId: EntityId;
    tenantId: string;
    entityName?: string;
    ownerId: EntityId;
    additionalDebugActionConfig: AdditionalDebugActionConfig<(calculatedField: CalculatedField) => void>;
    getTestScriptDialogFn: CalculatedFieldTestScriptFn;
    isDirty?: boolean;
    readonly: boolean;
}
export declare class CalculatedFieldDialogComponent extends DialogComponent<CalculatedFieldDialogComponent, CalculatedField> {
    protected store: Store<AppState>;
    protected router: Router;
    data: CalculatedFieldDialogData;
    protected dialogRef: MatDialogRef<CalculatedFieldDialogComponent, CalculatedField>;
    private calculatedFieldsService;
    private destroyRef;
    private fb;
    fieldFormGroup: FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        type: import("@angular/forms").FormControl<CalculatedFieldType>;
        debugSettings: import("@angular/forms").FormControl<any>;
        configuration: FormGroup<{
            arguments: import("@angular/forms").FormControl<{}>;
            expressionSIMPLE: import("@angular/forms").FormControl<string>;
            expressionSCRIPT: import("@angular/forms").FormControl<string>;
            output: FormGroup<{
                name: import("@angular/forms").FormControl<string>;
                scope: import("@angular/forms").FormControl<AttributeScope>;
                type: import("@angular/forms").FormControl<OutputType>;
                decimalsByDefault: import("@angular/forms").FormControl<number>;
            }>;
            useLatestTs: import("@angular/forms").FormControl<boolean>;
        }>;
    }>;
    functionArgs$: Observable<string[]>;
    argumentsEditorCompleter$: Observable<import("../../../../../../shared/models/ace/completion.models").TbEditorCompleter>;
    argumentsHighlightRules$: Observable<import("../../../../../../shared/models/ace/ace.models").AceHighlightRules>;
    additionalDebugActionConfig: {
        action: () => void;
        title: string;
    };
    readonly OutputTypeTranslations: Map<OutputType, string>;
    readonly OutputType: typeof OutputType;
    readonly AttributeScope: typeof AttributeScope;
    readonly EntityType: typeof EntityType;
    readonly CalculatedFieldType: typeof CalculatedFieldType;
    readonly ScriptLanguage: typeof ScriptLanguage;
    readonly fieldTypes: CalculatedFieldType[];
    readonly outputTypes: OutputType[];
    readonly CalculatedFieldTypeTranslations: Map<CalculatedFieldType, string>;
    constructor(store: Store<AppState>, router: Router, data: CalculatedFieldDialogData, dialogRef: MatDialogRef<CalculatedFieldDialogComponent, CalculatedField>, calculatedFieldsService: CalculatedFieldsService, destroyRef: DestroyRef, fb: FormBuilder);
    get configFormGroup(): FormGroup;
    get outputFormGroup(): FormGroup;
    get fromGroupValue(): CalculatedField;
    cancel(): void;
    add(): void;
    onTestScript(): void;
    private applyDialogData;
    private observeTypeChanges;
    private toggleScopeByOutputType;
    private toggleKeyByCalculatedFieldType;
    private observeIsLoading;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldDialogComponent, "tb-calculated-field-dialog", never, {}, {}, never, never, false, never>;
}
