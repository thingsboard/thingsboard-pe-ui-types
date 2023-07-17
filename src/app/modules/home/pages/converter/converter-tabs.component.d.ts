import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Converter } from '@shared/models/converter.models';
import { DebugConverterEventBody } from '@shared/models/event.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ConverterTabsComponent extends EntityTabsComponent<Converter> {
    protected store: Store<AppState>;
    private translate;
    constructor(store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    getConverterFunctionName(): any;
    onDebugEventSelected(event: DebugConverterEventBody): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConverterTabsComponent, "tb-converter-tabs", never, {}, {}, never, never, false, never>;
}
