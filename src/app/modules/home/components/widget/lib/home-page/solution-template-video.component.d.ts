import { PageComponent } from '@shared/components/page.component';
import { SolutionTemplateInfo } from '@shared/models/solution-template.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class SolutionTemplateVideoComponent extends PageComponent {
    protected store: Store<AppState>;
    solutionTemplate: SolutionTemplateInfo;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplateVideoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionTemplateVideoComponent, "tb-solution-template-video", never, { "solutionTemplate": { "alias": "solutionTemplate"; "required": false; }; }, {}, never, never, false, never>;
}
