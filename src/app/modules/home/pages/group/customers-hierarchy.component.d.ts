import { ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LoadNodesCallback, NavTreeEditCallbacks, NodeSelectedCallback } from '@shared/components/nav-tree.component';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityGroupParams } from '@shared/models/entity-group.models';
import { CustomersHierarchyViewMode } from '@home/pages/group/customers-hierarchy.models';
import { EntityService } from '@core/http/entity.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityGroupStateInfo } from '@home/models/group/group-entities-table-config.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { EntityGroupsTableConfig } from '@home/components/group/entity-groups-table-config';
import { EntityGroupsTableConfigResolver } from '@home/components/group/entity-groups-table-config.resolver';
import { EntityGroupConfigResolver } from '@home/components/group/entity-group-config.resolver';
import { RuleChainsTableConfigResolver } from '@home/pages/rulechain/rulechains-table-config.resolver';
import { EdgeService } from '@core/http/edge.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { IntegrationsTableConfigResolver } from '@home/pages/integration/integrations-table-config.resolver';
import * as i0 from "@angular/core";
export declare class CustomersHierarchyComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private cd;
    private ngZone;
    private entityGroupService;
    private entityService;
    private edgeService;
    private userPermissionsService;
    private translate;
    private entityGroupsTableConfigResolver;
    private entityGroupConfigResolver;
    private ruleChainsTableConfigResolver;
    private integrationsTableConfigResolver;
    isNavTreeOpen: boolean;
    nodeIdCounter: number;
    selectedNodeId: number;
    parentIdToGroupAllNodeId: {
        [parentNodeId: string]: string;
    };
    entityGroupNodesMap: {
        [parentNodeId: string]: {
            [entityGroupId: string]: string;
        };
    };
    customerNodesMap: {
        [parentNodeId: string]: {
            [customerId: string]: string;
        };
    };
    customerGroupsNodesMap: {
        [customerNodeId: string]: {
            [groupsType: string]: string;
        };
    };
    edgeNodesMap: {
        [parentNodeId: string]: {
            [edgeId: string]: string;
        };
    };
    edgeGroupsNodesMap: {
        [customerNodeId: string]: {
            [groupsType: string]: string;
        };
    };
    internalIdToNodeIds: {
        [internalId: string]: string[];
    };
    internalIdToParentNodeIds: {
        [internalId: string]: string[];
    };
    nodeIdToInternalId: {
        [nodeId: string]: string;
    };
    private hierarchyCallbacks;
    viewMode: CustomersHierarchyViewMode;
    entityGroupParams: EntityGroupParams;
    entityGroupsTableConfig: EntityGroupsTableConfig | EntityTableConfig<BaseData<HasId>>;
    entityGroupStateInfo: EntityGroupStateInfo<BaseData<HasId>>;
    edgeId: string;
    nodeEditCallbacks: NavTreeEditCallbacks;
    private customerData;
    private allowedGroupTypes;
    private allowedEdgeGroupTypes;
    private edgesSupportEnabled;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, ngZone: NgZone, entityGroupService: EntityGroupService, entityService: EntityService, edgeService: EdgeService, userPermissionsService: UserPermissionsService, translate: TranslateService, entityGroupsTableConfigResolver: EntityGroupsTableConfigResolver, entityGroupConfigResolver: EntityGroupConfigResolver, ruleChainsTableConfigResolver: RuleChainsTableConfigResolver, integrationsTableConfigResolver: IntegrationsTableConfigResolver);
    ngOnInit(): void;
    loadNodes: LoadNodesCallback;
    onNodeSelected: NodeSelectedCallback;
    private updateGroupsView;
    private updateGroupView;
    private updateView;
    private resolveEntityGroupTableConfig;
    private updateViewByEntityType;
    private updateEdgeGroupsView;
    private updateSchedulerView;
    private updateRuleChains;
    private resolveRuleChainsTableConfig;
    private updateIntegrations;
    private resolveIntegrationsTableConfig;
    selectRootNode(): void;
    private entityGroupsToNodes;
    private createEntityGroupNode;
    private edgeEntityGroupsToNodes;
    private createEdgeEntityGroupNode;
    private customersToNodes;
    private createCustomerNode;
    private edgesToNodes;
    private createEdgeNode;
    private loadNodesForCustomer;
    private loadNodesForEdge;
    private createBaseEdgeNode;
    private registerNode;
    private onGroupSelected;
    private onCustomerGroupsSelected;
    private onEdgeGroupsSelected;
    private refreshEntityGroups;
    private refreshCustomerGroups;
    private groupUpdated;
    private groupDeleted;
    private groupAdded;
    private customerAdded;
    private customerUpdated;
    private customersDeleted;
    private openNode;
    private refreshEdgeGroups;
    private edgeAdded;
    private edgeUpdated;
    private edgesDeleted;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomersHierarchyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomersHierarchyComponent, "tb-customers-hierarchy", never, {}, {}, never, never>;
}
