import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { EntityAlias, EntityAliases } from '@shared/models/alias.models';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export interface EntityAliasDialogData {
    isAdd: boolean;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    entityAliases: EntityAliases | Array<EntityAlias>;
    alias?: EntityAlias;
}
export declare class EntityAliasDialogComponent extends DialogComponent<EntityAliasDialogComponent, EntityAlias> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: EntityAliasDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<EntityAliasDialogComponent, EntityAlias>;
    private fb;
    private utils;
    translate: TranslateService;
    private entityService;
    isAdd: boolean;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    entityAliases: Array<EntityAlias>;
    alias: EntityAlias;
    entityAliasFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: EntityAliasDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<EntityAliasDialogComponent, EntityAlias>, fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService, entityService: EntityService);
    validateDuplicateAliasName(): ValidatorFn;
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    private validate;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityAliasDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityAliasDialogComponent, "tb-entity-alias-dialog", never, {}, {}, never, never, false, never>;
}
