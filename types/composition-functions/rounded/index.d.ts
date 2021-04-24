import { PropType, Ref } from 'vue';
export declare const roundedProps: {
    rounded: {
        type: PropType<boolean>;
        default: boolean;
    };
    roundedLg: {
        type: PropType<boolean>;
        default: boolean;
    };
    round: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare function useRounded(rounded: Ref, roundedLg: Ref, round: Ref): import("vue").ComputedRef<{
    'is-rounded': any;
    'is-rounded-lg': any;
    'is-round': any;
}>;
