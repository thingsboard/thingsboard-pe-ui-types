import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AiAssistantPanelService } from '@core/services/ai-assistant-panel.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class AiAssistantAlarmButtonComponent implements OnInit {
    private store;
    private panelService;
    private userPermissionsService;
    private authUser;
    private hasPermission;
    constructor(store: Store<AppState>, panelService: AiAssistantPanelService, userPermissionsService: UserPermissionsService);
    ngOnInit(): void;
    show(): boolean;
    toggleAiAssistant($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantAlarmButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAssistantAlarmButtonComponent, "tb-ai-assistant-alarm-button", never, {}, {}, never, never, false, never>;
}
