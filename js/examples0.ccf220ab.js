(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples0"],{d39b:function(n,e,o){"use strict";o.r(e),e["default"]="<template>\n  <div :class=\"$bem({})\">\n    <DocsSidebar />\n    <div :class=\"$bem({e: 'main'})\">\n      <VTile\n        color=\"white\"\n        bordered\n        rounded\n        :class=\"$bem({e: 'content'})\"\n      >\n        <DocsBreadcrumbs />\n        <router-view />\n      </VTile>\n    </div>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue';\nimport { VTile } from '@/components';\nimport {\n  DocsSidebar,\n  DocsBreadcrumbs\n} from './_components';\n\nexport default defineComponent({\n  name: 'Docs',\n  components: {\n    VTile,\n    DocsSidebar,\n    DocsBreadcrumbs\n  }\n});\n<\/script>\n\n<style lang=\"scss\">\n@import './styles';\n</style>\n"}}]);
//# sourceMappingURL=examples0.ccf220ab.js.map