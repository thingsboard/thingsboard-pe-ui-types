interface CSSRule {
    directive: string;
    value: string;
    defective?: boolean;
    type?: string;
    nested?: CSSRule[];
}
interface CSSObject {
    selector: string;
    type?: 'media' | 'keyframes' | 'imports' | 'font-face' | 'at-rule';
    rules?: CSSRule[];
    subStyles?: CSSObject[];
    styles?: string;
}
export default class CSSParser {
    cssPreviewNamespace: string;
    testMode: boolean | ((action: string, css: string) => string);
    cssImportStatements: string[];
    private readonly groupingAtRuleRegex;
    private readonly keyframesRegex;
    private readonly scopeRegex;
    private readonly importStatementRegex;
    private readonly hoistedStatementRegex;
    /**
     * Removes CSS comments from the provided CSS string, leaving comment-like text inside strings intact.
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
     * Splits comment-free CSS into top-level blocks by matching braces, skipping strings and escapes.
     * @param source - The CSS string to split.
     * @returns Top-level blocks with prelude and body, and the text between them split on top-level semicolons.
     */
    private splitBlocks;
    /**
     * Parses the body of a style rule: declarations plus nested rules (CSS Nesting), kept in source order.
     * @param body - The style rule body.
     * @returns An array of rule objects; nested rules carry their prelude as directive.
     */
    private parseStyleBody;
    /**
     * Splits a selector list on top-level commas, keeping commas inside :is()/:has()/[attr] intact.
     * @param selector - The selector list.
     * @returns The complex selectors of the list.
     */
    private splitSelectorList;
    private namespaceSelectorList;
    /**
     * Namespaces the scope root of an @scope prelude. Rules inside @scope are relative to the root,
     * so namespacing them would require the namespace element to be inside the root.
     * @param prelude - The @scope prelude, e.g. `@scope (.card) to (.content)`.
     * @param namespaceClass - The namespace selector.
     * @returns The prelude with the namespaced root; a missing root becomes the namespace itself.
     */
    private namespaceScope;
    /**
     * Parses CSS rules into an array of rule objects.
     * @param rules - The CSS rules string.
     * @returns An array of rule objects with directive and value.
     */
    parseRules(rules: string): CSSRule[];
    /**
     * Splits declarations on semicolons outside strings and parentheses (e.g. `url(data:...;base64,...)`).
     * @param rules - The declarations string.
     * @returns The individual declarations.
     */
    private splitDeclarations;
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
    private isVerbatim;
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
