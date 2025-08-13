import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { StepperOrientation } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { AiModel, AiProvider } from '@shared/models/ai-model.models';
import { AiModelService } from '@core/http/ai-model.service';
import * as i0 from "@angular/core";
export interface AIModelDialogData {
    AIModel?: AiModel;
    isAdd?: boolean;
    readonly?: boolean;
}
export declare class AIModelDialogComponent extends DialogComponent<AIModelDialogComponent, AiModel> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<AIModelDialogComponent, AiModel>;
    data: AIModelDialogData;
    private fb;
    private aiModelService;
    private dialog;
    readonly entityType: typeof EntityType;
    selectedIndex: number;
    dialogTitle: string;
    stepperOrientation: Observable<StepperOrientation>;
    aiProvider: typeof AiProvider;
    providerMap: AiProvider[];
    providerTranslationMap: Map<AiProvider, string>;
    provider: AiProvider;
    aiModelForms: FormGroup;
    isAdd: boolean;
    readonly: boolean;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AIModelDialogComponent, AiModel>, data: AIModelDialogData, fb: FormBuilder, aiModelService: AiModelService, dialog: MatDialog);
    fetchOptions(searchText: string): Observable<Array<string>>;
    private updateValidation;
    get providerFieldsList(): string[];
    get modelFieldsList(): string[];
    cancel(): void;
    checkConnectivity(): Observable<any>;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AIModelDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AIModelDialogComponent, "tb-ai-model-dialog", never, {}, {}, never, never, false, never>;
}
