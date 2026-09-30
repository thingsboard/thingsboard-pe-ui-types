import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ApprovalResult, ToolExecutionRequested, ToolExecutionResult } from '@shared/models/ai-chat.models';
import * as i0 from "@angular/core";
export type ApprovalCardState = 'pending' | 'executing' | 'approved' | 'denied' | 'error';
export declare class AiApprovalCardComponent implements OnChanges {
    data: ToolExecutionRequested;
    completedExecution: ToolExecutionResult | null;
    autoApprove: boolean;
    approvalAction: EventEmitter<ApprovalResult>;
    state: ApprovalCardState;
    private readonly cd;
    ngOnChanges(changes: SimpleChanges): void;
    get isDestructive(): boolean;
    get approveIcon(): string;
    get resultIcon(): string;
    approve(): void;
    approveAll(): void;
    deny(): void;
    private emitApproval;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiApprovalCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiApprovalCardComponent, "tb-ai-approval-card", never, { "data": { "alias": "data"; "required": false; }; "completedExecution": { "alias": "completedExecution"; "required": false; }; "autoApprove": { "alias": "autoApprove"; "required": false; }; }, { "approvalAction": "approvalAction"; }, never, never, false, never>;
}
