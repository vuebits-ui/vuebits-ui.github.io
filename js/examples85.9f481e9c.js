(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples85"],{"1bf7":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div :class="$bem({})">\n    <router-view v-if="!isExactRoute" />\n    <template v-else>\n      <PageHeader>\n        Styles\n      </PageHeader>\n      <TableOfContents\n        :group="route"\n        :routes="children"\n      />\n    </template>\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from \'vue\';\nimport { RouteName } from \'@/docs/router/models\';\nimport {\n  PageHeader,\n  TableOfContents\n} from \'@/docs/components\';\nimport { stylesRoutes } from \'@/docs/router/styles\';\n\nexport default defineComponent({\n  name: \'DocsStyles\',\n  components: {\n    PageHeader,\n    TableOfContents\n  },\n  data () {\n    return {\n      route: RouteName.STYLES,\n      children: stylesRoutes\n    };\n  },\n  computed: {\n    isExactRoute (): boolean {\n      return this.$route.name === RouteName.STYLES;\n    }\n  }\n});\n<\/script>\n\n<style lang="scss">\n</style>\n'}}]);
//# sourceMappingURL=examples85.9f481e9c.js.map