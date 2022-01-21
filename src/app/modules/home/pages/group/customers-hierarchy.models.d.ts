import { Customer } from '@shared/models/customer.model';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { NavTreeNode } from '@shared/components/nav-tree.component';
import { Edge } from '@shared/models/edge.models';
export declare type CustomersHierarchyViewMode = 'groups' | 'group' | 'scheduler';
export declare type CustomersHierarchyNodeType = 'group' | 'groups' | 'customer' | 'edge' | 'edgeGroups' | 'edgeGroup';
export interface BaseCustomersHierarchyNodeData {
    type: CustomersHierarchyNodeType;
    parentEntityGroupId: string;
    internalId: string;
}
export interface EntityGroupNodeData extends BaseCustomersHierarchyNodeData {
    type: 'group';
    entity: EntityGroupInfo;
}
export interface EntityGroupsNodeData extends BaseCustomersHierarchyNodeData {
    type: 'groups';
    groupsType: EntityType;
    customer: Customer;
}
export interface CustomerNodeData extends BaseCustomersHierarchyNodeData {
    type: 'customer';
    entity: Customer;
}
export interface EdgeNodeCustomerData {
    customerGroupId?: string;
    customerId?: string;
}
interface BaseEdgeNodeData {
    edge: Edge;
    edgeId?: Edge;
    customerData?: EdgeNodeCustomerData;
}
export interface EdgeNodeData extends BaseCustomersHierarchyNodeData, BaseEdgeNodeData {
    type: 'edge';
}
export interface EdgeEntityGroupsNodeData extends BaseCustomersHierarchyNodeData, BaseEdgeNodeData {
    type: 'edgeGroups';
    groupsType: EntityType;
}
export interface EdgeEntityGroupNodeData extends BaseCustomersHierarchyNodeData, BaseEdgeNodeData {
    type: 'edgeGroup';
    entityGroup: EntityGroupInfo;
}
export declare type CustomersHierarchyNodeData = EntityGroupNodeData | EntityGroupsNodeData | CustomerNodeData | EdgeNodeData | EdgeEntityGroupsNodeData | EdgeEntityGroupNodeData;
export interface CustomersHierarchyNode extends NavTreeNode {
    data?: CustomersHierarchyNodeData;
}
export declare function entityGroupNodeText(entityGroup: EntityGroupInfo): string;
export declare function customerNodeText(customer: Customer): string;
export declare function edgeNodeText(edge: Edge): string;
export declare function entityGroupsNodeText(translate: TranslateService, groupType: EntityType): string;
export declare function entitiesNodeText(translate: TranslateService, entityType: EntityType, name: string): string;
export {};
