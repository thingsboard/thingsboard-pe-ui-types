import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AgentApplication, AgentInfo } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare class AgentDeployStatusComponent {
    private translate;
    agent: AgentInfo;
    application: AgentApplication | null;
    goToAgent: EventEmitter<void>;
    goToAgentApplication: EventEmitter<void>;
    goToAgentEvents: EventEmitter<void>;
    showInstallCommand: boolean;
    constructor(translate: TranslateService);
    get online(): boolean;
    get managingDuration(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentDeployStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentDeployStatusComponent, "tb-agent-deploy-status", never, { "agent": { "alias": "agent"; "required": false; }; "application": { "alias": "application"; "required": false; }; }, { "goToAgent": "goToAgent"; "goToAgentApplication": "goToAgentApplication"; "goToAgentEvents": "goToAgentEvents"; }, never, never, false, never>;
}
