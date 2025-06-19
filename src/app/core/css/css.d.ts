interface CSSRule {
    directive: string;
    value: string;
    defective?: boolean;
    type?: string;
}
interface CSSObject {
    selector: string;
    type?: 'media' | 'keyframes' | 'imports' | 'font-face';
    rules?: CSSRule[];
    subStyles?: CSSObject[];
    styles?: string;
    comments?: string;
}
export default class CSSParser {
    cssPreviewNamespace: string;
    testMode: boolean | ((action: string, css: string) => string);
    cssImportStatements: string[];
    private readonly cssKeyframeRegex;
    private readonly combinedCSSRegex;
    private readonly cssCommentsRegex;
    private readonly cssImportStatementRegex;
    /**
     * Removes CSS comments from the provided CSS string.
     * @param cssString - The CSS string to strip comments from.
     * @returns The CSS string with comments removed.
     */
    stripComments(cssString: string): string;
    /**
     * Parses a CSS string into an array of CSS objects with selectors and rules.
     * @param source - The CSS string to parse.
     * @returns An array of CSS objects.
     */
    parseCSS(source?: string): CSSObject[];
    /**
     * Parses CSS rules into an array of rule objects.
     * @param rules - The CSS rules string.
     * @returns An array of rule objects with directive and value.
     */
    parseRules(rules: string): CSSRule[];
    /**
     * Finds a rule matching the given directive in the rules array.
     * @param rules - The array of CSS rules.
     * @param directive - The directive to search for.
     * @param value - Optional value to match.
     * @returns The matching rule or false if not found.
     */
    findCorrespondingRule(rules: CSSRule[], directive: string, value?: string): CSSRule | false;
    /**
     * Finds CSS objects by selector, optionally merging duplicates.
     * @param cssObjectArray - The array of CSS objects.
     * @param selector - The selector to search for.
     * @param contains - If true, matches selectors containing the string.
     * @returns An array of matching CSS objects.
     */
    findBySelector(cssObjectArray: CSSObject[], selector: string, contains?: boolean): CSSObject[];
    /**
     * Deletes CSS objects with the given selector.
     * @param cssObjectArray - The array of CSS objects.
     * @param selector - The selector to delete.
     * @returns A new array without the matching CSS objects.
     */
    deleteBySelector(cssObjectArray: CSSObject[], selector: string): CSSObject[];
    /**
     * Compresses CSS objects by merging duplicates.
     * @param cssObjectArray - The array of CSS objects to compress.
     * @returns A compressed array of CSS objects.
     */
    compressCSS(cssObjectArray: CSSObject[]): CSSObject[];
    /**
     * Computes the difference between two CSS objects.
     * @param css1 - The first CSS object.
     * @param css2 - The second CSS object.
     * @returns A CSS object with the differences or false if no differences.
     */
    cssDiff(css1: CSSObject, css2: CSSObject): CSSObject | false;
    /**
     * Merges two CSS object arrays intelligently.
     * @param cssObjectArray - The target CSS object array.
     * @param newArray - The source CSS object array to merge.
     * @param reverse - If true, prioritizes styles in newArray.
     */
    intelligentMerge(cssObjectArray: CSSObject[], newArray: CSSObject[], reverse?: boolean): void;
    /**
     * Pushes a CSS object into an array, merging with existing selectors.
     * @param cssObjectArray - The target CSS object array.
     * @param minimalObject - The CSS object to push.
     * @param reverse - If true, traverses array in reverse for priority.
     */
    intelligentCSSPush(cssObjectArray: CSSObject[], minimalObject: CSSObject, reverse?: boolean): void;
    /**
     * Filters out rules marked as DELETED.
     * @param rules - The array of CSS rules.
     * @returns A compacted array of rules.
     */
    compactRules(rules: CSSRule[]): CSSRule[];
    /**
     * Generates a formatted CSS string for an editor.
     * @param cssBase - The CSS object array to format.
     * @param depth - The indentation depth.
     * @returns A formatted CSS string.
     */
    getCSSForEditor(cssBase?: CSSObject[], depth?: number): string;
    /**
     * Retrieves all import statements from a CSS object array.
     * @param cssObjectArray - The CSS object array.
     * @returns An array of import statement strings.
     */
    getImports(cssObjectArray: CSSObject[]): string[];
    /**
     * Formats CSS rules into a string for an editor.
     * @param rules - The array of CSS rules.
     * @param depth - The indentation depth.
     * @returns A formatted CSS rules string.
     */
    getCSSOfRules(rules: CSSRule[], depth: number): string;
    /**
     * Generates indentation spaces based on depth.
     * @param num - The indentation level.
     * @returns A string of spaces.
     */
    getSpaces(num: number): string;
    /**
     * Applies a namespace to CSS selectors to prevent collisions.
     * @param css - The CSS string or object array.
     * @param forcedNamespace - Optional custom namespace.
     * @returns The namespaced CSS object array.
     */
    applyNamespacing(css: string | CSSObject[], forcedNamespace?: string): CSSObject[];
    /**
     * Removes namespacing from CSS selectors.
     * @param css - The CSS string or object array.
     * @param returnObj - If true, returns the CSS object array.
     * @returns The CSS string or object array with namespacing removed.
     */
    clearNamespacing(css: string | CSSObject[], returnObj?: boolean): string | CSSObject[];
    /**
     * Creates a style element with the provided CSS.
     * @param id - The ID for the style element.
     * @param css - The CSS string or object array.
     * @param format - If true, formats the CSS; if 'nonamespace', skips namespacing.
     */
    createStyleElement(id: string, css: string | CSSObject[], format?: boolean | 'nonamespace'): void | string;
}
export {};
