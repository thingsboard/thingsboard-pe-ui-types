import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { BasicActionWidgetComponent } from '@home/components/widget/lib/action/action-widget.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { CommandButtonWidgetSettings } from '@home/components/widget/lib/button/command-button-widget.models';
import * as i0 from "@angular/core";
export declare class CommandButtonWidgetComponent extends BasicActionWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    protected imagePipe: ImagePipe;
    protected sanitizer: DomSanitizer;
    protected cd: ChangeDetectorRef;
    settings: CommandButtonWidgetSettings;
    disabled: boolean;
    appearance: WidgetButtonAppearance;
    borderRadius: string;
    private clickValueSetter;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onClick(_$event: MouseEvent): void;
    private onDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandButtonWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommandButtonWidgetComponent, "tb-command-button-widget", never, {}, {}, never, never, false, never>;
}
