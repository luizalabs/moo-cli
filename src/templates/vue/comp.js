export default `<template>
  <div
    id="{{name}}">
  </div>
</template>

<script>
  {{#redux}}import {
    mapActions,
    mapGetters
  } from 'vuex'{{#airbnb}};{{/airbnb}}
  {{/redux}}
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
      {{#redux}}...mapGetters([
        // ...
      ]){{#airbnb}},{{/airbnb}}{{/redux}}
      {{^redux}}// ...{{/redux}}
    },
    methods: {
      {{#redux}}...mapActions({
        // ...
      }){{#airbnb}},{{/airbnb}}{{/redux}}
      {{^redux}}// ...{{/redux}}
    }{{#airbnb}},{{/airbnb}}
  }{{#airbnb}};{{/airbnb}}
</script>`
.trim()
