<template>
  <div class="shop">
    <comHeader></comHeader>
    <comSidebar></comSidebar>
  </div>
</template>

<script type="text/ecmascript-6">
  import comHeader from './components/com/header.vue'
  import comSidebar from './components/com/sidebar.vue'

  import './css/base.scss'

  export default {
    data () {
      return {}
    },
    components: {
      comHeader: comHeader,
      comSidebar: comSidebar
    }
  }
</script>
