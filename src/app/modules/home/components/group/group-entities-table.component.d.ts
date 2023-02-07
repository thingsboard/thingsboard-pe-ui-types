import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { BaseData, HasId } from '@shared/models/base-data';
import { EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { EntityGroupParams, ShortEntityView } from '@shared/models/entity-group.models';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { DialogService } from '@core/services/dialog.service';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityGroupsTableConfig } from '@home/components/group/entity-groups-table-config';
import { EntityGroupsTableConfigResolver } from '@home/components/group/entity-groups-table-config.resolver';
import { EntityGroupConfigResolver } from '@home/components/group/entity-group-config.resolver';
import { EntityDetailsPanelComponent } from '@home/components/entity/entity-details-panel.component';
import * as i0 from "@angular/core";
export declare class GroupEntitiesTableComponent extends PageComponent implements AfterViewInit, OnInit, OnDestroy, OnChanges {
    protected store: Store<AppState>;
    private window;
    private route;
    private entityGroupsTableConfigResolver;
    private entityGroupConfigResolver;
    private entityGroupService;
    private userPermissionsService;
    translate: TranslateService;
    dialog: MatDialog;
    private dialogService;
    private cd;
    isGroupDetailsOpen: boolean;
    entitiesTable: EntitiesTableComponent;
    entityGroupDetailsPanel: EntityDetailsPanelComponent;
    groupParams: EntityGroupParams;
    entityGroup: EntityGroupStateInfo<BaseData<HasId>>;
    entityGroupConfig: GroupEntityTableConfig<BaseData<HasId>>;
    entityGroupDetailsConfig: EntityGroupsTableConfig;
    private rxSubscriptions;
    updateBreadcrumbs: EventEmitter<any>;
    constructor(store: Store<AppState>, window: Window, route: ActivatedRoute, entityGroupsTableConfigResolver: EntityGroupsTableConfigResolver, entityGroupConfigResolver: EntityGroupConfigResolver, entityGroupService: EntityGroupService, userPermissionsService: UserPermissionsService, translate: TranslateService, dialog: MatDialog, dialogService: DialogService, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onToggleEntityGroupDetails(): void;
    onToggleEntityDetails($event: Event, entity: ShortEntityView): void;
    onEntityGroupUpdated(entity: BaseData<HasId>): void;
    onEntityGroupAction(action: EntityAction<BaseData<HasId>>): void;
    private reloadEntityGroup;
    private reloadEntityGroupConfig;
    private deleteEntityGroup;
    private init;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupEntitiesTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupEntitiesTableComponent, "tb-group-entities-table", never, { "groupParams": "groupParams"; "entityGroup": "entityGroup"; }, {}, never, never, false>;
}
