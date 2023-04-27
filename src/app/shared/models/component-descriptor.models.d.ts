import { RuleNodeType } from '@shared/models/rule-node.models';
export declare enum ComponentType {
    ENRICHMENT = "ENRICHMENT",
    FILTER = "FILTER",
    TRANSFORMATION = "TRANSFORMATION",
    ACTION = "ACTION",
    ANALYTICS = "ANALYTICS",
    EXTERNAL = "EXTERNAL",
    FLOW = "FLOW"
}
export declare enum ComponentScope {
    SYSTEM = "SYSTEM",
    TENANT = "TENANT"
}
export declare enum ComponentClusteringMode {
    USER_PREFERENCE = "USER_PREFERENCE",
    ENABLED = "ENABLED",
    SINGLETON = "SINGLETON"
}
export interface ComponentDescriptor {
    type: ComponentType | RuleNodeType;
    scope?: ComponentScope;
    clusteringMode: ComponentClusteringMode;
    name: string;
    clazz: string;
    configurationDescriptor?: any;
    actions?: string;
}
