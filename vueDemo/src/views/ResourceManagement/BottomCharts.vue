<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="bcci-header">总CPU使用率</div>
      <dv-active-ring-chart :config="config1" />
      <Label-Tag :config="labelConfig" />
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">总内存使用率</div>
      <dv-active-ring-chart :config="config2" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">总硬盘使用率</div>
      <dv-active-ring-chart :config="config3" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">总链路使用率</div>
      <dv-active-ring-chart :config="config4" />
      <Label-Tag :config="labelConfig" />
    </div>

  </div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
  name: 'BottomCharts',
  components: {
    LabelTag
  },
  data () {
    return {
      config1: {
        data: [
          {
            name: '已用',
            value: 356
          },
          // {
          //   name: '监控中心',
          //   value: 215
          // },
          // {
          //   name: '道路外场',
          //   value: 90
          // },
          {
            name: '未用',
            value: 317
          }
        ],
        // color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        color: ['#ED7D31', '#337AB7'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          {
            name: '已用',
            value: 615
          },
          {
            name: '未用',
            value: 10
          }
        ],
        color: ['#ED7D31', '#337AB7'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          {
            name: '已用',
            value: 615
          },
          {
            name: '未用',
            value: 500
          }
        ],
        color: ['#ED7D31', '#337AB7'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          {
            name: '已用',
            value: 615
          },
          {
            name: '未用',
            value: 200
          }
        ],
        color: ['#ED7D31', '#337AB7'],
        radius: '65%',
        activeRadius: '70%'
      },

      labelConfig: {
        // data: ['收费站', '监控中心', '道路外场', '其他']
        data: ['已用', '未用']
      }
    }
  }
}
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 25%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .bcci-header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }

  .label-tag {
    height: 30px;
  }

  .active-ring-name {
    font-size: 18px !important;
  }

  .decoration-1, .decoration-2, .decoration-3 {
    display: absolute;
    left: 0%;
  }
}
</style>
