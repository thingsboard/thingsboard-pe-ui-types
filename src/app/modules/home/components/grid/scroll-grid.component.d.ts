import { AfterViewInit, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { GridEntitiesFetchFunction, ScrollGridColumns, ScrollGridDatasource } from '@home/models/datasource/scroll-grid-datasource';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
export declare class ScrollGridComponent<T, F> implements OnInit, AfterViewInit, OnChanges {
    private breakpointObserver;
    private renderer;
    viewport: CdkVirtualScrollViewport;
    columns: ScrollGridColumns | number;
    fetchFunction: GridEntitiesFetchFunction<T, F>;
    filter: F;
    itemSize: number;
    gap: number;
    itemCard: TemplateRef<{
        item: T;
    }>;
    loadingCell: TemplateRef<any>;
    dataLoading: TemplateRef<any>;
    noData: TemplateRef<any>;
    dataSource: ScrollGridDatasource<T, F>;
    constructor(breakpointObserver: BreakpointObserver, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    isObject(value: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollGridComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollGridComponent<any, any>, "tb-scroll-grid", never, { "columns": "columns"; "fetchFunction": "fetchFunction"; "filter": "filter"; "itemSize": "itemSize"; "gap": "gap"; "itemCard": "itemCard"; "loadingCell": "loadingCell"; "dataLoading": "dataLoading"; "noData": "noData"; }, {}, never, never, false, never>;
}
