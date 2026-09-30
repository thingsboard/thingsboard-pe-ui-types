import { ItemType } from './iot-hub-item.models';
import { PageLink } from '@shared/models/page/page-link';
export declare const widgetTypeTranslations: Map<string, string>;
export declare const cfTypeTranslations: Map<string, string>;
export declare const cfTypeIcons: Map<string, string>;
export declare enum NodeComponentType {
    ENRICHMENT = "ENRICHMENT",
    FILTER = "FILTER",
    TRANSFORMATION = "TRANSFORMATION",
    ACTION = "ACTION",
    ANALYTICS = "ANALYTICS",
    EXTERNAL = "EXTERNAL",
    FLOW = "FLOW",
    UNKNOWN = "UNKNOWN"
}
export declare const nodeComponentTypeTranslations: Map<NodeComponentType, string>;
export interface NodeInfo {
    name: string;
    type: NodeComponentType;
}
export declare const ruleChainTypeTranslations: Map<string, string>;
export interface MpItemVersionResource {
    id: string;
    type: string;
}
export interface MpItemVersionView {
    id: string;
    createdTime: number;
    version: string;
    publishedTime: number;
    changelog: string;
    dataDescriptor: any;
    image: string;
    icon: string;
    color: string;
    description: string;
    categories: string[];
    useCases: string[];
    itemId: string;
    creatorId: string;
    name: string;
    type: ItemType;
    peOnly: boolean;
    tags: string[];
    creatorDisplayName: string;
    creatorWebsite: string;
    creatorContactEmail: string;
    creatorDescription: string;
    creatorAvatarUrl: string;
    creatorVerified: boolean;
    installCount: number;
    totalInstallCount: number;
    /**
     * Server-owned, read-only marker for content that already ships inside ThingsBoard
     * (a bundled widget, a SCADA symbol) instead of being installed by the IoT Hub.
     * Optional on purpose: older Hub deployments simply omit the field, so it must never
     * be read directly — use `isBuiltInItem()` from `@home/components/iot-hub/iot-hub-utils`.
     * Never send it back to the server.
     */
    builtIn?: boolean;
    resources: MpItemVersionResource[];
    relatedItems?: string[];
    checksum?: string;
}
export interface ListingItemVersionNotFound {
    noMatchingVersions?: boolean;
    peRequired?: boolean;
    minTbVersionRequired?: number;
}
export interface MpItemVersionQueryOptions {
    type?: string;
    ceOnly?: boolean;
    creatorId?: string;
    categories?: string[];
    useCases?: string[];
    cfTypes?: string[];
    widgetTypes?: string[];
    ruleChainTypes?: string[];
    tbVersion?: number;
    hardwareTypes?: string[];
    connectivity?: string[];
    vendors?: string[];
    scadaFirst?: boolean;
}
export declare class MpItemVersionQuery {
    pageLink: PageLink;
    options: MpItemVersionQueryOptions;
    constructor(pageLink: PageLink, options?: MpItemVersionQueryOptions);
    toQuery(): string;
}
