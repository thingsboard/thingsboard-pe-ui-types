import { BaseData } from '@shared/models/base-data';
import { EntityGroupService } from '@core/http/entity-group.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AllEntitiesTableConfigService<T extends BaseData<EntityId>> {
    private entityGroupService;
    private userPermissionsService;
    private homeDialogs;
    private translate;
    private dialog;
    constructor(entityGroupService: EntityGroupService, userPermissionsService: UserPermissionsService, homeDialogs: HomeDialogsService, translate: TranslateService, dialog: MatDialog);
    prepareConfiguration(config: EntityTableConfig<T>): EntityTableConfig<T>;
    private addGroupEntity;
    private changeEntitiesOwner;
    static ɵfac: i0.ɵɵFactoryDeclaration<AllEntitiesTableConfigService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AllEntitiesTableConfigService<any>>;
}
