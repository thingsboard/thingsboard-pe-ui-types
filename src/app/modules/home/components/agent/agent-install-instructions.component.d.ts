import { OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { Agent } from '@shared/models/agent.models';
import { AgentService } from '@core/http/agent.service';
import * as i0 from "@angular/core";
export declare class AgentInstallInstructionsComponent implements OnChanges {
    private store;
    private translate;
    private agentService;
    agent: Agent;
    edge: boolean;
    instructions?: string;
    dockerCommand: string;
    constructor(store: Store<AppState>, translate: TranslateService, agentService: AgentService);
    ngOnChanges(changes: SimpleChanges): void;
    private loadInstructions;
    onCopied(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentInstallInstructionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentInstallInstructionsComponent, "tb-agent-install-instructions", never, { "agent": { "alias": "agent"; "required": false; }; "edge": { "alias": "edge"; "required": false; }; "instructions": { "alias": "instructions"; "required": false; }; }, {}, never, never, false, never>;
}
