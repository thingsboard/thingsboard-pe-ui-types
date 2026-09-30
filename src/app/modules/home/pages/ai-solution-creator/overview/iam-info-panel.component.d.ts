import { OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { SolutionDescriptorIam } from '@shared/models/solution-creator.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class IamInfoPanelComponent implements OnInit {
    private popover;
    private translate;
    iam: SolutionDescriptorIam;
    operations: string;
    constructor(popover: TbPopoverComponent<IamInfoPanelComponent>, translate: TranslateService);
    ngOnInit(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IamInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IamInfoPanelComponent, "tb-iam-info-panel", never, { "iam": { "alias": "iam"; "required": false; }; }, {}, never, never, false, never>;
}
