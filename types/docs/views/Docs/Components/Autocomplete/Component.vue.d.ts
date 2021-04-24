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
            type: import("vue").PropType<import("../../../../../components/Autocomplete/models").AutocompleteSelectedItem | null>;
            default: null;
        };
        items: {
            type: import("vue").PropType<import("../../../../../components/Autocomplete/models").AutocompleteItem[]>;
            required: true;
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
        min: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        max: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        maxlength: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        step: {
            type: import("vue").PropType<number>;
            default: number;
        };
        label: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        width: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        leftIcon: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        leftIconClickable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        leftIconColor: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        maxHeight: {
            type: import("vue").PropType<number>;
            default: number;
        };
        listPosition: {
            type: import("vue").PropType<"top" | "bottom">;
            default: string;
            validator: (val: string) => boolean;
        };
        itemsLoading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        itemsError: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        itemsReloadable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        textarea: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        rows: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        noMatchingItemsText: {
            type: import("vue").PropType<string>;
            default: string;
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
        isFocused: boolean;
        isExpanded: boolean;
        listClicked: boolean;
        activeItemKey: string | number | null;
    }, {
        computedNoMatchingItemsText(): string;
        component(): any;
        filteredItems(): import("../../../../../components/Autocomplete/models").AutocompleteItem[];
        itemsClasses(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        scrollToActiveItem(): void;
        goToPrevious(): void;
        goToNext(): void;
        select(item: import("../../../../../components/Autocomplete/models").AutocompleteItem): void;
        selectActiveItem(): void;
        closeList(): void;
        itemClasses(item: import("../../../../../components/Autocomplete/models").AutocompleteItem): import("../../../../../helpers/css-classes").CssClass[];
        cleanSelection(): void;
        reload(): void;
        input(value: any): void;
        focus(): void;
        blur(): void;
        enter(value: any): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur" | "focus" | "input" | "select" | "enter" | "click-left-icon" | "click-right-icon" | "reload" | "update")[], "update:modelValue" | "blur" | "focus" | "input" | "select" | "enter" | "click-left-icon" | "click-right-icon" | "reload" | "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        type: string;
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        modelValue: import("../../../../../components/Autocomplete/models").AutocompleteSelectedItem | null;
        width: number | null;
        dark: boolean;
        light: boolean;
        error: string | null | undefined;
        disabled: boolean;
        leftIcon: string | null;
        items: import("../../../../../components/Autocomplete/models").AutocompleteItem[];
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
        leftIconColor: string | null;
        rows: string | number | null;
        maxHeight: number;
        listPosition: "top" | "bottom";
        itemsLoading: boolean;
        itemsError: boolean;
        itemsReloadable: boolean;
        textarea: boolean;
        noMatchingItemsText: string;
    } & {}>, {
        type: string;
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        modelValue: import("../../../../../components/Autocomplete/models").AutocompleteSelectedItem | null;
        width: number | null;
        dark: boolean;
        light: boolean;
        error: string | null | undefined;
        disabled: boolean;
        leftIcon: string | null;
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
        leftIconColor: string | null;
        rows: string | number | null;
        maxHeight: number;
        listPosition: "top" | "bottom";
        itemsLoading: boolean;
        itemsError: boolean;
        itemsReloadable: boolean;
        textarea: boolean;
        noMatchingItemsText: string;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
