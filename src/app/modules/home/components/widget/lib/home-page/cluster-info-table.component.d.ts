import { AfterViewInit, NgZone, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { MatSort } from '@angular/material/sort';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface SystemInfoData {
    serviceId: string;
    serviceType: string;
    cpuUsage: number;
    cpuCount: number;
    memoryUsage: number;
    totalMemory: number;
    discUsage: number;
    totalDiscSpace: number;
}
export declare class ClusterInfoTableComponent extends PageComponent implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    private telemetryWsService;
    private translate;
    private zone;
    sort: MatSort;
    displayedColumns: string[];
    dataSource: SystemInfoDataSource;
    pageLink: PageLink;
    constructor(store: Store<AppState>, telemetryWsService: TelemetryWebsocketService, translate: TranslateService, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateData(): void;
    statusClass(value: number): string;
    infoTooltip(serviceData: SystemInfoData, type: 'cpu' | 'ram' | 'disc'): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClusterInfoTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClusterInfoTableComponent, "tb-cluster-info-table", never, {}, {}, never, never, false, never>;
}
export declare class SystemInfoDataSource implements DataSource<SystemInfoData> {
    private telemetryWsService;
    private zone;
    private systemDataSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<SystemInfoData>>;
    private allSystemData;
    private telemetrySubscriber;
    constructor(telemetryWsService: TelemetryWebsocketService, zone: NgZone);
    connect(collectionViewer: CollectionViewer): Observable<SystemInfoData[] | ReadonlyArray<SystemInfoData>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadData(pageLink: PageLink): void;
    getAllSystemData(): Observable<Array<SystemInfoData>>;
    private toSystemInfoData;
    protected onSystemData(data: SystemInfoData[]): void;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
