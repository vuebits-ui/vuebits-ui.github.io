import { PropType, Ref } from 'vue';
import { Spacing } from '../models';
export declare const paddingProps: {
    padding: {
        type: PropType<Spacing>;
        default: null;
    };
};
export declare function usePadding(padding: Ref): import("vue").ComputedRef<{
    [x: string]: any;
}>;
