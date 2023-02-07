import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { User } from '@shared/models/user.model';
import { Authority } from '@shared/models/authority.enum';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class GroupUserComponent extends GroupEntityComponent<User> {
    protected store: Store<AppState>;
    protected entityValue: User;
    protected entitiesTableConfigValue: GroupEntityTableConfig<User>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    private translate;
    authority: typeof Authority;
    loginAsUserEnabled$: import("rxjs").Observable<boolean>;
    whiteLabelingAllowed$: import("rxjs").Observable<boolean>;
    constructor(store: Store<AppState>, entityValue: User, entitiesTableConfigValue: GroupEntityTableConfig<User>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, translate: TranslateService);
    hideDelete(): boolean;
    isUserCredentialsEnabled(): boolean;
    buildForm(entity: User): UntypedFormGroup;
    updateForm(entity: User): void;
    onUserIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupUserComponent, [null, { optional: true; }, { optional: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupUserComponent, "tb-group-user", never, {}, {}, never, never, false>;
}
