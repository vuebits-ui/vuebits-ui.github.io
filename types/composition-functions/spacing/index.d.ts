import { PropType, Ref } from 'vue';
export declare type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null;
export declare const spacingProps: {
    padding: {
        type: PropType<Spacing>;
        default: null;
    };
    margin: {
        type: PropType<Spacing>;
        default: null;
    };
};
export declare function useSpacing(padding: Ref, margin: Ref): import("vue").ComputedRef<{
    [x: string]: any;
}>;
