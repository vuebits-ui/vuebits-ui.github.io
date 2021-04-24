import { CssClass } from '@/helpers/css-classes';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    elementsXs: {
        type: PropType<string | number | null>;
        default: null;
    };
    elementsSm: {
        type: PropType<string | number | null>;
        default: null;
    };
    elementsMd: {
        type: PropType<string | number | null>;
        default: null;
    };
    elementsLg: {
        type: PropType<string | number | null>;
        default: null;
    };
    elementsXl: {
        type: PropType<string | number | null>;
        default: null;
    };
    list: {
        type: PropType<boolean>;
        default: boolean;
    };
    spacingsSize: {
        type: PropType<"lg" | "sm" | "md" | "no">;
        default: string;
        validator: (val: string) => boolean;
    };
}, unknown, unknown, {
    classes(): CssClass[];
    rootTag(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    elementsXs: string | number | null;
    elementsSm: string | number | null;
    elementsMd: string | number | null;
    elementsLg: string | number | null;
    elementsXl: string | number | null;
    list: boolean;
    spacingsSize: "lg" | "sm" | "md" | "no";
} & {}>, {
    elementsXs: string | number | null;
    elementsSm: string | number | null;
    elementsMd: string | number | null;
    elementsLg: string | number | null;
    elementsXl: string | number | null;
    list: boolean;
    spacingsSize: "lg" | "sm" | "md" | "no";
}>;
export default _default;
