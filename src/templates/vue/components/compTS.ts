export default `<template>
  <div
    class="{{name}}">
    {{name}} component by moo-cli
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Props,
    Vue
  } from 'vue-property-decorator'{{#airbnb}};{{/airbnb}}

  @Component({
    components: {}
  }){{#airbnb}};{{/airbnb}}
  export default class {{name}} extends Vue {
    public static name = '{{name}}'{{#airbnb}};{{/airbnb}}

    // props
    @Props({ default: '' }) propA: string{{#airbnb}};{{/airbnb}}

    // data
    public dataA: string = ''{{#airbnb}};{{/airbnb}}

    // computed
    get computedDataA () {
      return this.dataA + ' computed'
    }{{#airbnb}};{{/airbnb}}

    // methods
    public methodA () {
      // ...
    }{{#airbnb}};{{/airbnb}}
  }{{#airbnb}};{{/airbnb}}
</script>
`;
