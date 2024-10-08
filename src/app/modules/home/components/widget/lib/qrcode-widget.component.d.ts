import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormattedData } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
interface QrCodeWidgetSettings {
    qrCodeTextPattern: string;
    useQrCodeTextFunction: boolean;
    qrCodeTextFunction: string;
}
type QrCodeTextFunction = (data: FormattedData[]) => string;
export declare class QrCodeWidgetComponent extends PageComponent implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    protected cd: ChangeDetectorRef;
    settings: QrCodeWidgetSettings;
    qrCodeTextFunction: QrCodeTextFunction;
    ctx: WidgetContext;
    qrCodeText: string;
    invalidQrCodeText: boolean;
    private viewInited;
    private scheduleUpdateCanvas;
    canvasRef: ElementRef<HTMLCanvasElement>;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onDataUpdated(): void;
    private updateQrCodeText;
    private updateCanvas;
    static ɵfac: i0.ɵɵFactoryDeclaration<QrCodeWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QrCodeWidgetComponent, "tb-qrcode-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
