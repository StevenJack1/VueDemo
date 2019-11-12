<template>
  <div id="user-management">
    <dv-full-screen-container>
      <main-header />

    </dv-full-screen-container>
  </div>
</template>

<script>
import MainHeader from '../../components/MainHeader'

export default {
  name: 'UserManagement',
  components: {
    MainHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
  #user-management {
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
