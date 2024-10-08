import * as React from 'react';
import { JsonFormFieldProps, JsonFormFieldState } from './json-form.models.js';
declare const _default: {
    new <P extends JsonFormFieldProps>(props: P): {
        componentDidMount(): void;
        onChangeValidate(e: any, forceUpdate?: boolean): void;
        defaultValue(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends keyof JsonFormFieldState>(state: JsonFormFieldState | ((prevState: Readonly<JsonFormFieldState>, props: Readonly<P>) => JsonFormFieldState | Pick<JsonFormFieldState, K>) | Pick<JsonFormFieldState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<P>;
        state: Readonly<JsonFormFieldState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<JsonFormFieldState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<JsonFormFieldState>): any;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<JsonFormFieldState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<JsonFormFieldState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<JsonFormFieldState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
