import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { RuleChainId } from '@shared/models/id/rule-chain-id';
import { RuleNodeId } from '@shared/models/id/rule-node-id';
import { RuleNode, RuleNodeComponentDescriptor } from '@shared/models/rule-node.models';
import { ComponentType } from '@shared/models/component-descriptor.models';
import { EntityGroupParams } from '@shared/models/entity-group.models';
export interface RuleChain extends BaseData<RuleChainId>, ExportableEntity<RuleChainId> {
    tenantId: TenantId;
    name: string;
    firstRuleNodeId: RuleNodeId;
    root: boolean;
    debugMode: boolean;
    type: string;
    configuration?: any;
    additionalInfo?: any;
    isDefault?: boolean;
}
export interface RuleChainMetaData {
    ruleChainId: RuleChainId;
    firstNodeIndex?: number;
    nodes: Array<RuleNode>;
    connections: Array<NodeConnectionInfo>;
}
export interface RuleChainImport {
    ruleChain: RuleChain;
    metadata: RuleChainMetaData;
}
export interface NodeConnectionInfo {
    fromIndex: number;
    toIndex: number;
    type: string;
}
export interface RuleChainParams extends EntityGroupParams {
    ruleChainScope: string;
}
export declare const ruleNodeTypeComponentTypes: ComponentType[];
export declare const unknownNodeComponent: RuleNodeComponentDescriptor;
export declare const inputNodeComponent: RuleNodeComponentDescriptor;
export declare enum RuleChainType {
    CORE = "CORE",
    EDGE = "EDGE"
}
