import { PropType, Ref } from 'vue';
export declare const borderedProps: {
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare function useBordered(bordered: Ref): import("vue").ComputedRef<{
    'is-bordered': any;
}>;
