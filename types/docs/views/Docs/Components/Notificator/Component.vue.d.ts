declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        items: {
            type: import("vue").PropType<import("../../../../../components/Notificator/Component.vue").Notification[]>;
            required: true;
        };
        size: {
            type: import("vue").PropType<"lg" | "sm" | "md">;
            default: string;
            validator: (val: string) => boolean;
        };
        width: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        rounded: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, unknown, unknown, {}, {
        removeNotification(item: import("../../../../../components/Notificator/Component.vue").Notification): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove-notification"[], "remove-notification", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        size: "lg" | "sm" | "md";
        rounded: boolean;
        width: number | null;
        items: import("../../../../../components/Notificator/Component.vue").Notification[];
    } & {}>, {
        size: "lg" | "sm" | "md";
        rounded: boolean;
        width: number | null;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
