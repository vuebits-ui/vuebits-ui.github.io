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
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    modelValue: {
        type: PropType<boolean>;
        required: true;
    };
    id: {
        type: PropType<string | number>;
        required: true;
    };
    label: {
        type: PropType<string | null>;
        default: null;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {
    selectedValue: {
        get(): boolean;
        set(val: boolean): void;
    };
    checkmarkClasses(): CssClass[];
}, {
    update(val: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    modelValue: boolean;
    dark: boolean;
    light: boolean;
    color: string;
    disabled: boolean;
    label: string | null;
    id: string | number;
} & {}>, {
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    dark: boolean;
    light: boolean;
    color: string;
    disabled: boolean;
    label: string | null;
}>;
export default _default;
