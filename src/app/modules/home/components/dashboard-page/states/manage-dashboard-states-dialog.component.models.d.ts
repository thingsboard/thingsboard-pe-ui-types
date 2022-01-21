import { DashboardState } from '@shared/models/dashboard.models';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
export interface DashboardStateInfo extends DashboardState {
    id: string;
}
export declare class DashboardStatesDatasource implements DataSource<DashboardStateInfo> {
    private states;
    private statesSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<DashboardStateInfo>>;
    private allStates;
    constructor(states: {
        [id: string]: DashboardState;
    });
    connect(collectionViewer: CollectionViewer): Observable<DashboardStateInfo[] | ReadonlyArray<DashboardStateInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadStates(pageLink: PageLink, reload?: boolean): Observable<PageData<DashboardStateInfo>>;
    fetchStates(pageLink: PageLink): Observable<PageData<DashboardStateInfo>>;
    getAllStates(): Observable<Array<DashboardStateInfo>>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
