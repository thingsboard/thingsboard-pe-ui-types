import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FlowDirective } from '@flowjs/ngx-flow';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UtilsService } from '@core/services/utils.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { FileSizePipe } from '@shared/pipe/file-size.pipe';
import { ImagePipe } from '@shared/pipe/image.pipe';
import * as i0 from "@angular/core";
export declare class ImageInputComponent extends PageComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private utils;
    private sanitizer;
    private imagePipe;
    private dialog;
    private fileSize;
    private cd;
    label: string;
    accept: string;
    emptyImageText: any;
    noImageText: any;
    dropLabel: any;
    maxImageSize: number;
    allowedImageMimeTypes: string[];
    maxSizeByte: number;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    imageTypeChanged: EventEmitter<string>;
    imageSizeOverflow: EventEmitter<any>;
    imageTypeError: EventEmitter<any>;
    imageCleared: EventEmitter<any>;
    showClearButton: boolean;
    showPreview: boolean;
    inputId: string;
    processImageApiLink: boolean;
    resultAsFile: boolean;
    showFileName: boolean;
    fileName: string;
    fileNameChanged: EventEmitter<string>;
    imageType: string;
    imageUrl: string;
    file: File;
    safeImageUrl: SafeUrl;
    flow: FlowDirective;
    autoUploadSubscription: Subscription;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, utils: UtilsService, sanitizer: DomSanitizer, imagePipe: ImagePipe, dialog: DialogService, fileSize: FileSizePipe, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private extractType;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    private updateModel;
    clearImage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageInputComponent, "tb-image-input", never, { "label": "label"; "accept": "accept"; "emptyImageText": "emptyImageText"; "noImageText": "noImageText"; "dropLabel": "dropLabel"; "maxImageSize": "maxImageSize"; "allowedImageMimeTypes": "allowedImageMimeTypes"; "maxSizeByte": "maxSizeByte"; "required": "required"; "disabled": "disabled"; "showClearButton": "showClearButton"; "showPreview": "showPreview"; "inputId": "inputId"; "processImageApiLink": "processImageApiLink"; "resultAsFile": "resultAsFile"; "showFileName": "showFileName"; "fileName": "fileName"; }, { "imageTypeChanged": "imageTypeChanged"; "imageSizeOverflow": "imageSizeOverflow"; "imageTypeError": "imageTypeError"; "imageCleared": "imageCleared"; "fileNameChanged": "fileNameChanged"; }, never, never, false, never>;
}
