import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { AlarmCondition, AlarmConditionType } from '@shared/models/device.models';
import { TimeUnit } from '@shared/models/time/time.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export interface AlarmRuleConditionDialogData {
    readonly: boolean;
    condition: AlarmCondition;
    entityId?: EntityId;
}
export declare class AlarmRuleConditionDialogComponent extends DialogComponent<AlarmRuleConditionDialogComponent, AlarmCondition> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmRuleConditionDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AlarmRuleConditionDialogComponent, AlarmCondition>;
    private fb;
    translate: TranslateService;
    timeUnits: TimeUnit[];
    timeUnitTranslations: Map<import("@shared/models/time/time.models").FullTimeUnit, string>;
    alarmConditionTypes: AlarmConditionType[];
    AlarmConditionType: typeof AlarmConditionType;
    alarmConditionTypeTranslation: Map<AlarmConditionType, string>;
    readonly: boolean;
    condition: AlarmCondition;
    entityId: EntityId;
    conditionFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AlarmRuleConditionDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AlarmRuleConditionDialogComponent, AlarmCondition>, fb: UntypedFormBuilder, translate: TranslateService);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    private updateValidators;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleConditionDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleConditionDialogComponent, "tb-alarm-rule-condition-dialog", never, {}, {}, never, never, false, never>;
}
