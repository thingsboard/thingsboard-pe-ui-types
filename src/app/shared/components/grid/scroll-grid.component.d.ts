import { AfterViewInit, ChangeDetectorRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { GridEntitiesFetchFunction, ScrollGridColumns, ScrollGridDatasource } from '@shared/components/grid/scroll-grid-datasource';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
export type ItemSizeFunction = (itemWidth: number) => number;
export interface ItemSizeStrategy {
    defaultItemSize: number;
    itemSizeFunction: ItemSizeFunction;
}
export declare class ScrollGridComponent<T, F> implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private breakpointObserver;
    private cd;
    private renderer;
    private zone;
    viewport: CdkVirtualScrollViewport;
    columns: ScrollGridColumns | number;
    fetchFunction: GridEntitiesFetchFunction<T, F>;
    filter: F;
    itemSize: number | ItemSizeStrategy;
    gap: number;
    itemCard: TemplateRef<{
        item: T;
    }>;
    loadingCell: TemplateRef<any>;
    dataLoading: TemplateRef<any>;
    noData: TemplateRef<any>;
    dataSource: ScrollGridDatasource<T, F>;
    calculatedItemSize: number;
    minBuffer: number;
    maxBuffer: number;
    private contentResize$;
    constructor(breakpointObserver: BreakpointObserver, cd: ChangeDetectorRef, renderer: Renderer2, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    isObject(value: any): boolean;
    trackByItemsRow(index: number, itemsRow: T[]): number;
    trackByItem(index: number, item: T): T;
    update(): void;
    updateItem(index: number, item: T): void;
    deleteItem(index: number): void;
    private onContentResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollGridComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollGridComponent<any, any>, "tb-scroll-grid", never, { "columns": "columns"; "fetchFunction": "fetchFunction"; "filter": "filter"; "itemSize": "itemSize"; "gap": "gap"; "itemCard": "itemCard"; "loadingCell": "loadingCell"; "dataLoading": "dataLoading"; "noData": "noData"; }, {}, never, never, false, never>;
}
