import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ImageService } from '@core/http/image.service';
import { ImageResourceInfo } from '@shared/models/resource.models';
import { UrlHolder } from '@shared/pipe/image.pipe';
import { ImportExportService } from '@shared/import-export/import-export.service';
import * as i0 from "@angular/core";
export interface ImageDialogData {
    readonly: boolean;
    image: ImageResourceInfo;
}
export declare class ImageDialogComponent extends DialogComponent<ImageDialogComponent, ImageResourceInfo> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private imageService;
    private dialog;
    private importExportService;
    private data;
    dialogRef: MatDialogRef<ImageDialogComponent, ImageResourceInfo>;
    fb: UntypedFormBuilder;
    image: ImageResourceInfo;
    readonly: boolean;
    imageFormGroup: UntypedFormGroup;
    imageChanged: boolean;
    imagePreviewData: UrlHolder;
    constructor(store: Store<AppState>, router: Router, imageService: ImageService, dialog: MatDialog, importExportService: ImportExportService, data: ImageDialogData, dialogRef: MatDialogRef<ImageDialogComponent, ImageResourceInfo>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    revertInfo(): void;
    saveInfo(): void;
    downloadImage($event: any): void;
    exportImage($event: any): void;
    embedImage($event: Event): void;
    updateImage($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageDialogComponent, "tb-image-dialog", never, {}, {}, never, never, false, never>;
}
