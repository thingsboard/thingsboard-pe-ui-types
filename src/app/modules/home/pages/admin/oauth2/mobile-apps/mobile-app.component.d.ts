import { ChangeDetectorRef } from '@angular/core';
import { EntityComponent } from '@home/components/entity/entity.component';
import { MobileAppInfo } from '@shared/models/oauth2.models';
import { AppState } from '@core/core.state';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class MobileAppComponent extends EntityComponent<MobileAppInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: MobileAppInfo;
    protected entitiesTableConfigValue: EntityTableConfig<MobileAppInfo>;
    protected cd: ChangeDetectorRef;
    fb: UntypedFormBuilder;
    private dialog;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: MobileAppInfo, entitiesTableConfigValue: EntityTableConfig<MobileAppInfo>, cd: ChangeDetectorRef, fb: UntypedFormBuilder, dialog: MatDialog);
    buildForm(entity: MobileAppInfo): UntypedFormGroup;
    updateForm(entity: MobileAppInfo): void;
    createClient($event: Event): void;
    private base64Format;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppComponent, "tb-mobile-app", never, {}, {}, never, never, false, never>;
}
