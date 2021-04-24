(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples62"],{"7e2d":function(n,i,a){"use strict";a.r(i),i["default"]="<template>\n  <div\n    class=\"margin\"\n  >\n    <div\n      v-for=\"(direction, i) in directions\"\n      :key=\"i\"\n    >\n      <span\n        v-for=\"spacing in spacings\"\n        :key=\"spacing\"\n        class=\"margin__spacing-wrapper\"\n      >\n        <span\n          class=\"margin__spacing\"\n          :class=\"`has-margin-${direction}${spacing}`\"\n        >\n          has-margin-{{ direction }}{{ spacing }}\n        </span>\n      </span>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { spacings } from '@/docs/helpers/story-params';\n\nexport default {\n  name: 'CommonClassesMargin',\n  data () {\n    return {\n      spacings,\n      directions: [\n        '',\n        'x-',\n        'y-',\n        'top-',\n        'right-',\n        'bottom-',\n        'left-'\n      ]\n    };\n  }\n};\n<\/script>\n\n<style>\n.margin {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.margin__spacing-wrapper {\n  display: inline-block;\n  border: 1px dashed #ccc;\n  margin: 5px;\n}\n.margin__spacing {\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n</style>\n"}}]);
//# sourceMappingURL=examples62.0e8bea78.js.map