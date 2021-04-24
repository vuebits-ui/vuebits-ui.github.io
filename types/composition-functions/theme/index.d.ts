import { PropType, Ref } from 'vue';
export declare const themeProps: {
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare function useTheme(dark: Ref, light: Ref): import("vue").ComputedRef<{
    'is-dark': any;
    'is-light': any;
}>;
