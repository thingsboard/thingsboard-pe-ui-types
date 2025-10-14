import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { ImageReportComponentConfig } from '@shared/models/report-component.models';
import { WidgetConfigMode } from '@shared/models/widget.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export declare class ImageConfigComponent extends AbstractReportComponentConfig<ImageReportComponentConfig> {
    imageWidthTypes: string[];
    imageWidthTypeTranslations: Map<string, string>;
    imageAlignments: string[];
    imageAlignmentTranslations: Map<string, string>;
    basicMode: WidgetConfigMode;
    DataKeyType: typeof DataKeyType;
    settingsTab: 'image' | 'layout';
    private initialImageUrl;
    private imageWidth;
    protected buildForm(reportComponentConfig: ImageReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): any;
    private updateCustomWidth;
    imageSizeUpdated(size: {
        width: number;
        height: number;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageConfigComponent, "tb-image-config", never, {}, {}, never, never, false, never>;
}
