declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
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
        items: {
            type: import("vue").PropType<import("../../../../../components/Select/models").SelectItem[]>;
            required: true;
        };
        hideArrow: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        label: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        placeholder: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        maxHeight: {
            type: import("vue").PropType<number>;
            default: number;
        };
        persistent: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        labelColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        search: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        searchPlaceholder: {
            type: import("vue").PropType<string | null>;
            default: null;
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
    }, {
        isExpanded: boolean;
        searchQuery: string;
    }, {
        computedSearchPlaceholder(): string;
        classes(): import("../../../../../helpers/css-classes").CssClass[];
        labelClasses(): import("../../../../../helpers/css-classes").CssClass[];
        arrowClasses(): import("../../../../../helpers/css-classes").CssClass[];
        dropdownClasses(): import("../../../../../helpers/css-classes").CssClass[];
        selectedItem(): import("../../../../../components/Select/models").SelectItem | null;
        computedPlaceholder(): string | null;
        selectedItemText(): string | null;
        filteredItems(): import("../../../../../components/Select/models").SelectItem[];
    }, {
        select(item: import("../../../../../components/Select/models").SelectItem): void;
        toggle(): void;
        itemClasses(item: import("../../../../../components/Select/models").SelectItem): import("../../../../../helpers/css-classes").CssClass[];
        onClickOutside(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "select")[], "update:modelValue" | "change" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        persistent: boolean;
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        modelValue: string | number | null;
        dark: boolean;
        light: boolean;
        disabled: boolean;
        items: import("../../../../../components/Select/models").SelectItem[];
        placeholder: string | null;
        label: string | null;
        maxHeight: number;
        hideArrow: boolean;
        labelColor: string;
        search: boolean;
        searchPlaceholder: string | null;
    } & {}>, {
        persistent: boolean;
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        modelValue: string | number | null;
        dark: boolean;
        light: boolean;
        disabled: boolean;
        placeholder: string | null;
        label: string | null;
        maxHeight: number;
        hideArrow: boolean;
        labelColor: string;
        search: boolean;
        searchPlaceholder: string | null;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
