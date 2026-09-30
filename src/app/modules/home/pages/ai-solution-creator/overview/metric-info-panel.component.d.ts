import { TbPopoverComponent } from '@shared/components/popover.component';
import { AiMetricType, SolutionDescriptorMetric } from '@shared/models/solution-creator.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MetricInfoPanelComponent {
    private popover;
    private translate;
    metric: SolutionDescriptorMetric;
    constructor(popover: TbPopoverComponent<MetricInfoPanelComponent>, translate: TranslateService);
    cancel(): void;
    getMetricTypeName(value: keyof AiMetricType): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MetricInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MetricInfoPanelComponent, "tb-metric-info-panel", never, { "metric": { "alias": "metric"; "required": false; }; }, {}, never, never, false, never>;
}
