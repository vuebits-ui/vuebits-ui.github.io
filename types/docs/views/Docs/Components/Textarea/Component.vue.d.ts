declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        error: {
            type: import("vue").PropType<string | null | undefined>;
            default: null;
        };
        hint: {
            type: import("vue").PropType<string | null | undefined>;
            default: null;
        };
        noHint: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        rounded: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        roundedLg: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        round: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        bordered: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        placeholder: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        type: {
            type: import("vue").PropType<string>;
            default: string;
        };
        required: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        maxlength: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        rows: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        label: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        leftIcon: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        rightIcon: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        leftIconClickable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        rightIconClickable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        leftIconColor: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        rightIconColor: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        width: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
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
        fieldClasses(): import("../../../../../helpers/css-classes").CssClass[];
        hintClasses(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        setFocusStatus(isFocused: boolean): void;
        onFocus(): void;
        onBlur(): void;
        input(e: any): void;
        onLeftIconClick(): void;
        onRightIconClick(): void;
        enter(e: any): void;
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
        maxlength: string | number | null;
        label: string | null;
        leftIconClickable: boolean;
        rightIconClickable: boolean;
        leftIconColor: string | null;
        rightIconColor: string | null;
        rows: string | number | null;
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
        maxlength: string | number | null;
        label: string | null;
        leftIconClickable: boolean;
        rightIconClickable: boolean;
        leftIconColor: string | null;
        rightIconColor: string | null;
        rows: string | number | null;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
