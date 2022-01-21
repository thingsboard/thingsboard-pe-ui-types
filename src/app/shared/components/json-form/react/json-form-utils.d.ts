import { FormOption, JsonFormData, JsonSchemaData, SchemaValidationResult } from './json-form.models';
declare function validateBySchema(schema: any, value: any): SchemaValidationResult;
declare function validate(form: any, value: any): SchemaValidationResult;
declare function merge(schema: any, form: any[], ignore: {
    [key: string]: boolean;
}, options: FormOption, isReadonly?: boolean): any[];
declare function selectOrSet(projection: string | (string | number)[], obj: any, valueToSet?: any): any;
declare function updateValue(projection: string | (string | number)[], obj: any, valueToSet: any): boolean;
declare function traverseSchema(schema: JsonSchemaData, fn: (prop: any, path: string[]) => any, path?: string[], ignoreArrays?: boolean): void;
declare function traverseForm(form: JsonFormData, fn: (form: JsonFormData) => any): void;
declare const utils: {
    validateBySchema: typeof validateBySchema;
    validate: typeof validate;
    merge: typeof merge;
    updateValue: typeof updateValue;
    selectOrSet: typeof selectOrSet;
    traverseSchema: typeof traverseSchema;
    traverseForm: typeof traverseForm;
};
export default utils;
