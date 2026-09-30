import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AgentAppEventInfo } from '@shared/models/agent.models';
import { PageLink } from '@shared/models/page/page-link';
export declare const RECENT_AGENT_ERRORS_LIMIT = 5;
export declare function recentAgentErrorsPageLink(): PageLink;
export declare function buildAgentErrorEventsTooltip(events: AgentAppEventInfo[], translate: TranslateService, datePipe: DatePipe): string;
