import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { OAuth2Client, OAuth2ClientInfo } from '@shared/models/oauth2.models';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class ClientTableHeaderComponent extends EntityTableHeaderComponent<OAuth2Client, PageLink, OAuth2ClientInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClientTableHeaderComponent, "tb-client-table-header", never, {}, {}, never, never, false, never>;
}
