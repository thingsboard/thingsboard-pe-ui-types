import { BaseData } from '@shared/models/base-data';
import { RuleChainId } from '@shared/models/id/rule-chain-id';
import { RuleNodeId } from '@shared/models/id/rule-node-id';
import { ComponentDescriptor } from '@shared/models/component-descriptor.models';
import { FcEdge, FcNode } from 'ngx-flowchart';
import { Observable } from 'rxjs';
import { PageComponent } from '@shared/components/page.component';
import { AfterViewInit, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { RuleChainType } from '@shared/models/rule-chain.models';
import { DebugRuleNodeEventBody } from '@shared/models/event.models';
import { EntityTestScriptResult, HasEntityDebugSettings } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export interface RuleNodeConfiguration {
    [key: string]: any;
}
export interface RuleNode extends BaseData<RuleNodeId>, HasEntityDebugSettings {
    ruleChainId?: RuleChainId;
    type: string;
    name: string;
    singletonMode: boolean;
    queueName?: string;
    configurationVersion?: number;
    configuration: RuleNodeConfiguration;
    additionalInfo?: any;
}
export interface LinkLabel {
    name: string;
    value: string;
}
export interface RuleNodeDefinition {
    description: string;
    details: string;
    inEnabled: boolean;
    outEnabled: boolean;
    relationTypes: string[];
    customRelations: boolean;
    ruleChainNode?: boolean;
    defaultConfiguration: RuleNodeConfiguration;
    icon?: string;
    iconUrl?: string;
    docUrl?: string;
    uiResources?: string[];
    uiResourceLoadError?: string;
    configDirective?: string;
}
export interface RuleNodeConfigurationDescriptor {
    nodeDefinition: RuleNodeDefinition;
}
export interface IRuleNodeConfigurationComponent {
    ruleNodeId: string;
    ruleChainId: string;
    hasScript: boolean;
    disabled: boolean;
    testScriptLabel?: string;
    changeScript?: EventEmitter<void>;
    ruleChainType: RuleChainType;
    configuration: RuleNodeConfiguration;
    configurationChanged: Observable<RuleNodeConfiguration>;
    validate(): any;
    testScript?(debugEventBody?: DebugRuleNodeEventBody): any;
    [key: string]: any;
}
export declare abstract class RuleNodeConfigurationComponent extends PageComponent implements IRuleNodeConfigurationComponent, OnInit, AfterViewInit {
    ruleNodeId: string;
    ruleChainId: string;
    hasScript: boolean;
    ruleChainType: RuleChainType;
    configurationValue: RuleNodeConfiguration;
    private configurationSet;
    private disabledValue;
    protected destroyRef: DestroyRef;
    set disabled(value: boolean);
    set configuration(value: RuleNodeConfiguration);
    get configuration(): RuleNodeConfiguration;
    configurationChangedEmiter: EventEmitter<RuleNodeConfiguration>;
    configurationChanged: Observable<RuleNodeConfiguration>;
    protected constructor(...args: unknown[]);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    validate(): void;
    protected setupConfiguration(configuration: RuleNodeConfiguration): void;
    protected updateConfiguration(configuration: RuleNodeConfiguration): void;
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected validatorTriggers(): string[];
    protected onConfigurationChanged(updated: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected validateConfig(): boolean;
    protected onValidate(): void;
    protected abstract configForm(): UntypedFormGroup;
    protected abstract onConfigurationSet(configuration: RuleNodeConfiguration): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeConfigurationComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RuleNodeConfigurationComponent, never, never, {}, {}, never, never, false, never>;
}
export declare enum RuleNodeType {
    FILTER = "FILTER",
    ENRICHMENT = "ENRICHMENT",
    TRANSFORMATION = "TRANSFORMATION",
    ACTION = "ACTION",
    ANALYTICS = "ANALYTICS",
    EXTERNAL = "EXTERNAL",
    FLOW = "FLOW",
    UNKNOWN = "UNKNOWN",
    INPUT = "INPUT"
}
export declare const ruleNodeTypesLibrary: RuleNodeType[];
export interface RuleNodeTypeDescriptor {
    value: RuleNodeType;
    name: string;
    details: string;
    nodeClass: string;
    icon: string;
    special?: boolean;
}
export declare const ruleNodeTypeDescriptors: Map<RuleNodeType, RuleNodeTypeDescriptor>;
export interface RuleNodeComponentDescriptor extends ComponentDescriptor {
    type: RuleNodeType;
    configurationVersion: number;
    configurationDescriptor?: RuleNodeConfigurationDescriptor;
}
export interface FcRuleNodeType extends FcNode, HasEntityDebugSettings {
    component?: RuleNodeComponentDescriptor;
    singletonMode?: boolean;
    queueName?: string;
    nodeClass?: string;
    icon?: string;
    iconUrl?: string;
}
export interface FcRuleNode extends FcRuleNodeType {
    ruleNodeId?: RuleNodeId;
    additionalInfo?: any;
    configuration?: RuleNodeConfiguration;
    error?: string;
    highlighted?: boolean;
    componentClazz?: string;
    ruleChainType?: RuleChainType;
}
export interface FcRuleEdge extends FcEdge {
    labels?: string[];
}
export declare enum ScriptLanguage {
    JS = "JS",
    TBEL = "TBEL"
}
export interface TestScriptInputParams {
    script: string;
    scriptType: string;
    argNames: string[];
    msg: string;
    metadata: {
        [key: string]: string;
    };
    msgType: string;
}
export type TestScriptResult = EntityTestScriptResult;
export declare enum MessageType {
    POST_ATTRIBUTES_REQUEST = "POST_ATTRIBUTES_REQUEST",
    POST_TELEMETRY_REQUEST = "POST_TELEMETRY_REQUEST",
    TO_SERVER_RPC_REQUEST = "TO_SERVER_RPC_REQUEST",
    RPC_CALL_FROM_SERVER_TO_DEVICE = "RPC_CALL_FROM_SERVER_TO_DEVICE",
    RPC_QUEUED = "RPC_QUEUED",
    RPC_SENT = "RPC_SENT",
    RPC_DELIVERED = "RPC_DELIVERED",
    RPC_SUCCESSFUL = "RPC_SUCCESSFUL",
    RPC_TIMEOUT = "RPC_TIMEOUT",
    RPC_EXPIRED = "RPC_EXPIRED",
    RPC_FAILED = "RPC_FAILED",
    RPC_DELETED = "RPC_DELETED",
    ACTIVITY_EVENT = "ACTIVITY_EVENT",
    INACTIVITY_EVENT = "INACTIVITY_EVENT",
    CONNECT_EVENT = "CONNECT_EVENT",
    DISCONNECT_EVENT = "DISCONNECT_EVENT",
    ENTITY_CREATED = "ENTITY_CREATED",
    ENTITY_UPDATED = "ENTITY_UPDATED",
    ENTITY_DELETED = "ENTITY_DELETED",
    ENTITY_ASSIGNED = "ENTITY_ASSIGNED",
    ENTITY_UNASSIGNED = "ENTITY_UNASSIGNED",
    ATTRIBUTES_UPDATED = "ATTRIBUTES_UPDATED",
    ATTRIBUTES_DELETED = "ATTRIBUTES_DELETED",
    ALARM_ACKNOWLEDGED = "ALARM_ACKNOWLEDGED",
    ALARM_CLEARED = "ALARM_CLEARED",
    ALARM_ASSIGNED = "ALARM_ASSIGNED",
    ALARM_UNASSIGNED = "ALARM_UNASSIGNED",
    COMMENT_CREATED = "COMMENT_CREATED",
    COMMENT_UPDATED = "COMMENT_UPDATED",
    ADDED_TO_GROUP = "ADDED_TO_GROUP",
    REMOVED_FROM_GROUP = "REMOVED_FROM_GROUP",
    ENTITY_ASSIGNED_FROM_TENANT = "ENTITY_ASSIGNED_FROM_TENANT",
    ENTITY_ASSIGNED_TO_TENANT = "ENTITY_ASSIGNED_TO_TENANT",
    TIMESERIES_UPDATED = "TIMESERIES_UPDATED",
    TIMESERIES_DELETED = "TIMESERIES_DELETED",
    ADDED_TO_ENTITY_GROUP = "ADDED_TO_ENTITY_GROUP",
    REMOVED_FROM_ENTITY_GROUP = "REMOVED_FROM_ENTITY_GROUP",
    REST_API_REQUEST = "REST_API_REQUEST",
    FIRMWARE_UPDATED = "FIRMWARE_UPDATED",
    SOFTWARE_UPDATED = "SOFTWARE_UPDATED",
    generateReport = "generateReport",
    generateDashboardReport = "generateDashboardReport",
    OWNER_CHANGED = "OWNER_CHANGED"
}
export declare const messageTypeNames: Map<MessageType, string>;
export declare const ruleChainNodeClazz = "org.thingsboard.rule.engine.flow.TbRuleChainInputNode";
export declare const outputNodeClazz = "org.thingsboard.rule.engine.flow.TbRuleChainOutputNode";
export declare function getRuleNodeHelpLink(component: RuleNodeComponentDescriptor): string;
