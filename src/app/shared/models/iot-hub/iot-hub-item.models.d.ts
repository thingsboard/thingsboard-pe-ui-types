export declare enum ItemType {
    WIDGET = "WIDGET",
    DASHBOARD = "DASHBOARD",
    SOLUTION_TEMPLATE = "SOLUTION_TEMPLATE",
    CALCULATED_FIELD = "CALCULATED_FIELD",
    ALARM_RULE = "ALARM_RULE",
    RULE_CHAIN = "RULE_CHAIN",
    DEVICE = "DEVICE"
}
export declare const itemTypeTranslations: Map<ItemType, string>;
export declare const itemTypeIcons: Record<string, string>;
export declare const getItemTypeIcon: (type?: string | null) => string;
/**
 * Item types discoverable to creators in the marketplace UI.
 * DASHBOARD is intentionally absent (IoT Hub no longer accepts Dashboard contributions).
 * Defensive code paths (item card, detail dialog descriptor switch, installed-items table,
 * install handler, /iot-hub/dashboards route) remain functional for already-installed items.
 */
export declare const CREATOR_VISIBLE_ITEM_TYPES: ItemType[];
export interface FilterParamInfo {
    key: string;
    totalItems: number;
    totalInstallCount: number;
}
export interface ItemTypeFilterInfo {
    types: FilterParamInfo[];
    categories: FilterParamInfo[];
    useCases: FilterParamInfo[];
    vendors: FilterParamInfo[];
    hardwareTypes: FilterParamInfo[];
    connectivities: Record<string, FilterParamInfo[]>;
}
export interface WidgetCategory {
    name: string;
    image: string;
}
