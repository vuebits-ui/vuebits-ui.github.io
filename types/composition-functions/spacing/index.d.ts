import { Ref } from 'vue';
import { marginProps, useMargin } from './margin';
import { paddingProps, usePadding } from './padding';
export declare const spacingProps: {
    padding: {
        type: import("vue").PropType<import("./models").Spacing>;
        default: null;
    };
    margin: {
        type: import("vue").PropType<import("./models").Spacing>;
        default: null;
    };
};
export declare function useSpacing(padding: Ref, margin: Ref): import("vue").ComputedRef<{
    [x: string]: any;
}>;
export { marginProps, paddingProps, useMargin, usePadding };
