import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { TelemetryType } from '@shared/models/telemetry/telemetry.models';
import { AttributeService } from '@core/http/attribute.service';
import * as i0 from "@angular/core";
export interface AddAttributeDialogData {
    entityId: EntityId;
    attributeScope: TelemetryType;
}
export declare class AddAttributeDialogComponent extends DialogComponent<AddAttributeDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddAttributeDialogData;
    private attributeService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddAttributeDialogComponent, boolean>;
    fb: FormBuilder;
    attributeFormGroup: FormGroup;
    submitted: boolean;
    isTelemetry: boolean;
    constructor(store: Store<AppState>, router: Router, data: AddAttributeDialogData, attributeService: AttributeService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddAttributeDialogComponent, boolean>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    invalid(): boolean;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddAttributeDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddAttributeDialogComponent, "tb-add-attribute-dialog", never, {}, {}, never, never, false, never>;
}
