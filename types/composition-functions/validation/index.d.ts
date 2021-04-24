import { PropType, Ref } from 'vue';
export declare const validationProps: {
    error: {
        type: PropType<string | null | undefined>;
        default: null;
    };
    hint: {
        type: PropType<string | null | undefined>;
        default: null;
    };
    noHint: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare function useValidation(error: Ref, hint: Ref): {
    validationBorderClass: import("vue").ComputedRef<{
        'is-bordered': any;
        'has-border-color-error': any;
    }>;
    hintText: import("vue").ComputedRef<any>;
    validationHintClass: import("vue").ComputedRef<{
        'has-color-error': any;
    }>;
};
