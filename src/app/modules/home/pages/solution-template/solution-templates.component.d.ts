import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute } from '@angular/router';
import { TenantSolutionTemplateInfo } from '@shared/models/solution-template.models';
import { SolutionsService } from '@core/http/solutions.service';
import * as i0 from "@angular/core";
export declare class SolutionTemplatesComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private solutionService;
    private route;
    solutionTemplates: Array<TenantSolutionTemplateInfo>;
    constructor(store: Store<AppState>, solutionService: SolutionsService, route: ActivatedRoute);
    ngOnInit(): void;
    reload(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionTemplatesComponent, "tb-solution-templates", never, {}, {}, never, never, false>;
}
