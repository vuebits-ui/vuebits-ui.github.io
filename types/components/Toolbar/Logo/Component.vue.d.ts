import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: PropType<string>;
        required: true;
    };
    alt: {
        type: PropType<string>;
        default: null;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    href: {
        type: PropType<string>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: null;
    };
}, unknown, unknown, {
    component(): string;
}, {
    onClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    to: null;
    href: string;
    src: string;
    alt: string;
    title: string;
} & {}>, {
    to: null;
    href: string;
    alt: string;
    title: string;
}>;
export default _default;
