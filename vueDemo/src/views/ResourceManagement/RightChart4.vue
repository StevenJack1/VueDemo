<template>
  <div class="right-chart-1">
    <div class="rc1-header">数据包检测与预测</div>
    <dv-charts style="" :option="option" />
  </div>
</template>

<script>
export default {
  name: 'RightChart4',
  data () {
    return {
      option: {
        legend: {
          data: [
            {
              name: '发包检测',
              color: '#00baff'
            },
            {
              name: '发包预测',
              color: '#ff5ca9'
            },
            {
              name: '收包检测',
              color: '#3de7c9'
            },
            {
              name: '收包预测',
              color: '#f5d94e'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '10:01', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35'
          ],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 8
        },
        series: [
          {
            name: '发包检测',
            data: [
              2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.4)'
            }
          },
          {
            name: '发包预测',
            data: [
              2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5, 3
            ],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            name: '收包检测',
            data: [
              2, 2.5, 3, 3.5, 4, 5, 6
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(61,231,201)'
            }
          },
          {
            name: '收包预测',
            data: [
              2, 2.5, 3, 3.5, 4, 5, 6, 8
            ],
            type: 'line',
            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
  .right-chart-1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .rc1-header {
      font-size: 24px;
      font-weight: bold;
      height: 10px;
      line-height: 30px;
    }
  }
</style>
