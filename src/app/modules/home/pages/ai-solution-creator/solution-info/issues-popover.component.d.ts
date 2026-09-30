import { AggregatedEntityResult } from '@home/pages/ai-solution-creator/solution-info/issues-aggregation';
import { EntityResult } from '@shared/models/solution-creator.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class IssuesPopoverComponent {
    private translate;
    entry: AggregatedEntityResult;
    constructor(translate: TranslateService);
    get hasErrors(): boolean;
    get hasWarnings(): boolean;
    get showSections(): boolean;
    get subtitle(): string;
    getError(item: EntityResult): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IssuesPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IssuesPopoverComponent, "tb-issues-popover", never, { "entry": { "alias": "entry"; "required": false; }; }, {}, never, never, false, never>;
}
