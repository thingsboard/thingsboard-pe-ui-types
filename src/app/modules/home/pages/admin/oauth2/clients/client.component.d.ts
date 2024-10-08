import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { EntityComponent } from '@home/components/entity/entity.component';
import { MapperType, OAuth2Client, OAuth2ClientInfo, PlatformType } from '@shared/models/oauth2.models';
import { AppState } from '@core/core.state';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { OAuth2Service } from '@core/http/oauth2.service';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class ClientComponent extends EntityComponent<OAuth2Client, PageLink, OAuth2ClientInfo> implements OnDestroy {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    private oauth2Service;
    protected entityValue: OAuth2Client;
    protected entitiesTableConfigValue: EntityTableConfig<OAuth2Client, PageLink, OAuth2ClientInfo>;
    protected cd: ChangeDetectorRef;
    fb: UntypedFormBuilder;
    readonly createNewDialog = false;
    templateProvider: string[];
    private templates;
    private defaultProvider;
    private URL_REGEXP;
    private subscriptions;
    readonly separatorKeysCodes: number[];
    clientAuthenticationMethods: string[];
    mapperType: typeof MapperType;
    mapperTypes: string[];
    tenantNameStrategies: string[];
    platformTypes: PlatformType[];
    platformTypeTranslations: Map<PlatformType, string>;
    generalSettingsMode: boolean;
    advancedExpanded: boolean;
    constructor(store: Store<AppState>, translate: TranslateService, oauth2Service: OAuth2Service, entityValue: OAuth2Client, entitiesTableConfigValue: EntityTableConfig<OAuth2Client, PageLink, OAuth2ClientInfo>, cd: ChangeDetectorRef, fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    buildForm(entity: OAuth2Client): UntypedFormGroup;
    updateForm(entity: OAuth2Client): void;
    getProviderName(): string;
    isCustomProvider(): boolean;
    private initTemplates;
    private changeMapperConfigType;
    private formCustomGroup;
    private formBasicGroup;
    private setProviderDefaultValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientComponent, [null, null, null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClientComponent, "tb-client", never, { "createNewDialog": { "alias": "createNewDialog"; "required": false; }; }, {}, never, never, false, never>;
}
