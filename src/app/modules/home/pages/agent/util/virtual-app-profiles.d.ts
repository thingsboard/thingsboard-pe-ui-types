import { TranslateService } from '@ngx-translate/core';
import { AgentAppProfile, AgentApplicationType, AgentAppTemplate, VirtualAgentAppProfile } from '@shared/models/agent.models';
export declare const VIRTUAL_APP_TYPES: AgentApplicationType[];
export declare function virtualProfileName(template: AgentAppTemplate): string;
export declare function appProfileTemplateLabel(profile: AgentAppProfile, translate: TranslateService): string;
export declare function appProfileSearchMatches(profile: AgentAppProfile, searchText: string): boolean;
export declare function buildVirtualAppProfiles(templates: AgentAppTemplate[], existingProfiles: AgentAppProfile[]): VirtualAgentAppProfile[];
export declare function appProfileTrackKey(profile: AgentAppProfile): string;
