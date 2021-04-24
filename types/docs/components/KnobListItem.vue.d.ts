import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    items: {
        type: PropType<any[]>;
        required: true;
    };
    label: {
        type: PropType<string>;
        required: true;
    };
}, unknown, unknown, {
    listItems(): any[];
}, {
    updateModelValue(item: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "select")[], "update:modelValue" | "change" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | null;
    items: any[];
    label: string;
} & {}>, {
    modelValue: string | number | null;
}>;
export default _default;
