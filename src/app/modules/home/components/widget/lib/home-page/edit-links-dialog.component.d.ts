import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DocumentationLink, DocumentationLinks, QuickLinks } from '@shared/models/user-settings.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { UserSettingsService } from '@core/http/user-settings.service';
import * as i0 from "@angular/core";
export interface EditLinksDialogData {
    mode: 'docs' | 'quickLinks';
    links: DocumentationLinks | QuickLinks;
}
export declare class EditLinksDialogComponent extends DialogComponent<EditLinksDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: EditLinksDialogData;
    dialogRef: MatDialogRef<EditLinksDialogComponent, boolean>;
    fb: UntypedFormBuilder;
    private userSettingsService;
    updated: boolean;
    addMode: boolean;
    editMode: boolean;
    links: DocumentationLinks | QuickLinks;
    mode: "docs" | "quickLinks";
    addingLink: Partial<DocumentationLink> | string;
    editLinksFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, data: EditLinksDialogData, dialogRef: MatDialogRef<EditLinksDialogComponent, boolean>, fb: UntypedFormBuilder, userSettingsService: UserSettingsService);
    ngOnInit(): void;
    linksFormArray(): UntypedFormArray;
    trackByLink(index: number, linkControl: AbstractControl): any;
    linkDrop(event: CdkDragDrop<string[]>): void;
    addLink(): void;
    linkAdded(link: DocumentationLink | string): void;
    deleteLink(index: number): void;
    update(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditLinksDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditLinksDialogComponent, "tb-edit-links-dialog", never, {}, {}, never, never, false, never>;
}
