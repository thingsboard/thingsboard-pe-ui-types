import { ChangeDetectorRef, OnInit, Type } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormattedData } from '@shared/models/widget.models';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
interface MarkdownWidgetSettings {
    markdownTextPattern: string;
    useMarkdownTextFunction: boolean;
    markdownTextFunction: string;
    markdownCss: string;
}
declare type MarkdownTextFunction = (data: FormattedData[]) => string;
export declare class MarkdownWidgetComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private utils;
    homeComponentsModule: Type<any>;
    private cd;
    settings: MarkdownWidgetSettings;
    markdownTextFunction: MarkdownTextFunction;
    markdownClass: string;
    ctx: WidgetContext;
    markdownText: string;
    constructor(store: Store<AppState>, utils: UtilsService, homeComponentsModule: Type<any>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onDataUpdated(): void;
    markdownClick($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkdownWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkdownWidgetComponent, "tb-markdown-widget ", never, { "ctx": "ctx"; }, {}, never, never>;
}
export {};
