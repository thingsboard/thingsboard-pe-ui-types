import { HasEntityDebugSettings, HasTenantId, HasVersion } from '@shared/models/entity.models';
import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { CalculatedFieldId } from '@shared/models/id/calculated-field-id';
import { EntityId } from '@shared/models/id/entity-id';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import { EntityType } from '@shared/models/entity-type.models';
import { AliasFilterType } from '@shared/models/alias.models';
import { Observable } from 'rxjs';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { AceHighlightRules } from '@shared/models/ace/ace.models';
import { JobStatus } from '@shared/models/job.models';
export interface CalculatedField extends Omit<BaseData<CalculatedFieldId>, 'label'>, HasVersion, HasEntityDebugSettings, HasTenantId, ExportableEntity<CalculatedFieldId> {
    configuration: CalculatedFieldConfiguration;
    type: CalculatedFieldType;
    entityId: EntityId;
}
export declare enum CalculatedFieldType {
    SIMPLE = "SIMPLE",
    SCRIPT = "SCRIPT"
}
export declare const CalculatedFieldTypeTranslations: Map<CalculatedFieldType, string>;
export interface CalculatedFieldConfiguration {
    type: CalculatedFieldType;
    expression: string;
    arguments: Record<string, CalculatedFieldArgument>;
    output: CalculatedFieldOutput;
}
export interface CalculatedFieldOutput {
    type: OutputType;
    name: string;
    scope?: AttributeScope;
    decimalsByDefault?: number;
}
export declare enum ArgumentEntityType {
    Current = "CURRENT",
    Device = "DEVICE",
    Asset = "ASSET",
    Customer = "CUSTOMER",
    Tenant = "TENANT",
    Owner = "CURRENT_OWNER"
}
export declare const ArgumentEntityTypeTranslations: Map<ArgumentEntityType, string>;
export declare enum ArgumentType {
    Attribute = "ATTRIBUTE",
    LatestTelemetry = "TS_LATEST",
    Rolling = "TS_ROLLING"
}
export declare enum TestArgumentType {
    Single = "SINGLE_VALUE",
    Rolling = "TS_ROLLING"
}
export declare const TestArgumentTypeMap: Map<ArgumentType, TestArgumentType>;
export declare enum OutputType {
    Attribute = "ATTRIBUTES",
    Timeseries = "TIME_SERIES"
}
export declare const OutputTypeTranslations: Map<OutputType, string>;
export declare const ArgumentTypeTranslations: Map<ArgumentType, string>;
export declare enum CFArgumentDynamicSourceType {
    CURRENT_OWNER = "CURRENT_OWNER"
}
export interface CalculatedFieldArgument {
    refEntityKey: RefEntityKey;
    defaultValue?: string;
    refEntityId?: RefEntityId;
    refDynamicSource?: CFArgumentDynamicSourceType;
    limit?: number;
    timeWindow?: number;
}
export interface RefEntityKey {
    key: string;
    type: ArgumentType;
    scope?: AttributeScope;
}
export interface RefEntityId {
    entityType: ArgumentEntityType;
    id: string;
}
export interface CalculatedFieldArgumentValue extends CalculatedFieldArgument {
    argumentName: string;
    entityName?: string;
}
export type CalculatedFieldTestScriptFn = (calculatedField: CalculatedField, argumentsObj?: Record<string, unknown>, closeAllOnSave?: boolean) => Observable<string>;
export interface CalculatedFieldTestScriptInputParams {
    arguments: CalculatedFieldEventArguments;
    expression: string;
}
export interface ArgumentEntityTypeParams {
    title: string;
    entityType: EntityType;
}
export declare const ArgumentEntityTypeParamsMap: Map<ArgumentEntityType, ArgumentEntityTypeParams>;
export declare const getCalculatedFieldCurrentEntityFilter: (entityName: string, entityId: EntityId) => {
    assetTypes: string[];
    type: AliasFilterType;
    deviceTypes?: undefined;
    singleEntity?: undefined;
} | {
    deviceTypes: string[];
    type: AliasFilterType;
    assetTypes?: undefined;
    singleEntity?: undefined;
} | {
    type: AliasFilterType;
    singleEntity: EntityId;
    assetTypes?: undefined;
    deviceTypes?: undefined;
};
export interface CalculatedFieldArgumentValueBase {
    argumentName: string;
    type: ArgumentType;
}
export interface CalculatedFieldAttributeArgumentValue<ValueType = unknown> extends CalculatedFieldArgumentValueBase {
    ts: number;
    value: ValueType;
}
export interface CalculatedFieldLatestTelemetryArgumentValue<ValueType = unknown> extends CalculatedFieldArgumentValueBase {
    ts: number;
    value: ValueType;
}
export interface CalculatedFieldRollingTelemetryArgumentValue<ValueType = unknown> extends CalculatedFieldArgumentValueBase {
    timeWindow: {
        startTs: number;
        endTs: number;
    };
    values: CalculatedFieldSingleArgumentValue<ValueType>[];
}
export interface CalculatedFieldReprocessingValidation {
    isValid: boolean;
    message: string;
    lastJobStatus: JobStatus;
}
export type CalculatedFieldSingleArgumentValue<ValueType = unknown> = CalculatedFieldAttributeArgumentValue<ValueType> & CalculatedFieldLatestTelemetryArgumentValue<ValueType>;
export type CalculatedFieldArgumentEventValue<ValueType = unknown> = CalculatedFieldAttributeArgumentValue<ValueType> | CalculatedFieldLatestTelemetryArgumentValue<ValueType> | CalculatedFieldRollingTelemetryArgumentValue<ValueType>;
export type CalculatedFieldEventArguments<ValueType = unknown> = Record<string, CalculatedFieldArgumentEventValue<ValueType>>;
export declare const CalculatedFieldCtxLatestTelemetryArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
    children: {
        ts: {
            meta: string;
            type: string;
            description: string;
        };
        value: {
            meta: string;
            type: string;
            description: string;
        };
    };
};
export declare const CalculatedFieldCtxAttributeValueArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
    children: {
        ts: {
            meta: string;
            type: string;
            description: string;
        };
        value: {
            meta: string;
            type: string;
            description: string;
        };
    };
};
export declare const CalculatedFieldLatestTelemetryArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
};
export declare const CalculatedFieldAttributeValueArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
};
export declare const CalculatedFieldRollingValueArgumentFunctionsAutocomplete: {
    max: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    min: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    mean: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    avg: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    std: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    median: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    count: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    last: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    first: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    sum: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    merge: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    mergeAll: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
};
export declare const CalculatedFieldRollingValueArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
    children: {
        values: {
            meta: string;
            type: string;
            description: string;
        };
        timeWindow: {
            meta: string;
            type: string;
            description: string;
            children: {
                startTs: {
                    meta: string;
                    type: string;
                    description: string;
                };
                endTs: {
                    meta: string;
                    type: string;
                    description: string;
                };
            };
        };
        max: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        min: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        mean: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        avg: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        std: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        median: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        count: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        last: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        first: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        sum: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        merge: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        mergeAll: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
    };
};
export declare const getCalculatedFieldArgumentsEditorCompleter: (argumentsObj: Record<string, CalculatedFieldArgument>) => TbEditorCompleter;
export declare const getCalculatedFieldArgumentsHighlights: (argumentsObj: Record<string, CalculatedFieldArgument>) => AceHighlightRules;
export declare const calculatedFieldDefaultScript: string;
