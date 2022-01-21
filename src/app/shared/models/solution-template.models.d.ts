import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { DashboardId } from '@shared/models/id/dashboard-id';
export declare enum SolutionTemplateLevel {
    MAKER = "MAKER",
    PROTOTYPE = "PROTOTYPE",
    STARTUP = "STARTUP"
}
export declare const solutionTemplateLevelToPlanNameMap: Map<SolutionTemplateLevel, string>;
export interface SolutionTemplate {
    id: string;
    title: string;
    level: SolutionTemplateLevel;
    installTimeoutMs: number;
}
export interface SolutionTemplateInfo extends SolutionTemplate {
    previewImageUrl: string;
    shortDescription: string;
}
export interface TenantSolutionTemplateInfo extends SolutionTemplateInfo {
    installed: boolean;
}
export interface SolutionTemplateDetails extends SolutionTemplate {
    imageUrls: string[];
    highlights: string;
    description: string;
}
export interface TenantSolutionTemplateDetails extends SolutionTemplateDetails {
    installed: boolean;
}
export interface TenantSolutionTemplateInstructions {
    dashboardGroupId: EntityGroupId;
    dashboardId: DashboardId;
    details: string;
}
export interface SolutionInstallResponse extends TenantSolutionTemplateInstructions {
    success: boolean;
}
