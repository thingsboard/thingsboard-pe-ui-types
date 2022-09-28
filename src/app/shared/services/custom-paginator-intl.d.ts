import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class CustomPaginatorIntl implements MatPaginatorIntl {
    private translate;
    constructor(translate: TranslateService);
    changes: Subject<void>;
    firstPageLabel: any;
    itemsPerPageLabel: any;
    lastPageLabel: any;
    nextPageLabel: any;
    previousPageLabel: any;
    separator: any;
    getRangeLabel(page: number, pageSize: number, length: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPaginatorIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomPaginatorIntl>;
}
