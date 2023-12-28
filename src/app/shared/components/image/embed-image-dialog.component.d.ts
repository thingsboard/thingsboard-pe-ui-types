import { ImageResourceInfo } from '@shared/models/resource.models';
import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { ImageService } from '@core/http/image.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, UntypedFormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export interface EmbedImageDialogData {
    readonly: boolean;
    image: ImageResourceInfo;
}
export declare class EmbedImageDialogComponent extends DialogComponent<EmbedImageDialogComponent, ImageResourceInfo> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private imageService;
    private data;
    dialogRef: MatDialogRef<EmbedImageDialogComponent, ImageResourceInfo>;
    fb: UntypedFormBuilder;
    image: ImageResourceInfo;
    readonly: boolean;
    imageChanged: boolean;
    publicStatusControl: FormControl<boolean>;
    constructor(store: Store<AppState>, router: Router, imageService: ImageService, data: EmbedImageDialogData, dialogRef: MatDialogRef<EmbedImageDialogComponent, ImageResourceInfo>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    embedToHtmlCode(): string;
    embedToAngularTemplateCode(): string;
    private updateImagePublicStatus;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmbedImageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmbedImageDialogComponent, "tb-embed-image-dialog", never, {}, {}, never, never, false, never>;
}
