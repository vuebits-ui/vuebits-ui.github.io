(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples43"],{9247:function(n,i,e){"use strict";e.r(i),i["default"]="<template>\n  <span\n    v-for=\"(dimension, index) in dimensions\"\n    :key=\"index\"\n  >\n    <VTile\n      :width=\"dimension.width\"\n      :height=\"dimension.height\"\n      dark\n    >\n      I am {{ dimension.width }} wide and {{ dimension.height }} high\n    </VTile>\n  </span>\n</template>\n\n<script>\nimport {\n  VTile\n} from '@/components';\n\nexport default {\n  name: 'TileTileDimensions',\n  components: {\n    VTile\n  },\n  data () {\n    return {\n      dimensions: [\n        {\n          width: '200px',\n          height: 'auto'\n        },\n        {\n          width: '400px',\n          height: '200px'\n        },\n        {\n          width: '50%',\n          height: '10vh'\n        }\n      ]\n    };\n  }\n};\n<\/script>\n"}}]);
//# sourceMappingURL=examples43.bfa88226.js.map