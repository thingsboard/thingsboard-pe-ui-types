export interface ExceptionData {
    message?: string;
    name?: string;
    lineNumber?: number;
    columnNumber?: number;
}
export declare const parseException: (exception: any, lineOffset?: number) => ExceptionData;
export declare const parseError: (err: any) => string;
