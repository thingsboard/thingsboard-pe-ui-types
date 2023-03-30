import { MatDialog } from '@angular/material/dialog';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { CustomerId } from '@shared/models/id/customer-id';
import { DialogService } from '@core/services/dialog.service';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityGroup, EntityGroupInfo } from '@shared/models/entity-group.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { SelectEntityGroupDialogResult } from '@home/dialogs/select-entity-group-dialog.component';
import { GroupEntityInfo } from '@shared/models/base-data';
import { EntityGroupWizardDialogResult } from '@home/components/wizard/entity-group-wizard-dialog.component';
import * as i0 from "@angular/core";
export declare class HomeDialogsService {
    private dialog;
    private translate;
    private dialogService;
    private entityGroupService;
    constructor(dialog: MatDialog, translate: TranslateService, dialogService: DialogService, entityGroupService: EntityGroupService);
    confirm(title: string, message: string, cancel?: string, ok?: string, fullscreen?: boolean): Observable<boolean>;
    importEntities(customerId: CustomerId, entityType: EntityType, entityGroupId: string): Observable<boolean>;
    shareEntityGroup($event: Event, entityGroup: EntityGroupInfo): Observable<boolean>;
    makeEntityGroupPublic($event: Event, entityGroup: EntityGroupInfo): Observable<boolean>;
    makeEntityGroupPrivate($event: Event, entityGroup: EntityGroupInfo): Observable<boolean>;
    manageOwnerAndGroups($event: Event, groupEntity: GroupEntityInfo<EntityId>): Observable<boolean>;
    selectOwner($event: Event, selectOwnerTitle: string, confirmSelectTitle: string, placeholderText: string, notFoundText: string, requiredText: string, onOwnerSelected?: (targetOwnerId: EntityId) => Observable<boolean>, excludeOwnerIds?: Array<string>): Observable<EntityId>;
    selectEntityGroup($event: Event, ownerId: EntityId, targetGroupType: EntityType, selectEntityGroupTitle: string, confirmSelectTitle: string, placeholderText: string, notFoundText: string, requiredText: string, onEntityGroupSelected?: (result: SelectEntityGroupDialogResult) => Observable<boolean>, excludeGroupIds?: Array<string>): Observable<SelectEntityGroupDialogResult>;
    createEntityGroup(groupType: EntityType, groupName?: string, ownerId?: EntityId): Observable<EntityGroupWizardDialogResult>;
    private openImportDialogCSV;
    unassignEntityGroupFromEdge($event: Event, entityGroup: EntityGroup, edgeId: string): Observable<boolean>;
    unassignEntityGroupsFromEdge($event: Event, entityGroups: Array<EntityGroup>, edgeId: string): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeDialogsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HomeDialogsService>;
}
