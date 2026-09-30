export declare const ITEM_LINK_PLACEHOLDER_REGEX: RegExp;
export declare function itemLinkCardTag(itemId: string): string;
export declare function replaceItemLinkPlaceholders(markdown: string): string;
export interface DocLinks {
    productURL?: string;
    datasheetURL?: string;
}
export interface DocLinkLabels {
    productPage: string;
    datasheet: string;
}
export declare function resolveDocLinkPlaceholders(markdown: string, name: string, links: DocLinks, labels: DocLinkLabels): string;
export declare function escapeHtml(value: string): string;
export declare function escapeHtmlAttr(value: string): string;
export declare function sanitizeInlineHtml(value: string): string;
