import { FormOption } from './json-form.models';
declare function merge(schema: any, form: any[], ignore: {
    [key: string]: boolean;
}, options: FormOption, isReadonly?: boolean): any[];
declare const utils: {
    merge: typeof merge;
};
export default utils;
