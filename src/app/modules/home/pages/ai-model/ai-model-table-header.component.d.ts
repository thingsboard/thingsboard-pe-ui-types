import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AiModel } from '@shared/models/ai-model.models';
import * as i0 from "@angular/core";
export declare class AiModelTableHeaderComponent extends EntityTableHeaderComponent<AiModel> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<AiModelTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiModelTableHeaderComponent, "tb-ai-model-table-header", never, {}, {}, never, never, false, never>;
}
