declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        padding: {
            type: import("vue").PropType<import("../../../../../composition-functions/spacing/models").Spacing>;
            default: null;
        };
        bordered: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        elevated: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
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
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
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
        fixedHeader: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        expandable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        multipleExpand: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hideMainContentOnExpand: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        expandOnRowClick: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, {
        themeClass: import("vue").ComputedRef<{
            'is-dark': any;
            'is-light': any;
        }>;
        roundedClass: import("vue").ComputedRef<{
            'is-rounded': any;
            'is-rounded-lg': any;
            'is-round': any;
        }>;
        elevatedClass: import("vue").ComputedRef<{
            'is-elevated': any;
        }>;
        borderedClass: import("vue").ComputedRef<{
            'is-bordered': any;
        }>;
        paddingClass: import("vue").ComputedRef<{
            [x: string]: any;
        }>;
    }, {
        expandedItems: {
            [x: string]: any;
        }[];
    }, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
        headerCellClasses(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        isExpanded(item: {
            [x: string]: any;
        }): boolean;
        getExpandIcon(item: {
            [x: string]: any;
        }): string;
        toggleExpansion(item: {
            [x: string]: any;
        }): void;
        handleRowClick(item: {
            [x: string]: any;
        }): void;
        rowClasses(item: {
            [x: string]: any;
        }): import("../../../../../helpers/css-classes").CssClass[];
        cellClasses(item: {
            [x: string]: any;
        }, isActionCell?: boolean): import("../../../../../helpers/css-classes").CssClass[];
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        elevated: boolean;
        dark: boolean;
        light: boolean;
        padding: import("../../../../../composition-functions/spacing/models").Spacing;
        headers: import("../../../../../components/Table/models").TableHeader[];
        items: {
            [x: string]: any;
        }[];
        fixedHeader: boolean;
        expandable: boolean;
        multipleExpand: boolean;
        hideMainContentOnExpand: boolean;
        expandOnRowClick: boolean;
    } & {}>, {
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        elevated: boolean;
        dark: boolean;
        light: boolean;
        padding: import("../../../../../composition-functions/spacing/models").Spacing;
        fixedHeader: boolean;
        expandable: boolean;
        multipleExpand: boolean;
        hideMainContentOnExpand: boolean;
        expandOnRowClick: boolean;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
