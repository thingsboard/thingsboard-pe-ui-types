import { OnDestroy, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { CustomTranslationService } from '@core/http/custom-translation.service';
import * as i0 from "@angular/core";
export interface AddNewLanguageDialogData {
    langs: string[];
}
export declare class AddNewLanguageDialogComponent extends DialogComponent<AddNewLanguageDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<AddNewLanguageDialogComponent>;
    private data;
    private fb;
    private customTranslationService;
    languageForm: import("@angular/forms").FormGroup<{
        language: import("@angular/forms").FormControl<string>;
        upload: import("@angular/forms").FormControl<boolean>;
        translation: import("@angular/forms").FormControl<any>;
    }>;
    langs: string[];
    private destroy$;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AddNewLanguageDialogComponent>, data: AddNewLanguageDialogData, fb: FormBuilder, customTranslationService: CustomTranslationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addLanguage($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddNewLanguageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddNewLanguageDialogComponent, "tb-add-new-language-dialog", never, {}, {}, never, never, false, never>;
}
