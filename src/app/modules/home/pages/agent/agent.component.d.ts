import { ChangeDetectorRef, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { AgentInfo } from '@shared/models/agent.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { AgentService } from '@core/http/agent.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AgentComponent extends GroupEntityComponent<AgentInfo> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    private agentService;
    private router;
    protected entityValue: AgentInfo;
    protected entitiesTableConfigValue: EntityTableConfig<AgentInfo> | GroupEntityTableConfig<AgentInfo>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    protected userPermissionsService: UserPermissionsService;
    private telemetryWsService;
    private zone;
    private dialog;
    entityType: typeof EntityType;
    agentScope: 'tenant' | 'customer' | 'customer_user';
    agentOnline: boolean;
    upgradeAvailable: boolean;
    upgradeTargetImageRef: string;
    headerExtensionTemplate: TemplateRef<unknown>;
    private activeSub;
    private subscribedAgentId;
    constructor(store: Store<AppState>, translate: TranslateService, agentService: AgentService, router: Router, entityValue: AgentInfo, entitiesTableConfigValue: EntityTableConfig<AgentInfo> | GroupEntityTableConfig<AgentInfo>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, userPermissionsService: UserPermissionsService, telemetryWsService: TelemetryWebsocketService, zone: NgZone, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
    hideDelete(): boolean;
    isAssignedToCustomer(entity: AgentInfo): boolean;
    buildForm(entity: AgentInfo): UntypedFormGroup;
    updateForm(entity: AgentInfo): void;
    updateFormState(): void;
    onManageApplications($event: Event): void;
    /**
     * The decision is server-side: it needs the version graph the update server publishes, and the agent
     * reports an image reference rather than a version, so a floating tag such as 'latest' is
     * deliberately answered 'no upgrade' instead of a guess. It arrives on the entity itself, so every
     * agent view answers this from the same resolved value.
     */
    private refreshUpgradeAvailable;
    /**
     * After an upgrade the entity in hand still carries the pre-upgrade target, so the resolved value is
     * re-read rather than recomputed here — the agent reports its new version asynchronously, so this is
     * best-effort and simply reflects whatever the server resolves at that moment.
     */
    private reloadUpgradeTarget;
    onUpgradeAgent($event: Event): void;
    onAgentInfoCopied(type: string): void;
    private generateRoutingKeyAndSecret;
    private maybeSubscribeAgentActive;
    private tearDownActiveSub;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentComponent, "tb-agent", never, {}, {}, never, never, false, never>;
}
