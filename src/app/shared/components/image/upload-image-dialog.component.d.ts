import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ImageService } from '@core/http/image.service';
import { ImageResource, ImageResourceInfo, ResourceSubType } from '@shared/models/resource.models';
import * as i0 from "@angular/core";
export interface UploadImageDialogData {
    imageSubType: ResourceSubType;
    image?: ImageResourceInfo;
}
export interface UploadImageDialogResult {
    image?: ImageResource;
    scadaSymbolContent?: string;
}
export declare class UploadImageDialogComponent extends DialogComponent<UploadImageDialogComponent, UploadImageDialogResult> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    private imageService;
    data: UploadImageDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<UploadImageDialogComponent, UploadImageDialogResult>;
    fb: UntypedFormBuilder;
    uploadImageFormGroup: UntypedFormGroup;
    uploadImage: boolean;
    submitted: boolean;
    maxResourceSize: number;
    get isScada(): boolean;
    private scadaSymbolContent;
    private scadaSymbolMetadata;
    constructor(store: Store<AppState>, router: Router, imageService: ImageService, data: UploadImageDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<UploadImageDialogComponent, UploadImageDialogResult>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    imageFileNameChanged(fileName: string): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    upload(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadImageDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadImageDialogComponent, "tb-upload-image-dialog", never, {}, {}, never, never, false, never>;
}
