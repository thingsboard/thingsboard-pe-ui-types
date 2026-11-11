import { Direction } from '@shared/models/page/sort-order';
export declare enum ItemType {
    WIDGET = "WIDGET",
    SOLUTION_TEMPLATE = "SOLUTION_TEMPLATE",
    CALCULATED_FIELD = "CALCULATED_FIELD",
    ALARM_RULE = "ALARM_RULE",
    RULE_CHAIN = "RULE_CHAIN",
    DEVICE = "DEVICE"
}
export declare const itemTypeTranslations: Map<ItemType, string>;
export declare const itemTypeIcons: Record<string, string>;
export declare const getItemTypeIcon: (type?: string | null) => string;
/** Colour for a type with no colour of its own. */
export declare const DEFAULT_ITEM_TYPE_COLOR = "#5f6368";
/** Colour per item type, wherever an item's type is marked with one. */
export declare const itemTypeColors: Record<string, string>;
export declare const getItemTypeColor: (type?: string | null) => string;
/**
 * Item types discoverable to creators in the marketplace UI.
 */
export declare const CREATOR_VISIBLE_ITEM_TYPES: ItemType[];
/** Item types a cross-type surface (search page, popup) shows, in display order. */
export declare const CROSS_TYPE_ITEM_TYPES: ItemType[];
/** Types drawn as a coloured icon tile rather than a screenshot. */
export declare const isCompactItemType: (type?: string | null) => boolean;
/** Sort property served by relevance ranking. */
export declare const RELEVANCE_SORT_PROPERTY = "relevance";
export interface SortOption {
    value: string;
    label: string;
    direction: Direction;
}
/**
 * The sort menu of every IoT Hub surface with a search field; the first entry is the default.
 * Relevance stays the default with an empty field, where it orders by install count.
 */
export declare const IOT_HUB_SORT_OPTIONS: SortOption[];
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
