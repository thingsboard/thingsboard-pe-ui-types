import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort, SortDirection } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { AgentAppEventActionType, AgentAppProfileRelationInfo, AgentBulkAction, AgentBulkActionStatus, AgentProfileInfo } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
interface ProfileRow {
    profile: AgentAppProfileRelationInfo;
    expanded: boolean;
    loading: boolean;
    loaded: boolean;
    actions: AgentBulkAction[];
    actionsPageIndex: number;
    actionsPageSize: number;
    actionsTotal: number;
}
interface ActionMeta {
    icon: string;
    label: string;
}
interface StatusMeta {
    color: string;
    icon: string;
    label: string;
}
export declare class AgentProfileMergedProfilesComponent implements OnInit, OnChanges, OnDestroy {
    private agentService;
    private dialog;
    private dialogService;
    private translate;
    private datePipe;
    private router;
    private cd;
    agentProfile: AgentProfileInfo;
    active: boolean;
    rows: ProfileRow[];
    filteredRows: ProfileRow[];
    loading: boolean;
    searchText: string;
    textSearchMode: boolean;
    sortActive: string;
    sortDirection: SortDirection;
    selectedAction: AgentBulkAction | null;
    selectedActionProfile: AgentAppProfileRelationInfo | null;
    searchInput?: ElementRef<HTMLInputElement>;
    readonly profileColumns: string[];
    readonly bulkColumns: string[];
    get autoInstallEnabled(): boolean;
    get autoInstallNoteKey(): string;
    private readonly destroy$;
    constructor(agentService: AgentService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService, datePipe: DatePipe, router: Router, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    trackProfile: (_: number, row: ProfileRow) => string;
    trackAction: (_: number, action: AgentBulkAction) => string;
    private recomputeRows;
    onSearchTextChange(value: string): void;
    templateLabel(row: ProfileRow): string;
    assignedAppsCount(row: ProfileRow): number;
    onSortChange(s: Sort): void;
    enterSearchMode(): void;
    exitSearchMode(): void;
    private sortValue;
    typeBadgeStyle(appType: string): {
        [k: string]: string;
    };
    toggleRow(row: ProfileRow, $event?: Event): void;
    openProfile(row: ProfileRow, $event?: Event): void;
    upgradeEnabled(row: ProfileRow): boolean;
    bulkRestart($event: Event, row: ProfileRow): void;
    bulkUpdate($event: Event, row: ProfileRow): void;
    bulkUpgrade($event: Event, row: ProfileRow): void;
    bulkDelete($event: Event, row: ProfileRow): void;
    unassign($event: Event, row: ProfileRow): void;
    relatesOnAutoDiscovery(row: ProfileRow): boolean;
    autoDiscoveryEnabled(row: ProfileRow): boolean;
    toggleAutoDiscovery($event: Event, row: ProfileRow): void;
    refresh(): void;
    openAssignDialog(): void;
    actionMeta(actionType: AgentAppEventActionType): ActionMeta;
    statusMeta(status: AgentBulkActionStatus): StatusMeta;
    formatDate(ts: number): string;
    selectAction(row: ProfileRow, action: AgentBulkAction): void;
    closePanel(): void;
    openFullDetails(): void;
    private load;
    private loadActions;
    onActionsPageChange(row: ProfileRow, e: {
        pageIndex: number;
        pageSize: number;
    }): void;
    readonly actionsPageSizeOptions: number[];
    private refreshExpanded;
    private openBulk;
    private resetState;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentProfileMergedProfilesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentProfileMergedProfilesComponent, "tb-agent-profile-merged-profiles", never, { "agentProfile": { "alias": "agentProfile"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
