import { FormGroup } from '@angular/forms';
import { DataKeyType, ImageReportComponentConfig, WidgetConfigMode } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
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
