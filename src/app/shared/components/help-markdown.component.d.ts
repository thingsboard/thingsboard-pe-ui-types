import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelpService } from '@core/services/help.service';
import * as i0 from "@angular/core";
export declare class HelpMarkdownComponent implements OnDestroy, OnInit, OnChanges {
    private help;
    helpId: string;
    helpContent: string;
    visible: boolean;
    style: {
        [klass: string]: any;
    };
    markdownReady: EventEmitter<void>;
    markdownText: BehaviorSubject<string>;
    markdownText$: import("rxjs").Observable<string>;
    private loadHelpPending;
    constructor(help: HelpService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadHelpWhenVisible;
    private loadHelp;
    onMarkdownReady(): void;
    markdownClick($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpMarkdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelpMarkdownComponent, "tb-help-markdown", never, { "helpId": { "alias": "helpId"; "required": false; }; "helpContent": { "alias": "helpContent"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, { "markdownReady": "markdownReady"; }, never, never, false, never>;
}
