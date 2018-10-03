<template>
  <div class="">
    Hello I'm karu ./.
    <va-button
      name="Fuck You"
      theme="primary"
      size="btn-lg"
      :isFlat="true"
    ></va-button>
  </div>
</template>

<script>
  import VAButton from 'vue2-admin-lte/src/components/VAButton.vue'
  export default {
    name: 'cool landing page ni karu',
    components: { 'va-button': VAButton },
    methods: {}
  }
</script>
