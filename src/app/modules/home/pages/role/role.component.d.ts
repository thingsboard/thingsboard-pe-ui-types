import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { MatDialog } from '@angular/material/dialog';
import { Role } from '@shared/models/role.models';
import { RoleType } from '@shared/models/security.models';
import * as i0 from "@angular/core";
export declare class RoleComponent extends EntityComponent<Role> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    private dialog;
    protected entityValue: Role;
    protected entitiesTableConfigValue: EntityTableConfig<Role>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    roleType: typeof RoleType;
    roleTypes: string[];
    roleTypeTranslations: Map<RoleType, string>;
    constructor(store: Store<AppState>, translate: TranslateService, dialog: MatDialog, entityValue: Role, entitiesTableConfigValue: EntityTableConfig<Role>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    buildForm(entity: Role): UntypedFormGroup;
    private roleTypeChanged;
    private updateValidators;
    updateForm(entity: Role): void;
    prepareFormValue(formValue: any): any;
    onRoleIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RoleComponent, "tb-role", never, {}, {}, never, never, false, never>;
}
