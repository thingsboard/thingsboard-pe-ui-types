import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { EntityAlias, EntityAliases } from '@shared/models/alias.models';
import { Widget } from '@shared/models/widget.models';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export interface EntityAliasesDialogData {
    entityAliases: EntityAliases;
    widgets: Array<Widget>;
    isSingleEntityAlias?: boolean;
    isSingleWidget?: boolean;
    allowedEntityTypes?: Array<EntityType | AliasEntityType>;
    disableAdd?: boolean;
    singleEntityAlias?: EntityAlias;
    customTitle?: string;
}
export declare class EntityAliasesDialogComponent extends DialogComponent<EntityAliasesDialogComponent, EntityAliases> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: EntityAliasesDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<EntityAliasesDialogComponent, EntityAliases>;
    private fb;
    private dashboardUtils;
    private translate;
    private dialogs;
    private dialog;
    title: string;
    disableAdd: boolean;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    aliasToWidgetsMap: {
        [aliasId: string]: Array<string>;
    };
    entityAliasesFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: EntityAliasesDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<EntityAliasesDialogComponent, EntityAliases>, fb: UntypedFormBuilder, dashboardUtils: DashboardUtilsService, translate: TranslateService, dialogs: DialogService, dialog: MatDialog);
    private addWidgetTitleToWidgetsMap;
    private createEntityAliasFormControl;
    entityAliasesFormArray(): UntypedFormArray;
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    removeAlias(index: number): void;
    addAlias(): void;
    editAlias(index: number): void;
    private openAliasDialog;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityAliasesDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityAliasesDialogComponent, "tb-entity-aliases-dialog", never, {}, {}, never, never, false, never>;
}
