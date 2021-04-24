(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples22"],{2518:function(n,e,o){"use strict";o.r(e),e["default"]="<template>\n  <Sandbox\n    id=\"example\"\n    title=\"Example\"\n  >\n    <Preview>\n      <VIcon\n        :name=\"name\"\n        :prefix=\"prefix\"\n        :type=\"type\"\n        :size=\"size\"\n        :rotate=\"rotate\"\n        :flip=\"flip\"\n        :pulse=\"pulse\"\n        :spin=\"spin\"\n      />\n    </Preview>\n    <template #controls>\n      <Knobs>\n        <KnobListItem\n          v-model=\"name\"\n          :items=\"icons\"\n          label=\"Name\"\n        />\n        <KnobString\n          v-model=\"prefix\"\n          label=\"Prefix\"\n        />\n        <KnobString\n          v-model=\"type\"\n          label=\"Type\"\n        />\n        <KnobListItem\n          v-model=\"size\"\n          :items=\"sizes\"\n          label=\"Size\"\n        />\n        <KnobListItem\n          v-model=\"rotate\"\n          :items=\"rotations\"\n          label=\"Rotate\"\n        />\n        <KnobListItem\n          v-model=\"flip\"\n          :items=\"flips\"\n          label=\"Flip\"\n        />\n        <KnobBoolean\n          v-model=\"pulse\"\n          label=\"Pulse\"\n        />\n        <KnobBoolean\n          v-model=\"spin\"\n          label=\"Spin\"\n        />\n      </Knobs>\n    </template>\n  </Sandbox>\n</template>\n\n<script>\nimport {\n  Preview,\n  Sandbox,\n  Knobs,\n  KnobListItem,\n  KnobBoolean,\n  KnobString\n} from '@/docs/components';\nimport {\n  VIcon\n} from '@/components';\nimport { icons } from '@/docs/helpers/story-params';\n\nexport default {\n  name: 'TileExample',\n  components: {\n    Preview,\n    Sandbox,\n    Knobs,\n    KnobListItem,\n    KnobBoolean,\n    KnobString,\n    VIcon\n  },\n  data () {\n    return {\n      icons: icons,\n      sizes: [\n        '-',\n        'lg',\n        'xs',\n        'sm',\n        '1x',\n        '2x',\n        '3x',\n        '4x',\n        '5x',\n        '6x',\n        '7x',\n        '8x',\n        '9x',\n        '10x'\n      ],\n      rotations: [\n        '-',\n        '90',\n        '180',\n        '270'\n      ],\n      flips: [\n        '-',\n        'horizontal',\n        'vertical',\n        'both'\n      ],\n      name: 'check',\n      prefix: 'fa-',\n      type: 'fa',\n      size: '-',\n      rotate: '-',\n      flip: '-',\n      pulse: false,\n      spin: false\n    };\n  }\n};\n<\/script>\n"}}]);
//# sourceMappingURL=examples22.56759b7f.js.map