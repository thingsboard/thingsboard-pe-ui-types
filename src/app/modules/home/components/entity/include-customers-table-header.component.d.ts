import { OnInit } from '@angular/core';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { BaseData, HasId } from '@shared/models/base-data';
import { PageLink } from '@shared/models/page/page-link';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare abstract class IncludeCustomersTableHeaderComponent<T extends BaseData<HasId>, P extends PageLink = PageLink, L extends BaseData<HasId> = T, C extends EntityTableConfig<T, P, L> = EntityTableConfig<T, P, L>> extends EntityTableHeaderComponent<T, P, L, C> implements OnInit {
    includeCustomersLabel: string;
    ngOnInit(): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IncludeCustomersTableHeaderComponent<any, any, any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IncludeCustomersTableHeaderComponent<any, any, any, any>, never, never, {}, {}, never, never, true, never>;
}
