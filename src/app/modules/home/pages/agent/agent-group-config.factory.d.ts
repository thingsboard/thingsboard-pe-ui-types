import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { EntityGroupStateConfigFactory, EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { EntityGroupParams } from '@shared/models/entity-group.models';
import { GroupConfigTableConfigService } from '@home/components/group/group-config-table-config.service';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { AgentService } from '@core/http/agent.service';
import { AgentInfo } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare class AgentGroupConfigFactory implements EntityGroupStateConfigFactory<AgentInfo> {
    private groupConfigTableConfigService;
    private translate;
    private homeDialogs;
    private agentService;
    private router;
    constructor(groupConfigTableConfigService: GroupConfigTableConfigService<AgentInfo>, translate: TranslateService, homeDialogs: HomeDialogsService, agentService: AgentService, router: Router);
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<AgentInfo>): Observable<GroupEntityTableConfig<AgentInfo>>;
    private openAgent;
    private manageOwnerAndGroups;
    private onAgentAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentGroupConfigFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentGroupConfigFactory>;
}
