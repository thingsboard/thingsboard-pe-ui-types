import { AfterViewInit, ChangeDetectorRef, NgZone, OnDestroy, PipeTransform } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface LogEntry {
    seq: number;
    kind: 'line' | 'gap';
    text: string;
}
export declare class LogHighlightPipe implements PipeTransform {
    private readonly sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(text: string, needle: string | null | undefined): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogHighlightPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LogHighlightPipe, "tbLogHighlight", false>;
}
export declare class LogViewerComponent implements AfterViewInit, OnDestroy {
    private readonly cdr;
    private readonly zone;
    private readonly translate;
    static readonly MAX_LINES = 2000;
    private static readonly STICK_THRESHOLD_PX;
    viewport: CdkVirtualScrollViewport;
    filenamePrefix?: string;
    lines: LogEntry[];
    paused: boolean;
    pendingCount: number;
    droppedTotal: number;
    followTail: boolean;
    search: string;
    private pendingBuffer;
    private nextSeq;
    private readonly destroy$;
    private scrollAfterRender;
    constructor(cdr: ChangeDetectorRef, zone: NgZone, translate: TranslateService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    appendLines(texts: string[]): void;
    recordDropped(count: number): void;
    appendGap(evictedChunks: number): void;
    clear(): void;
    togglePause(): void;
    toggleFollow(): void;
    jumpToLatest(): void;
    onSearchInput(event: Event): void;
    clearSearch(): void;
    copyAll(): Promise<void>;
    download(): void;
    trackBySeq: (_i: number, entry: LogEntry) => number;
    private newEntry;
    private trim;
    private capPendingBuffer;
    private scheduleStickyScroll;
    private recomputeFollow;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogViewerComponent, "tb-log-viewer", never, { "filenamePrefix": { "alias": "filenamePrefix"; "required": false; }; }, {}, never, never, false, never>;
}
