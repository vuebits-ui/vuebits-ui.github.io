import { PropType, Ref } from 'vue';
export declare const elevatedProps: {
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare function useElevated(elevated: Ref): import("vue").ComputedRef<{
    'is-elevated': any;
}>;
