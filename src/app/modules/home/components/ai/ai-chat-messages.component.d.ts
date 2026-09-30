import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ApprovalChatMessage, ChatMessage } from '@shared/models/solution-creator.models';
import { ApprovalResult, ToolExecutionRequested, ToolExecutionResult } from '@shared/models/ai-chat.models';
import * as i0 from "@angular/core";
export declare class AiChatMessagesComponent implements OnChanges {
    private elementRef;
    messages: ChatMessage[];
    loading: boolean;
    loadingLongTime: boolean;
    additionalStyles: string[];
    completedExecutions: Record<string, ToolExecutionResult>;
    autoApprove: boolean;
    approvalAction: EventEmitter<ApprovalResult>;
    waitApproval: boolean;
    constructor(elementRef: ElementRef<HTMLElement>);
    getApprovalData(msg: ApprovalChatMessage): ToolExecutionRequested;
    getCompletedExecution(msg: ApprovalChatMessage): ToolExecutionResult | undefined;
    ngOnChanges(changes: SimpleChanges): void;
    approval($event: ApprovalResult): void;
    scrollToBottom(behavior?: ScrollBehavior): void;
    scrollToLastUserMessage(): void;
    private scrollToLastAiMessage;
    parseResult(msg: string): string;
    private isNearBottom;
    private isValidJson;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiChatMessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiChatMessagesComponent, "tb-ai-chat-messages", never, { "messages": { "alias": "messages"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingLongTime": { "alias": "loadingLongTime"; "required": false; }; "additionalStyles": { "alias": "additionalStyles"; "required": false; }; "completedExecutions": { "alias": "completedExecutions"; "required": false; }; "autoApprove": { "alias": "autoApprove"; "required": false; }; }, { "approvalAction": "approvalAction"; }, never, ["[loadingLongTime]"], false, never>;
}
