import { EntityType } from '@shared/models/entity-type.models';
export declare enum SubscriptionErrorCode {
    LIMIT_REACHED = "LIMIT_REACHED",
    FEATURE_DISABLED = "FEATURE_DISABLED"
}
export declare enum SubscriptionEntry {
    DEVICE_COUNT = "DEVICE_COUNT",
    ASSET_COUNT = "ASSET_COUNT",
    EDGE_COUNT = "EDGE_COUNT",
    WHITE_LABELING = "WHITE_LABELING",
    AGENT_COUNT = "AGENT_COUNT"
}
export interface SubscriptionErrorData {
    subscriptionErrorCode: SubscriptionErrorCode;
    subscriptionEntry: SubscriptionEntry;
    subscriptionValue: any;
    message?: string;
}
export declare const subscriptionEntryToEntityType: Map<SubscriptionEntry, EntityType>;
export declare const subscriptionErrorsMap: Map<SubscriptionErrorCode, Map<SubscriptionEntry, string>>;
export declare enum PlanUiType {
    TbMaker = "TbMaker",
    TbPrototype = "TbPrototype",
    TbPilot = "TbPilot",
    TbStartup = "TbStartup",
    TbBusiness = "TbBusiness",
    TbPerpetual = "TbPerpetual",
    TbNonCommercial = "TbNonCommercial",
    TbCommercialSmall = "TbCommercialSmall",
    TbNonCommercialOffline = "TbNonCommercialOffline",
    TbCommercialSmallOffline = "TbCommercialSmallOffline",
    TbDevelopment = "TbDevelopment",
    TbCommunityGrant = "TbCommunityGrant"
}
export interface SubscriptionInfo {
    subscriptionId: string;
    subscriptionPlanName: string;
    planUiType: PlanUiType;
    perpetual: boolean;
    offline: boolean;
    currentPeriodStartTs?: number;
    currentPeriodEndTs?: number;
    endTs: number;
    upcomingInvoiceDate?: number;
    upcomingInvoiceAmountDue?: number;
    planExtraDeviceEnabled: boolean;
    planEdgeEnabled: boolean;
    planExtraEdgeEnabled: boolean;
    planTrendzEnabled: boolean;
    planExtraAiCreditsEnabled: boolean;
    planExtraInstanceEnabled: boolean;
    planExtraAgentEnabled: boolean;
    dataTs: number;
    licenseServerEndpoint: string;
    maxDevices: number;
    maxAssets: number;
    maxEdges: number;
    maxAgents: number;
    maxInstances: number;
    maxAiCredits: number;
    whiteLabelingEnabled: boolean;
    edgeEnabled: boolean;
    trendzEnabled: boolean;
    development: boolean;
    nonProduction: boolean;
    devicesCount: number;
    assetsCount: number;
    edgesCount: number;
    agentsCount: number;
    instancesCount: number;
    usedAiCredits: number;
    communityGrantLicense: boolean;
}
export declare enum AddonType {
    EDGE = "EDGE",
    TRENDZ = "TRENDZ",
    WHITE_LABELING = "WHITE_LABELING",
    PROFESSIONAL_UPGRADE = "PROFESSIONAL_UPGRADE"
}
export declare const addonTypeTranslationMap: Map<AddonType, string>;
export declare enum UsageItemType {
    DEVICES = "DEVICES",
    ASSETS = "ASSETS",
    PROD_INSTANCES = "PROD_INSTANCES",
    AI_CREDITS = "AI_CREDITS",
    EDGES = "EDGES",
    AGENTS = "AGENTS"
}
export declare const usageItemTypeTranslationMap: Map<UsageItemType, string>;
export declare const usageAddItemTypeTranslationMap: Map<UsageItemType, string>;
export declare const usageItemUpgradePlanTranslationMap: Map<UsageItemType, string>;
export declare const createManageSubscriptionUrl: (subscriptionInfo: SubscriptionInfo, items?: any) => string;
export declare enum PlatformFeature {
    INTEGRATIONS = "INTEGRATIONS",
    SCHEDULER = "SCHEDULER",
    REPORTING = "REPORTING"
}
/**
 * The four features surfaced by the Professional Pack. Kept as its own enum (rather than being conflated
 * with PlatformFeature) so callers that need White-labeling on the same footing as Integrations / Scheduler
 * / Reports have a single ordered catalogue to iterate. The order below is the render order in both the
 * license-management pack grid and the pe-pack-offer-cards component.
 */
export declare enum PePackOffer {
    WHITE_LABELING = "WHITE_LABELING",
    INTEGRATIONS = "INTEGRATIONS",
    SCHEDULER = "SCHEDULER",
    REPORTS = "REPORTS"
}
export interface PePackOfferInfo {
    /** Translation key for the card title. */
    title: string;
    /** Default promo copy — read on read-only surfaces (e.g. the license-management pack grid). */
    promo: string;
    /**
     * Interactive-surface promo copy — used by pe-pack-offer-cards when the card is clickable. Only defined
     * for offers where the two variants read differently (currently just White-labeling, which invites the
     * user to open its page).
     */
    promoTry?: string;
    /** In-app page opened when the card is clicked (relative router URL, no leading slash). */
    page: string;
    /** Inline SVG markup for the card's leading icon. Rendered via [innerHTML] + | safe:'html'. */
    svg: string;
}
/** Ordered catalogue — iterate this to render offers in the same order every consumer expects. */
export declare const pePackOffers: PePackOffer[];
export declare const pePackOfferInfoMap: Map<PePackOffer, PePackOfferInfo>;
export interface PlatformFeatureOfferInfo {
    notInCeGrant: string;
    packOfferTitle: string;
    packOfferLede: string;
    overviewItems: {
        svg: string;
        title: string;
        description: string;
    }[];
}
export declare const platformFeatureOffers: Map<PlatformFeature, PlatformFeatureOfferInfo>;
