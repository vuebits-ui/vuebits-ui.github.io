declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        headers: {
            type: import("vue").PropType<import("../../../../../components/Table/models").TableHeader[]>;
            required: true;
        };
        items: {
            type: import("vue").PropType<{
                [x: string]: any;
            }[]>;
            required: true;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        headers: import("../../../../../components/Table/models").TableHeader[];
        items: {
            [x: string]: any;
        }[];
    } & {}>, {}>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
