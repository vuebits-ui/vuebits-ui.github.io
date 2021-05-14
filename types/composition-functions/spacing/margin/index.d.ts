import { PropType, Ref } from 'vue';
import { Spacing } from '../models';
export declare const marginProps: {
    margin: {
        type: PropType<Spacing>;
        default: null;
    };
};
export declare function useMargin(margin: Ref): import("vue").ComputedRef<{
    [x: string]: any;
}>;
