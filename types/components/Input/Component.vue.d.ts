import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
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
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    placeholder: {
        type: PropType<string | null>;
        default: null;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    min: {
        type: PropType<string | number | null>;
        default: null;
    };
    max: {
        type: PropType<string | number | null>;
        default: null;
    };
    maxlength: {
        type: PropType<string | number | null>;
        default: null;
    };
    step: {
        type: PropType<number>;
        default: number;
    };
    label: {
        type: PropType<string | null>;
        default: null;
    };
    width: {
        type: PropType<number | null>;
        default: null;
    };
    leftIcon: {
        type: PropType<string | null>;
        default: null;
    };
    rightIcon: {
        type: PropType<string | null>;
        default: null;
    };
    leftIconClickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    rightIconClickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    leftIconColor: {
        type: PropType<string | null>;
        default: null;
    };
    rightIconColor: {
        type: PropType<string | null>;
        default: null;
    };
    rememberCaretPosition: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    themeClass: import("vue").ComputedRef<{
        'is-dark': any;
        'is-light': any;
    }>;
    borderedClass: import("vue").ComputedRef<{
        'is-bordered': any;
    }>;
    roundedClass: import("vue").ComputedRef<{
        'is-rounded': any;
        'is-rounded-lg': any;
        'is-round': any;
    }>;
    validationBorderClass: import("vue").ComputedRef<{
        'is-bordered': any;
        'has-border-color-error': any;
    }>;
    hintText: import("vue").ComputedRef<any>;
    validationHintClass: import("vue").ComputedRef<{
        'has-color-error': any;
    }>;
}, {
    isFocused: boolean;
}, {
    widthStyle(): {
        [x: string]: any;
    };
    styles(): {
        [x: string]: any;
    };
    fieldClasses(): CssClass[];
    hintClasses(): CssClass[];
}, {
    setFocusStatus(isFocused: boolean): void;
    onFocus(): void;
    onBlur(): void;
    onInput(e: any): void;
    enter(e: any): void;
    onLeftIconClick(): void;
    onRightIconClick(): void;
    focus(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur" | "focus" | "input" | "enter" | "click-left-icon" | "click-right-icon")[], "update:modelValue" | "blur" | "focus" | "input" | "enter" | "click-left-icon" | "click-right-icon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    modelValue: string | number | null;
    width: number | null;
    dark: boolean;
    light: boolean;
    error: string | null | undefined;
    disabled: boolean;
    leftIcon: string | null;
    rightIcon: string | null;
    hint: string | null | undefined;
    noHint: boolean;
    placeholder: string | null;
    required: boolean;
    min: string | number | null;
    max: string | number | null;
    maxlength: string | number | null;
    step: number;
    label: string | null;
    leftIconClickable: boolean;
    rightIconClickable: boolean;
    leftIconColor: string | null;
    rightIconColor: string | null;
    rememberCaretPosition: boolean;
} & {}>, {
    type: string;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    modelValue: string | number | null;
    width: number | null;
    dark: boolean;
    light: boolean;
    error: string | null | undefined;
    disabled: boolean;
    leftIcon: string | null;
    rightIcon: string | null;
    hint: string | null | undefined;
    noHint: boolean;
    placeholder: string | null;
    required: boolean;
    min: string | number | null;
    max: string | number | null;
    maxlength: string | number | null;
    step: number;
    label: string | null;
    leftIconClickable: boolean;
    rightIconClickable: boolean;
    leftIconColor: string | null;
    rightIconColor: string | null;
    rememberCaretPosition: boolean;
}>;
export default _default;
