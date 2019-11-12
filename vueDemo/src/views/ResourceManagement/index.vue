<template>
  <div id="data-view">
    <dv-full-screen-container>
      <main-header />

      <dv-border-box-1 class="main-container">
        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
              <Center-Cmp />
            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-4 class="rmctc-chart-1" :reverse="false">
                <Right-Chart-1 />
              </dv-border-box-4>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="false">
                <Right-Chart-4 />
              </dv-border-box-4>
            </div>

            <div class="rmctc-right-right-container">
              <dv-border-box-4 class="rmctc-chart-1" :reverse="true">
                <Right-Chart-3 />
              </dv-border-box-4>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2 />
              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">
            <Bottom-Charts />
          </dv-border-box-4>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>

import CenterCmp from './CenterCmp'
import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'
import RightChart3 from './RightChart3'
import RightChart4 from './RightChart4'
import BottomCharts from './BottomCharts'
import MainHeader from '../../components/MainHeader'

export default {
  name: 'ResourceManagement',
  components: {
    MainHeader,
    CenterCmp,
    RightChart1,
    RightChart2,
    RightChart3,
    RightChart4,
    BottomCharts
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
  #data-view {
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

    .main-container {
      height: calc(~"100% - 80px");

      .border-box-content {
        padding: 20px;
        box-sizing: border-box;
        display: flex;
      }
    }

    .left-chart-container {
      width: 22%;
      padding: 10px;
      box-sizing: border-box;

      .border-box-content {
        flex-direction: column;
      }
    }

    .right-main-container {
      width: 100%;
      padding-left: 5px;
      box-sizing: border-box;
    }

    .rmc-top-container {
      height: 65%;
      display: flex;
    }

    .rmctc-left-container {
      width: 50%;
    }

    .rmctc-right-container{
      width: 25%;
    }

    .rmctc-right-right-container {
      width: 25%;
    }

    .rmc-bottom-container {
      height: 35%;
    }

    .rmctc-chart-1, .rmctc-chart-2 {
      height: 50%;
    }
  }
</style>
