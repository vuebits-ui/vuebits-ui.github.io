import { CssClass } from '@/helpers/css-classes';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    spacingsSize: {
        type: PropType<"lg" | "sm" | "md" | "no">;
        default: string;
        validator: (val: string) => boolean;
    };
}, unknown, unknown, {
    classes(): CssClass[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    spacingsSize: "lg" | "sm" | "md" | "no";
} & {}>, {
    spacingsSize: "lg" | "sm" | "md" | "no";
}>;
export default _default;
