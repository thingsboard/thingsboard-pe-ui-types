import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { NavTreeNode } from '@shared/components/nav-tree.component';
import { Datasource } from '@shared/models/widget.models';
import { EntityRelationsQuery } from '@shared/models/relation.models';
export interface EntitiesHierarchyWidgetSettings {
    nodeRelationQueryFunction: string;
    nodeHasChildrenFunction: string;
    nodeOpenedFunction: string;
    nodeDisabledFunction: string;
    nodeIconFunction: string;
    nodeTextFunction: string;
    nodesSortFunction: string;
}
export interface HierarchyNodeContext {
    parentNodeCtx?: HierarchyNodeContext;
    entity: BaseData<EntityId>;
    childrenNodesLoaded?: boolean;
    level?: number;
    data: {
        [key: string]: any;
    };
}
export interface HierarchyNavTreeNode extends NavTreeNode {
    data?: {
        datasource: HierarchyNodeDatasource;
        nodeCtx: HierarchyNodeContext;
        searchText?: string;
    };
}
export interface HierarchyNodeDatasource extends Datasource {
    nodeId: string;
}
export interface HierarchyNodeIconInfo {
    iconUrl?: string;
    materialIcon?: string;
}
export declare type NodeRelationQueryFunction = (nodeCtx: HierarchyNodeContext) => EntityRelationsQuery | 'default';
export declare type NodeTextFunction = (nodeCtx: HierarchyNodeContext) => string;
export declare type NodeDisabledFunction = (nodeCtx: HierarchyNodeContext) => boolean;
export declare type NodeIconFunction = (nodeCtx: HierarchyNodeContext) => HierarchyNodeIconInfo | 'default';
export declare type NodeOpenedFunction = (nodeCtx: HierarchyNodeContext) => boolean;
export declare type NodeHasChildrenFunction = (nodeCtx: HierarchyNodeContext) => boolean;
export declare type NodesSortFunction = (nodeCtx1: HierarchyNodeContext, nodeCtx2: HierarchyNodeContext) => number;
export declare function loadNodeCtxFunction<F extends (...args: any[]) => any>(functionBody: string, argNames: string, ...args: any[]): F;
export declare function materialIconHtml(materialIcon: string): string;
export declare function iconUrlHtml(iconUrl: string): string;
export declare const defaultNodeRelationQueryFunction: NodeRelationQueryFunction;
export declare const defaultNodeIconFunction: NodeIconFunction;
export declare const defaultNodeOpenedFunction: NodeOpenedFunction;
export declare const defaultNodesSortFunction: NodesSortFunction;
