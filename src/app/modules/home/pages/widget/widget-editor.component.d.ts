/// <reference types="node" />
import { PageComponent } from '@shared/components/page.component';
import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetService } from '@core/http/widget.service';
import { WidgetInfo } from '@home/models/widget-component.models';
import { widgetType, WidgetTypeDetails } from '@shared/models/widget.models';
import { ActivatedRoute, Router } from '@angular/router';
import { HasDirtyFlag } from '@core/guards/confirm-on-exit.guard';
import { AuthUser } from '@shared/models/user.model';
import { Hotkey } from 'angular2-hotkeys';
import { TranslateService } from '@ngx-translate/core';
import { Ace } from 'ace-builds';
import { CancelAnimationFrame, RafService } from '@core/services/raf.service';
import { MatDialog } from '@angular/material/dialog';
import Timeout = NodeJS.Timeout;
import * as i0 from "@angular/core";
export declare class WidgetEditorComponent extends PageComponent implements OnInit, OnDestroy, HasDirtyFlag {
    protected store: Store<AppState>;
    private window;
    private route;
    private router;
    private widgetService;
    private translate;
    private raf;
    private dialog;
    topPanelElmRef: ElementRef;
    topLeftPanelElmRef: ElementRef;
    topRightPanelElmRef: ElementRef;
    bottomPanelElmRef: ElementRef;
    javascriptPanelElmRef: ElementRef;
    framePanelElmRef: ElementRef;
    htmlInputElmRef: ElementRef;
    cssInputElmRef: ElementRef;
    settingsJsonInputElmRef: ElementRef;
    dataKeySettingsJsonInputElmRef: ElementRef;
    latestDataKeySettingsJsonInputElmRef: ElementRef;
    javascriptInputElmRef: ElementRef;
    widgetIFrameElmRef: ElementRef<HTMLIFrameElement>;
    iframe: JQuery<HTMLIFrameElement>;
    widgetTypes: typeof widgetType;
    allWidgetTypes: string[];
    widgetTypesDataMap: Map<widgetType, import("@shared/models/widget.models").WidgetTypeData>;
    authUser: AuthUser;
    isReadOnly: boolean;
    widgetTypeDetails: WidgetTypeDetails;
    widget: WidgetInfo;
    origWidget: WidgetInfo;
    private isEditModeWidget;
    private _isDirty;
    get isDirty(): boolean;
    set isDirty(value: boolean);
    fullscreen: boolean;
    htmlFullscreen: boolean;
    cssFullscreen: boolean;
    jsonSettingsFullscreen: boolean;
    jsonDataKeySettingsFullscreen: boolean;
    jsonLatestDataKeySettingsFullscreen: boolean;
    javascriptFullscreen: boolean;
    iFrameFullscreen: boolean;
    aceEditors: Ace.Editor[];
    editorsResizeCafs: {
        [editorId: string]: CancelAnimationFrame;
    };
    htmlEditor: Ace.Editor;
    cssEditor: Ace.Editor;
    jsonSettingsEditor: Ace.Editor;
    dataKeyJsonSettingsEditor: Ace.Editor;
    latestDataKeyJsonSettingsEditor: Ace.Editor;
    jsEditor: Ace.Editor;
    aceResize$: ResizeObserver;
    onWindowMessageListener: any;
    iframeWidgetEditModeInited: boolean;
    saveWidgetPending: boolean;
    saveWidgetAsPending: boolean;
    gotError: boolean;
    errorMarkers: number[];
    errorAnnotationId: number;
    saveWidgetTimeout: Timeout;
    hotKeys: Hotkey[];
    updateBreadcrumbs: EventEmitter<any>;
    private rxSubscriptions;
    constructor(store: Store<AppState>, window: Window, route: ActivatedRoute, router: Router, widgetService: WidgetService, translate: TranslateService, raf: RafService, dialog: MatDialog);
    private init;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initHotKeys;
    private initSplitLayout;
    private initAceEditors;
    private setAceEditorValues;
    private createAceEditor;
    private onAceEditorResize;
    private onWindowMessage;
    private onWidgetEditModeInited;
    private onWidgetEditUpdated;
    private onWidgetEditModeToggled;
    private onWidgetException;
    private cleanupJsErrors;
    private commitSaveWidget;
    private commitSaveWidgetAs;
    private setWidgetTypeDetails;
    applyWidgetScript(): void;
    undoWidget(): void;
    saveWidget(): void;
    saveWidgetAs(): void;
    undoDisabled(): boolean;
    saveDisabled(): boolean;
    saveAsDisabled(): boolean;
    beautifyCss(): void;
    beautifyHtml(): void;
    beautifyJson(): void;
    beautifyDataKeyJson(): void;
    beautifyLatestDataKeyJson(): void;
    beautifyJs(): void;
    removeResource(index: number): void;
    addResource(): void;
    widgetTypeChanged(): void;
    get confirmOnExitMessage(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetEditorComponent, "tb-widget-editor", never, {}, {}, never, never, false, never>;
}
