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
    fixed: {
        type: PropType<boolean>;
        default: boolean;
    };
    absolute: {
        type: PropType<boolean>;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    themeClass: import("vue").ComputedRef<{
        'is-dark': any;
        'is-light': any;
    }>;
}, unknown, {
    classes(): CssClass[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dark: boolean;
    light: boolean;
    color: string;
    fixed: boolean;
    absolute: boolean;
} & {}>, {
    dark: boolean;
    light: boolean;
    color: string;
    fixed: boolean;
    absolute: boolean;
}>;
export default _default;
