import { NavTreeNode } from '@shared/components/nav-tree.component';
import { Datasource } from '@shared/models/widget.models';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { BaseData, HasId } from '@shared/models/base-data';
export interface EntityNodeDatasource extends Datasource {
    nodeId: string;
}
export interface EdgeOverviewNode extends NavTreeNode {
    data?: BaseEdgeNodeData;
}
export interface BaseEdgeNodeData {
    type: EdgeNodeType;
    group: BaseData<HasId>;
    groupType: EntityType;
}
export type EdgeNodeType = 'group' | 'groups';
export interface EntityGroupNodeData extends BaseEdgeNodeData {
    type: 'group';
}
export interface EntityGroupsNodeData extends BaseEdgeNodeData {
    type: 'groups';
    edge?: BaseData<HasId>;
}
export declare function edgeGroupsNodeText(translate: TranslateService, entityType: EntityType): string;
export declare function entityGroupNodeText(entity: any): string;
export declare function entityNodeText(entity: any): string;
export declare function materialIconByEntityType(entityType: EntityType): string;
export declare function textForEntityGroupsType(translate: TranslateService, entityType: EntityType): string;
