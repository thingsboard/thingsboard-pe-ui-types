import { Ace } from 'ace-builds';
import { Observable } from 'rxjs/internal/Observable';
export declare function getAce(): Observable<any>;
export declare function getAceDiff(): Observable<any>;
export declare class Range implements Ace.Range {
    start: Ace.Point;
    end: Ace.Point;
    constructor(startRow: number, startColumn: number, endRow: number, endColumn: number);
    static fromPoints(start: Ace.Point, end: Ace.Point): Ace.Range;
    clipRows(firstRow: number, lastRow: number): Ace.Range;
    clone(): Ace.Range;
    collapseRows(): Ace.Range;
    compare(row: number, column: number): number;
    compareEnd(row: number, column: number): number;
    compareInside(row: number, column: number): number;
    comparePoint(p: Ace.Point): number;
    compareRange(range: Ace.Range): number;
    compareStart(row: number, column: number): number;
    contains(row: number, column: number): boolean;
    containsRange(range: Ace.Range): boolean;
    extend(row: number, column: number): Ace.Range;
    inside(row: number, column: number): boolean;
    insideEnd(row: number, column: number): boolean;
    insideStart(row: number, column: number): boolean;
    intersects(range: Ace.Range): boolean;
    isEmpty(): boolean;
    isEnd(row: number, column: number): boolean;
    isEqual(range: Ace.Range): boolean;
    isMultiLine(): boolean;
    isStart(row: number, column: number): boolean;
    moveBy(row: number, column: number): void;
    setEnd(row: number, column: number): void;
    setStart(row: number, column: number): void;
    toScreenRange(session: Ace.EditSession): Ace.Range;
}
export interface AceHighlightRules {
    [group: string]: Array<AceHighlightRule>;
}
export interface AceHighlightRule {
    regex: RegExp | string;
    token: string;
    next?: string;
}
export declare const dotOperatorHighlightRule: AceHighlightRule;
export declare const endGroupHighlightRule: AceHighlightRule;
