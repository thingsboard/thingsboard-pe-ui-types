import { QRCodeConfig } from '@shared/models/mobile-app.models';
import { WidgetConfig } from '@shared/models/widget.models';
export interface MobileAppQrCodeWidgetSettings extends WidgetConfig {
    useSystemSettings: boolean;
    qrCodeConfig: Omit<QRCodeConfig, 'showOnHomePage'>;
}
export declare const mobileAppQrCodeWidgetDefaultSettings: MobileAppQrCodeWidgetSettings;
