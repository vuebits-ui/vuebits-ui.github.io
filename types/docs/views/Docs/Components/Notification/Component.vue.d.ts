declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
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
        type: {
            type: import("vue").PropType<import("../../../../../components/Notification/models").NotificationTypeName>;
            default: import("../../../../../components/Notification/models").NotificationType;
        };
        message: {
            type: import("vue").PropType<string>;
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
    }, {
        roundedClass: import("vue").ComputedRef<{
            'is-rounded': any;
            'is-rounded-lg': any;
            'is-round': any;
        }>;
    }, unknown, {
        style(): any;
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        remove(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        type: import("../../../../../components/Notification/models").NotificationTypeName;
        size: "lg" | "sm" | "md";
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        width: number | null;
        message: string;
    } & {}>, {
        type: import("../../../../../components/Notification/models").NotificationTypeName;
        size: "lg" | "sm" | "md";
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        width: number | null;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
