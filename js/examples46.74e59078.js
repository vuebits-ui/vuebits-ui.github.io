(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples46"],{"5e09":function(n,e,p){"use strict";p.r(e),e["default"]="<template>\n  <div :class=\"$bem({})\">\n    <PageHeader>\n      Simple grid\n    </PageHeader>\n    <Example />\n    <ComponentApi :component=\"componentSimpleGrid\" />\n    <ComponentApi :component=\"componentSimpleGridItem\" />\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue';\nimport {\n  VSimpleGrid,\n  VSimpleGridItem\n} from '@/components';\nimport Example from './Example.vue';\nimport {\n  PageHeader,\n  ComponentApi\n} from '@/docs/components';\n\nexport default defineComponent({\n  name: 'DocsComponentsSimpleGrid',\n  components: {\n    PageHeader,\n    ComponentApi,\n    Example\n  },\n  data () {\n    return {\n      componentSimpleGrid: VSimpleGrid,\n      componentSimpleGridItem: VSimpleGridItem\n    };\n  }\n});\n<\/script>\n\n<style lang=\"scss\">\n</style>\n"}}]);
//# sourceMappingURL=examples46.74e59078.js.map