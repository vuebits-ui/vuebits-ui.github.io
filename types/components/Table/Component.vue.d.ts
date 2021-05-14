import { PropType } from 'vue';
import { TableHeader } from './models';
import { CssClass } from '@/helpers/css-classes';
declare type TableItem = {
    [key in string]: any;
};
declare const _default: import("vue").DefineComponent<{
    padding: {
        type: PropType<import("../../composition-functions/spacing/models").Spacing>;
        default: null;
    };
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
    rounded: {
        type: PropType<boolean>;
        default: boolean;
    };
    roundedLg: {
        type: PropType<boolean>;
        default: boolean;
    };
    round: {
        type: PropType<boolean>;
        default: boolean;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    headers: {
        type: PropType<TableHeader[]>;
        required: true;
    };
    items: {
        type: PropType<TableItem[]>;
        required: true;
    };
    fixedHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    expandable: {
        type: PropType<boolean>;
        default: boolean;
    };
    multipleExpand: {
        type: PropType<boolean>;
        default: boolean;
    };
    hideMainContentOnExpand: {
        type: PropType<boolean>;
        default: boolean;
    };
    expandOnRowClick: {
        type: PropType<boolean>;
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
    expandedItems: TableItem[];
}, {
    classes(): CssClass[];
    headerCellClasses(): CssClass[];
}, {
    isExpanded(item: TableItem): boolean;
    getExpandIcon(item: TableItem): string;
    toggleExpansion(item: TableItem): void;
    handleRowClick(item: TableItem): void;
    rowClasses(item: TableItem): CssClass[];
    cellClasses(item: TableItem, isActionCell?: boolean): CssClass[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    dark: boolean;
    light: boolean;
    padding: import("../../composition-functions/spacing/models").Spacing;
    headers: TableHeader[];
    items: TableItem[];
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
    padding: import("../../composition-functions/spacing/models").Spacing;
    fixedHeader: boolean;
    expandable: boolean;
    multipleExpand: boolean;
    hideMainContentOnExpand: boolean;
    expandOnRowClick: boolean;
}>;
export default _default;
