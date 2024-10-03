import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { GatewayConnectorBasicConfigDirective } from '@home/components/widget/lib/gateway/abstract/gateway-connector-basic-config.abstract';
import { ModbusBasicConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare abstract class ModbusBasicConfigDirective<InputBasicConfig, OutputBasicConfig> extends GatewayConnectorBasicConfigDirective<InputBasicConfig, OutputBasicConfig> {
    enableSlaveControl: FormControl<boolean>;
    constructor();
    writeValue(basicConfig: OutputBasicConfig & ModbusBasicConfig): void;
    validate(): ValidationErrors | null;
    protected initBasicFormGroup(): FormGroup;
    private updateSlaveEnabling;
    private onEnableSlaveControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusBasicConfigDirective<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModbusBasicConfigDirective<any, any>, never, never, {}, {}, never, never, false, never>;
}
