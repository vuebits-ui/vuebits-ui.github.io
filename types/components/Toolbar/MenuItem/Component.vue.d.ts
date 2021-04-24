import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    href: {
        type: PropType<string | null>;
        default: null;
    };
    newWindow: {
        type: PropType<boolean>;
        default: boolean;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    component: import("vue").ComputedRef<"RouterLink" | "a" | "span">;
    target: import("vue").ComputedRef<"_blank" | "_self">;
}, unknown, {
    classes(): CssClass[];
}, {
    onClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    to: null;
    href: string | null;
    newWindow: boolean;
    active: boolean;
} & {}>, {
    to: null;
    href: string | null;
    newWindow: boolean;
    active: boolean;
}>;
export default _default;
