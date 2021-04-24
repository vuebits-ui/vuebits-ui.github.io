declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        bordered: {
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
        modelValue: {
            type: import("vue").PropType<boolean>;
            required: true;
        };
        id: {
            type: import("vue").PropType<string | number>;
            required: true;
        };
        label: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        color: {
            type: import("vue").PropType<string>;
            default: string;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, unknown, unknown, {
        selectedValue: {
            get(): boolean;
            set(val: boolean): void;
        };
        checkmarkClasses(): import("../../../../../helpers/css-classes").CssClass[];
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
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
