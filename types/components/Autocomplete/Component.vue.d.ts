import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
import { AutocompleteItem, AutocompleteSelectedItem } from './models';
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
        type: PropType<AutocompleteSelectedItem | null>;
        default: null;
    };
    items: {
        type: PropType<AutocompleteItem[]>;
        required: true;
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
    leftIconClickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    leftIconColor: {
        type: PropType<string | null>;
        default: null;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    maxHeight: {
        type: PropType<number>;
        default: number;
    };
    listPosition: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (val: string) => boolean;
    };
    itemsLoading: {
        type: PropType<boolean>;
        default: boolean;
    };
    itemsError: {
        type: PropType<boolean>;
        default: boolean;
    };
    itemsReloadable: {
        type: PropType<boolean>;
        default: boolean;
    };
    textarea: {
        type: PropType<boolean>;
        default: boolean;
    };
    rows: {
        type: PropType<string | number | null>;
        default: null;
    };
    noMatchingItemsText: {
        type: PropType<string>;
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
    filteredItems(): AutocompleteItem[];
    itemsClasses(): CssClass[];
}, {
    scrollToActiveItem(): void;
    goToPrevious(): void;
    goToNext(): void;
    select(item: AutocompleteItem): void;
    selectActiveItem(): void;
    closeList(): void;
    itemClasses(item: AutocompleteItem): CssClass[];
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
    modelValue: AutocompleteSelectedItem | null;
    width: number | null;
    dark: boolean;
    light: boolean;
    error: string | null | undefined;
    disabled: boolean;
    leftIcon: string | null;
    items: AutocompleteItem[];
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
    modelValue: AutocompleteSelectedItem | null;
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
export default _default;
