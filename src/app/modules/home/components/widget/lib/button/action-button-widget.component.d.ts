import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { BasicActionWidgetComponent } from '@home/components/widget/lib/action/action-widget.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { ActionButtonWidgetSettings } from '@home/components/widget/lib/button/action-button-widget.models';
import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import * as i0 from "@angular/core";
export declare class ActionButtonWidgetComponent extends BasicActionWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    protected imagePipe: ImagePipe;
    protected sanitizer: DomSanitizer;
    protected cd: ChangeDetectorRef;
    settings: ActionButtonWidgetSettings;
    disabled: boolean;
    activated: boolean;
    appearance: WidgetButtonAppearance;
    borderRadius: string;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onClick($event: MouseEvent): void;
    private onActivated;
    private onDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionButtonWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionButtonWidgetComponent, "tb-action-button-widget", never, {}, {}, never, never, false, never>;
}
