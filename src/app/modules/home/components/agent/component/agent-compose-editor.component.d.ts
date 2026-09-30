import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AgentComposeEditorComponent implements AfterViewInit, OnChanges, OnDestroy {
    value: string;
    readOnly: boolean;
    valueChange: EventEmitter<string>;
    hostRef: ElementRef<HTMLElement>;
    private editor;
    private settingValue;
    private destroyed;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private applyReadOnly;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentComposeEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentComposeEditorComponent, "tb-agent-compose-editor", never, { "value": { "alias": "value"; "required": false; }; "readOnly": { "alias": "readOnly"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
