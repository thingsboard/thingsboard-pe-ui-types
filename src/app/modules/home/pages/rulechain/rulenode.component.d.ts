import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { FcNodeComponent } from 'ngx-flowchart';
import { FcRuleNode, RuleNodeType } from '@shared/models/rule-node.models';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class RuleNodeComponent extends FcNodeComponent implements OnInit {
    private sanitizer;
    private translate;
    private router;
    iconUrl: SafeResourceUrl;
    RuleNodeType: typeof RuleNodeType;
    constructor(sanitizer: DomSanitizer, translate: TranslateService, router: Router);
    ngOnInit(): void;
    openRuleChain($event: Event, node: FcRuleNode): void;
    displayOpenRuleChainTooltip($event: MouseEvent, node: FcRuleNode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNodeComponent, "rule-node", never, {}, {}, never, never, false, never>;
}
