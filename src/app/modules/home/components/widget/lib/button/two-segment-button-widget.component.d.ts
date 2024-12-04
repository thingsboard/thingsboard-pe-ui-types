import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { BasicActionWidgetComponent } from '@home/components/widget/lib/action/action-widget.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonToggleAppearance, SegmentedButtonWidgetSettings } from '@home/components/widget/lib/button/segmented-button-widget.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
export declare class TwoSegmentButtonWidgetComponent extends BasicActionWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    protected imagePipe: ImagePipe;
    protected sanitizer: DomSanitizer;
    protected cd: ChangeDetectorRef;
    settings: SegmentedButtonWidgetSettings;
    overlayStyle: ComponentStyle;
    value: boolean;
    disabled: boolean;
    autoScale: boolean;
    appearance: ButtonToggleAppearance;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    private onValue;
    private onDisabled;
    onClick(_$event: MatButtonToggleChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoSegmentButtonWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwoSegmentButtonWidgetComponent, "tb-two-segment-button-widget", never, {}, {}, never, never, false, never>;
}
