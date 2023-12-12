import { DataSource } from '@angular/cdk/collections';
import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { BreakpointObserver } from '@angular/cdk/layout';
export type GridEntitiesFetchFunction<T, F> = (pageSize: number, page: number, filter: F) => Observable<PageData<T>>;
export type GridCellType = 'emptyCell' | 'loadingCell';
export interface ScrollGridColumns {
    columns: number;
    breakpoints?: {
        [breakpoint: string]: number;
    };
}
export declare class ScrollGridDatasource<T, F> extends DataSource<(T | GridCellType)[]> {
    private breakpointObserver;
    private columns;
    private fetchFunction;
    private filter;
    initialDataLoading: boolean;
    private _data;
    private _rows;
    private _hasNext;
    private _columns;
    private _viewport;
    private _pendingRange;
    private _fetchingData;
    private _fetchSubscription;
    private _totalElements;
    private _dataStream;
    private _subscription;
    constructor(breakpointObserver: BreakpointObserver, columns: ScrollGridColumns | number, fetchFunction: GridEntitiesFetchFunction<T, F>, filter: F);
    connect(collectionViewer: CdkVirtualForOf<(T | GridCellType)[]>): Observable<(T | GridCellType)[][]>;
    disconnect(): void;
    get isEmpty(): boolean;
    get active(): boolean;
    get currentColumns(): number;
    updateFilter(filter: F): void;
    update(): void;
    updateItem(index: number, item: T): void;
    deleteItem(index: number): void;
    private _detectColumns;
    private _init;
    private _reset;
    private _columnsChanged;
    private _fetchDataFromRange;
    private _fetchData;
    private _dataUpdated;
    private _fillGridCells;
}
