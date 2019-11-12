<template>
  <div class="main-header">
    <div class="mh-left">
      网管告警系统
    </div>
    <div class="mh-middle">
      <dv-border-box-2 style="width: 100%; height: 50px; line-height: 50px; text-align:center">
        <a href="/#/resourceManagement">资源管理</a>
        <!--<router-link tag='a' :to="'/taskManagement'" >任务管理</router-link>-->
        <a href="/#/taskManagement" >任务管理</a>

        <a href="/#/malfunctionManagement">故障管理</a>

        <a href="/#/situationManagement">态势管理</a>

        <a href="/#/dataManagement">数据管理</a>

        <a href="/#/userManagement">用户管理</a>
      </dv-border-box-2>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="less">
  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 40px;
      margin-left: 30px;
    }

    .mh-middle {
      font-size: 20px;
      margin-right: 30px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }

    }

  }
</style>
