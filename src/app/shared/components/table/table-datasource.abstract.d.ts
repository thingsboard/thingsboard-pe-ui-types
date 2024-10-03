import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
export declare abstract class TbTableDatasource<T> implements DataSource<T> {
    protected dataSubject: BehaviorSubject<T[]>;
    connect(): Observable<Array<T>>;
    disconnect(): void;
    loadData(data: Array<T>): void;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
