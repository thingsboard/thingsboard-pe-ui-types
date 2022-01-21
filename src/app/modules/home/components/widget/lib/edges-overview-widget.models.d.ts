import { NavTreeNode } from '@shared/components/nav-tree.component';
import { Datasource } from '@shared/models/widget.models';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { BaseData, HasId } from '@shared/models/base-data';
export interface EntityNodeDatasource extends Datasource {
    nodeId: string;
}
export declare function edgeGroupsNodeText(translate: TranslateService, entityType: EntityType): string;
export declare function entityNodeText(entity: any): string;
export declare function materialIconByEntityType(entityType: EntityType): string;
export declare function textForEdgeGroupsType(translate: TranslateService, entityType: EntityType): string;
export declare const edgeGroupsTypes: EntityType[];
export interface EdgeOverviewNode extends NavTreeNode {
    data?: EdgeOverviewNodeData;
}
export declare type EdgeOverviewNodeData = EdgeGroupNodeData | EntityNodeData;
export interface EdgeGroupNodeData extends BaseEdgeOverviewNodeData {
    entityType: EntityType;
    entity: BaseData<HasId>;
}
export interface EntityNodeData extends BaseEdgeOverviewNodeData {
    entity: BaseData<HasId>;
}
export interface BaseEdgeOverviewNodeData {
    internalId: string;
}
