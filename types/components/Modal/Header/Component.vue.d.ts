import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    hideBorder: {
        type: PropType<boolean>;
        default: boolean;
    };
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
    color: {
        type: PropType<string | null>;
        default: null;
    };
}, {
    themeClass: import("vue").ComputedRef<{
        'is-dark': any;
        'is-light': any;
    }>;
}, unknown, {
    classes(): CssClass[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    elevated: boolean;
    hideBorder: boolean;
    dark: boolean;
    light: boolean;
    color: string | null;
} & {}>, {
    elevated: boolean;
    hideBorder: boolean;
    dark: boolean;
    light: boolean;
    color: string | null;
}>;
export default _default;
