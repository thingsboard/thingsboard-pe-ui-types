import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { OAuth2Client, OAuth2ClientInfo } from '@shared/models/oauth2.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { OAuth2Service } from '@core/http/oauth2.service';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class ClientsTableConfigResolver {
    private translate;
    private datePipe;
    private oauth2Service;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, oauth2Service: OAuth2Service);
    resolve(): EntityTableConfig<OAuth2Client, PageLink, OAuth2ClientInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClientsTableConfigResolver>;
}
