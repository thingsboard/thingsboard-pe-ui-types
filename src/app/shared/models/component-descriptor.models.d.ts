import { RuleNodeType } from '@shared/models/rule-node.models';
export declare enum ComponentType {
    ENRICHMENT = "ENRICHMENT",
    FILTER = "FILTER",
    TRANSFORMATION = "TRANSFORMATION",
    ACTION = "ACTION",
    EXTERNAL = "EXTERNAL",
    FLOW = "FLOW"
}
export declare enum ComponentScope {
    SYSTEM = "SYSTEM",
    TENANT = "TENANT"
}
export interface ComponentDescriptor {
    type: ComponentType | RuleNodeType;
    scope?: ComponentScope;
    name: string;
    clazz: string;
    configurationDescriptor?: any;
    actions?: string;
}
