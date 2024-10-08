import { EventEmitter, OnInit } from '@angular/core';
import { ConnectorType, RPCTemplate } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { AttributeService } from '@core/http/attribute.service';
import { WidgetContext } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class GatewayServiceRPCConnectorTemplatesComponent implements OnInit {
    private attributeService;
    connectorType: ConnectorType;
    ctx: WidgetContext;
    saveTemplate: EventEmitter<any>;
    useTemplate: EventEmitter<any>;
    rpcTemplates: Array<RPCTemplate>;
    readonly originalOrder: () => number;
    readonly isObject: (value: unknown) => boolean;
    readonly isArray: (value: unknown) => value is any[];
    readonly SNMPMethodsTranslations: Map<import("@home/components/widget/lib/gateway/gateway-widget.models").SNMPMethods, string>;
    constructor(attributeService: AttributeService);
    ngOnInit(): void;
    applyTemplate($event: Event, template: RPCTemplate): void;
    deleteTemplate($event: Event, template: RPCTemplate): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayServiceRPCConnectorTemplatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayServiceRPCConnectorTemplatesComponent, "tb-gateway-service-rpc-connector-templates", never, { "connectorType": { "alias": "connectorType"; "required": false; }; "ctx": { "alias": "ctx"; "required": false; }; "rpcTemplates": { "alias": "rpcTemplates"; "required": false; }; }, { "saveTemplate": "saveTemplate"; "useTemplate": "useTemplate"; }, never, never, false, never>;
}
