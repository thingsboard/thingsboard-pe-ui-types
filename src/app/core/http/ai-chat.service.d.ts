import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApprovalResult, ChatConfiguration, ChatEvent, ChatInfo, SendChatMessageRequest, ToolApprovalResult } from '@shared/models/ai-chat.models';
import { ChatMessage } from '@shared/models/solution-creator.models';
import * as i0 from "@angular/core";
export declare class AiChatService {
    private http;
    constructor(http: HttpClient);
    listChats(config?: RequestConfig): Observable<Array<ChatInfo>>;
    createChat(chat: ChatConfiguration, config?: RequestConfig): Observable<string>;
    updatedChat(chatId: string, chat: ChatConfiguration, config?: RequestConfig): Observable<void>;
    deleteChat(chatId: string, config?: RequestConfig): Observable<void>;
    getChatMessages(chatId: string, config?: RequestConfig): Observable<Array<ChatMessage>>;
    generateDashboard(deviceId: string, timeseriesKeys?: string[], config?: RequestConfig): Observable<string>;
    resolveToolApproval(result: ApprovalResult, config?: RequestConfig): Observable<ToolApprovalResult>;
    sendChatMessage(chatId: string, request: SendChatMessageRequest, config?: RequestConfig): Observable<ChatEvent>;
    private parseEventStrings;
    private parseSingleEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiChatService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiChatService>;
}
