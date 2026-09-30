import { EntityType } from '@shared/models/entity-type.models';
import { EntityResult } from '@shared/models/solution-creator.models';
import { TranslateService } from '@ngx-translate/core';
export declare enum IssueStatus {
    WARN = "WARN",
    ERROR = "ERROR",
    OK = "OK"
}
export interface AggregatedEntityResult {
    /** Grouping key — `${entityType}:${additionalData.name}` so popovers don't collide across types */
    key: string;
    /** Representative entry chosen for primary card/row info; prefers an OK entry to keep id/userId */
    primary: EntityResult;
    /** Worst-case status across the group */
    status: IssueStatus;
    /** Entries with status === 'ERROR' */
    errors: EntityResult[];
    /** Entries with status === 'WARN' */
    warnings: EntityResult[];
}
export declare function aggregateByName(entityType: EntityType, entries: EntityResult[] | undefined): AggregatedEntityResult[];
/** Renders e.g. "1 error", "3 errors", "1 error, 2 warnings". */
export declare function issuesCountSummary(errors: EntityResult[], warnings: EntityResult[], translate: TranslateService): string;
