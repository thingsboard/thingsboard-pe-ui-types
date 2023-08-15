import * as i0 from "@angular/core";
import * as i1 from "./data/default-device-configuration.component";
import * as i2 from "./data/device-configuration.component";
import * as i3 from "./data/default-device-transport-configuration.component";
import * as i4 from "./data/mqtt-device-transport-configuration.component";
import * as i5 from "./data/coap-device-transport-configuration.component";
import * as i6 from "./data/lwm2m-device-transport-configuration.component";
import * as i7 from "./data/snmp-device-transport-configuration.component";
import * as i8 from "./data/device-transport-configuration.component";
import * as i9 from "./data/device-data.component";
import * as i10 from "@modules/home/pages/device/device.component";
import * as i11 from "@home/pages/device/device-table-header.component";
import * as i12 from "@modules/home/pages/device/device-credentials-dialog.component";
import * as i13 from "./device-check-connectivity-dialog.component";
import * as i14 from "@angular/common";
import * as i15 from "@shared/shared.module";
import * as i16 from "@modules/home/components/home-components.module";
import * as i17 from "../../dialogs/home-dialogs.module";
import * as i18 from "@home/components/device/device-credentials.module";
import * as i19 from "@home/components/profile/device/common/device-profile-common.module";
import * as i20 from "@home/pages/device/device-routing.module";
export declare class DeviceModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DeviceModule, [typeof i1.DefaultDeviceConfigurationComponent, typeof i2.DeviceConfigurationComponent, typeof i3.DefaultDeviceTransportConfigurationComponent, typeof i4.MqttDeviceTransportConfigurationComponent, typeof i5.CoapDeviceTransportConfigurationComponent, typeof i6.Lwm2mDeviceTransportConfigurationComponent, typeof i7.SnmpDeviceTransportConfigurationComponent, typeof i8.DeviceTransportConfigurationComponent, typeof i9.DeviceDataComponent, typeof i10.DeviceComponent, typeof i11.DeviceTableHeaderComponent, typeof i12.DeviceCredentialsDialogComponent, typeof i13.DeviceCheckConnectivityDialogComponent], [typeof i14.CommonModule, typeof i15.SharedModule, typeof i16.HomeComponentsModule, typeof i17.HomeDialogsModule, typeof i18.DeviceCredentialsModule, typeof i19.DeviceProfileCommonModule, typeof i20.DeviceRoutingModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DeviceModule>;
}
