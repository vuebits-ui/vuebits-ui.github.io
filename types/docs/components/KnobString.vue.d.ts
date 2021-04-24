import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string>;
        required: true;
    };
    label: {
        type: PropType<string>;
        required: true;
    };
}, unknown, unknown, {}, {
    updateModelValue(value: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string;
    label: string;
} & {}>, {}>;
export default _default;
