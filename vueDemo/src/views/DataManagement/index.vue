<template>
  <div id="data-management">
    <dv-full-screen-container>
      <main-header />

    </dv-full-screen-container>
  </div>
</template>

<script>
import MainHeader from '../../components/MainHeader'

export default {
  name: 'DataManagement',
  components: {
    MainHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
  #data-management {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;

    #dv-full-screen-container {
      background-image: url('../../assets/img/bg.png');
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      display: flex;
      flex-direction: column;
    }

  }
</style>
