import { JsonSettingsSchema } from '@shared/models/widget.models';
export declare function initSchema(): JsonSettingsSchema;
export declare function addGroupInfo(schema: JsonSettingsSchema, title: string): void;
export declare function addToSchema(schema: JsonSettingsSchema, newSchema: JsonSettingsSchema): void;
export declare function mergeSchemes(schemes: JsonSettingsSchema[]): JsonSettingsSchema;
export declare function addCondition(schema: JsonSettingsSchema, condition: string, exclude?: string[]): JsonSettingsSchema;
