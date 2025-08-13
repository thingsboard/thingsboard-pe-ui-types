import { BaseData } from '@shared/models/base-data';
import { JobId } from '@shared/models/id/job-id';
import { TimePageLink } from '@shared/models/page/page-link';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityInfoData } from '@shared/models/entity.models';
import { CalculatedFieldId } from '@shared/models/id/calculated-field-id';
import { Report } from '@shared/models/report.models';
export declare enum JobType {
    CF_REPROCESSING = "CF_REPROCESSING",
    REPORT = "REPORT"
}
export declare const jobTypeTranslations: Map<JobType, string>;
export declare enum JobStatus {
    COMPLETED = "COMPLETED",
    RUNNING = "RUNNING",
    QUEUED = "QUEUED",
    PENDING = "PENDING",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED"
}
export declare const jobStatusTranslations: Map<JobStatus, string>;
export declare const workingTask: JobStatus[];
export interface BasicTaskResult {
    key: string;
    success: boolean;
    discarded: boolean;
    jobType: JobType;
}
export interface BasicTaskFailure {
    error: string;
}
export interface CfReprocessingTaskFailure extends BasicTaskFailure {
    entityInfo?: EntityInfoData;
}
export interface CfReprocessingTaskResult extends BasicTaskResult {
    failure: CfReprocessingTaskFailure;
}
export type TaskResult = CfReprocessingTaskResult & BasicTaskFailure;
export interface BasicJobConfiguration {
    tasksKey: string;
    toReprocess: TaskResult[];
    type: JobType;
}
export interface CfReprocessingJobConfiguration extends BasicJobConfiguration {
    calculatedFieldId: CalculatedFieldId;
    startTs: number;
    endTs: number;
}
export type JobConfiguration = CfReprocessingJobConfiguration;
export interface BasicJobResult {
    successfulCount: number;
    failedCount: number;
    discardedCount: number;
    totalCount?: number;
    jobType?: JobType;
    results: TaskResult[];
    generalError?: string;
    startTs?: number;
    finishTs?: number;
    cancellationTs?: number;
}
export interface ReportJobResult {
    report: Report;
}
export type JobResult = BasicJobResult & ReportJobResult;
export interface Job extends Omit<BaseData<JobId>, 'label' | 'ownerId' | 'customerId' | 'name'> {
    type: JobType;
    key: string;
    status: JobStatus;
    configuration: JobConfiguration;
    result: JobResult;
    entityName: string;
    entityId: EntityId;
}
export interface JobFilter {
    startTs?: number;
    endTs?: number;
    timeWindow?: number;
    types?: Array<JobType>;
    statuses?: Array<JobStatus>;
    entities?: Array<EntityId>;
}
export interface TaskManagerConfig extends EntityTableConfig<Job, TimePageLink> {
    componentData?: {
        filter?: JobFilter;
    };
}
export declare class JobQuery {
    pageLink: TimePageLink;
    types: JobType[];
    statuses: JobStatus[];
    entities: EntityId[];
    constructor(pageLink: TimePageLink, jobFilter: JobFilter);
    toQuery(): string;
}
export declare const processTask: (result: JobResult) => number;
