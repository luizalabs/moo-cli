export default `<template>
  <div
    class="{{name}}"
  >
    {{name}} component by moo-cli
  </div>
</template>

<script>
{{#flux}}import {
  mapActions,
  mapGetters
} from 'vuex'{{#airbnb}};{{/airbnb}}

{{/flux}}
export default {
  name: '{{name}}',
  components: {
    // ...
  },
  data () {
    return {
      // variables
    }{{#airbnb}};{{/airbnb}}
  },
  computed: {
    {{#flux}}...mapGetters([
    ]){{#airbnb}},{{/airbnb}}{{/flux}}{{^flux}}// ...{{/flux}}
  },
  methods: {
    {{#flux}}...mapActions({
    }){{#airbnb}},{{/airbnb}}{{/flux}}{{^flux}}// ...{{/flux}}
  }{{#airbnb}},{{/airbnb}}
}{{#airbnb}};{{/airbnb}}
</script>
`;
