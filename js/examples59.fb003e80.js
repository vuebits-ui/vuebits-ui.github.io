(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples59"],{"2ac7":function(n,e,o){"use strict";o.r(e),e["default"]='<template>\n  <Sandbox\n    id="example"\n    title="Example"\n  >\n    <Preview>\n      <VTile\n        :bordered="bordered"\n        :elevated="elevated"\n        :round="round"\n        :rounded="rounded"\n        :rounded-lg="roundedLg"\n        :dark="dark"\n        :light="light"\n        :color="color"\n        :width="width"\n        :height="height"\n        :image="image"\n        :hover-bg-color="hoverBgColor"\n        :underline-color="underlineColor"\n        :center-content="centerContent"\n      >\n        Configure me\n      </VTile>\n    </Preview>\n    <template #controls>\n      <Knobs>\n        <KnobBoolean\n          v-model="dark"\n          label="Dark"\n        />\n        <KnobBoolean\n          v-model="light"\n          label="Light"\n        />\n        <KnobListItem\n          v-model="color"\n          :items="colors"\n          label="Color"\n        />\n        <KnobListItem\n          v-model="hoverBgColor"\n          :items="colors"\n          label="Hover color"\n        />\n        <KnobListItem\n          v-model="underlineColor"\n          :items="colors"\n          label="Underline color"\n        />\n        <KnobBoolean\n          v-model="bordered"\n          label="Bordered"\n        />\n        <KnobBoolean\n          v-model="elevated"\n          label="Elevated"\n        />\n        <KnobBoolean\n          v-model="rounded"\n          label="Rounded"\n        />\n        <KnobBoolean\n          v-model="roundedLg"\n          label="Rounded large"\n        />\n        <KnobBoolean\n          v-model="round"\n          label="Round"\n        />\n        <KnobBoolean\n          v-model="centerContent"\n          label="Center content"\n        />\n        <KnobString\n          v-model="width"\n          label="Width"\n        />\n        <KnobString\n          v-model="height"\n          label="Height"\n        />\n        <KnobString\n          v-model="image"\n          label="Image url"\n        />\n      </Knobs>\n    </template>\n  </Sandbox>\n</template>\n\n<script>\nimport {\n  Preview,\n  Sandbox,\n  Knobs,\n  KnobListItem,\n  KnobBoolean,\n  KnobString\n} from \'@/docs/components\';\nimport {\n  VTile\n} from \'@/components\';\nimport { colors } from \'@/docs/helpers/story-params\';\n\nexport default {\n  name: \'TileExample\',\n  components: {\n    Preview,\n    Sandbox,\n    Knobs,\n    KnobListItem,\n    KnobBoolean,\n    KnobString,\n    VTile\n  },\n  data () {\n    return {\n      colors,\n      bordered: false,\n      borderedFat: false,\n      elevated: false,\n      round: false,\n      rounded: false,\n      roundedLg: false,\n      roundedSmall: false,\n      outlined: false,\n      dark: true,\n      light: true,\n      color: \'primary\',\n      width: \'auto\',\n      height: \'auto\',\n      image: \'\',\n      hoverBgColor: \'secondary\',\n      underlineColor: null,\n      centerContent: false\n    };\n  }\n};\n<\/script>\n'}}]);
//# sourceMappingURL=examples59.fb003e80.js.map