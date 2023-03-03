import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Converter, ConverterDebugInput, ConverterType } from '@shared/models/converter.models';
import { ConverterService } from '@core/http/converter.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { MatDialog } from '@angular/material/dialog';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class ConverterComponent extends EntityComponent<Converter> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    private converterService;
    private dialog;
    protected entityValue: Converter;
    protected entitiesTableConfigValue: EntityTableConfig<Converter>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    hideType: boolean;
    converterType: typeof ConverterType;
    converterTypes: string[];
    converterTypeTranslations: Map<ConverterType, string>;
    tbelEnabled: boolean;
    scriptLanguage: typeof ScriptLanguage;
    constructor(store: Store<AppState>, translate: TranslateService, converterService: ConverterService, dialog: MatDialog, entityValue: Converter, entitiesTableConfigValue: EntityTableConfig<Converter>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    buildForm(entity: Converter): UntypedFormGroup;
    private checkIsNewConverter;
    private converterTypeChanged;
    private converterScriptLangChanged;
    private setupDefaultScriptBody;
    updateForm(entity: Converter): void;
    onConverterIdCopied($event: any): void;
    openConverterTestDialog(isDecoder: boolean): void;
    showConverterTestDialog(isDecoder: boolean, debugIn: ConverterDebugInput): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterComponent, [null, null, null, null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConverterComponent, "tb-converter", never, { "hideType": "hideType"; }, {}, never, never, false, never>;
}
