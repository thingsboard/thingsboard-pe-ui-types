import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CustomActionDescriptor } from '@shared/models/widget.models';
import { Ace } from 'ace-builds';
import { CancelAnimationFrame, RafService } from '@core/services/raf.service';
import { ResizeObserver } from '@juggle/resize-observer';
import * as i0 from "@angular/core";
export declare class CustomActionPrettyResourcesTabsComponent extends PageComponent implements OnInit, OnChanges, OnDestroy {
    protected store: Store<AppState>;
    private translate;
    private raf;
    action: CustomActionDescriptor;
    hasCustomFunction: boolean;
    actionUpdated: EventEmitter<CustomActionDescriptor>;
    htmlInputElmRef: ElementRef;
    cssInputElmRef: ElementRef;
    htmlFullscreen: boolean;
    cssFullscreen: boolean;
    aceEditors: Ace.Editor[];
    editorsResizeCafs: {
        [editorId: string]: CancelAnimationFrame;
    };
    aceResize$: ResizeObserver;
    htmlEditor: Ace.Editor;
    cssEditor: Ace.Editor;
    setValuesPending: boolean;
    customPrettyActionEditorCompleter: import("../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    constructor(store: Store<AppState>, translate: TranslateService, raf: RafService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    notifyActionUpdated(): void;
    private validate;
    addResource(): void;
    removeResource(index: number): void;
    beautifyCss(): void;
    beautifyHtml(): void;
    private initAceEditors;
    private createAceEditor;
    private setAceEditorValues;
    private onAceEditorResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomActionPrettyResourcesTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomActionPrettyResourcesTabsComponent, "tb-custom-action-pretty-resources-tabs", never, { "action": "action"; "hasCustomFunction": "hasCustomFunction"; }, { "actionUpdated": "actionUpdated"; }, never, never, false>;
}
