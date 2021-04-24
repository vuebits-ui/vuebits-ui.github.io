import { PropType, Ref } from 'vue';
export declare const linkProps: {
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
};
export declare function useLink(to: Ref, href: Ref<string | null>, newWindow: Ref<boolean>): {
    component: import("vue").ComputedRef<"RouterLink" | "a" | "span">;
    target: import("vue").ComputedRef<"_blank" | "_self">;
};
