<template>
  <div class="desk-map">
    <svg viewBox="0 0 3840 2160" :width="w" :height="h"></svg>
    <transition name="fade">
      <div class="info-box car-box" :style="carStyle" v-show="carBoxShow">
        <div class="title">
          混凝土运输车
          <a class="close" @click="carBoxShow = false">
            <svg-icon  :icon-class="'close'"></svg-icon>
          </a>
        </div>
        <div class="infos">
          <div class="info">
            <span class="name">车辆类型&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.type"></span>
          </div>
          <div class="info">
            <span class="name">车辆吨位&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.weight"></span>
          </div>
          <div class="info">
            <span class="name">重载状态&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.state"></span>
          </div>
          <div class="info">
            <span class="name">运输材料&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.material"></span>
          </div>
          <div class="info">
            <span class="name">供应部位&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.target"></span>
          </div>
          <div class="info">
            <span class="name">运输时长&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.time"></span>
          </div>
          <div class="info">
            <span class="name">驾驶员&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedCar.driver"></span>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="info-box build-box" :style="buildStyle" v-show="buildBoxShow">
        <div class="title">
          混凝土生产系统
          <a class="close" @click="buildBoxShow = false">
            <svg-icon  :icon-class="'close'"></svg-icon>
          </a>
        </div>
        <div class="infos">
          <div class="info">
            <span class="name">系统名称&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedBuild.name"></span>
          </div>
          <div class="info">
            <span class="name">当前生产&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedBuild.current"></span>
          </div>
          <div class="info">
            <span class="name">供应部门&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedBuild.target"></span>
          </div>
          <div class="info">
            <span class="name">今日累计生产&nbsp;&nbsp;：</span>
            <span class="value" v-text="selectedBuild.total"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import request from '@/utils/request.js';
  import bg from '@/assets/imgs/bg.jpg';
  import build from '@/assets/imgs/build.png';
  import monitor from '@/assets/imgs/monitor.base.svg';

  const rate = 3840 / 2160;
  export default {
    name: 'realTimeMonitor',
    mounted() {
      const _this = this;

      const rect = this.getSize();
      this.cw = rect.cw;
      this.ch = rect.ch;
      this.w = rect.w;
      this.h = rect.h;
  
      let timer = null;
      window.onresize = (e) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          _this.clientWidth = window.innerWidth;
        }, 100);
      };

      this.initSvg();
    },
    watch: {
      clientWidth(newValue, oldValue) {
        if (this.svg) {
          this.resetMap();
        }
      }
    },

    methods: {

      resetMap() {
        const rect = this.getSize();
        this.svg.attr('width', rect.w)
              .attr('height', rect.h);

        this.buildBoxShow = false;
        this.carBoxShow = false;
      },

      resetTransform() {
        this.svg.select('#zoom').attr('transform', '');
      },

      getSize() {
        const rect = this.$el.getBoundingClientRect();
        let w = 0;
        let h = 0;
        if (rect.width / rect.height > rate) {
          h = rect.height;
          w = h * rate;
        } else {
          w = rect.width;
          h = w / rate;
        }
        return {
          w,
          h,
          cw: rect.width,
          ch: rect.height
        };
      },

      initSvg() {
        request({
          url: monitor
        }).then(res => {
          this.$el.getElementsByTagName('svg').item(0).innerHTML = res;

          this.svg = d3.select(this.$el.getElementsByTagName('svg').item(0));
          this.svg.select('#build').attr('xlink:href', build);
          this.svg.select('#bg').attr('xlink:href', bg);

          this.addCars();
          this.addBuilds();

          this.bindZoomEvent();
        });
      },

      addBuilds() {
        const _this = this;

        this.svg.select('#builds').selectAll('use')
          .data(this.builds)
          .enter()
          .append('use')
          .attr('xlink:href', '#build')
          .attr('transform', (d, i) => (d.pos));

        this.svg.select('g#zoom').append('g')
          .attr('id', 'builds-bak')
          .selectAll('rect')
          .data(this.builds)
          .enter()
          .append('rect')
          .attr('width', 300)
          .attr('height', 300)
          .attr('transform', (d, i) => d.pos)
          .style('fill', 'rgba(255, 255, 255, 0)')
          .on('click', function() {
            const rect = this.getBoundingClientRect();
            const node = d3.select(this);
            const data = node.datum();
            _this.selectedBuild = { ...data };
            _this.buildStyle = {
              left: (rect.x + rect.width) + 'px',
              top: (rect.y + rect.height) + 'px'
            };
            _this.buildBoxShow = true;
          });
      },

      addCars() {
        const _this = this;
        var group = this.svg.select('#cars').selectAll('g')
          .data(this.cars)
          .enter()
          .append('g')
          .classed('car-group', true);

        group.append('use')
          .attr('xlink:href', '#car')
          .attr('transform', (d, i) => (d.pos));

        group.append('rect')
          .attr('width', 125)
          .attr('height', 102)
          .attr('x', -50)
          .attr('y', -80)
          .attr('transform', (d, i) => d.pos)
          .style('fill', 'rgba(255, 255, 255, 0)')
          .on('click', function() {
            const rect = this.getBoundingClientRect();
            const node = d3.select(this);
            const data = node.datum();
  
            _this.selectedCar = { ...data };

            _this.carStyle = {
              left: (rect.x + rect.width) + 'px',
              top: (rect.y + rect.height) + 'px'
            };

            _this.carBoxShow = true;

            _this.selectedCarNode = this;
          });
      },

      bindZoomEvent() {
        this.svg.call(d3.zoom().on('zoom', () => {
          const event = d3.event;

          const k = event.transform.k;
          const x = event.transform.x;
          const y = event.transform.y;
  
          this.svg.select('#zoom').attr('transform', 'translate(' + x + ', ' + y + ') scale(' + k + ')');

          this.carBoxShow = false;
          this.buildBoxShow = false;
        }));
      }
    },
    data() {
      return {
        cw: 0, // 容器宽度
        ch: 0, // 容器高度
        w: 0, // svg宽度
        h: 0, // svg高度
        clientWidth: window.innerWidth,
        carBoxShow: false,
        selectedCar: {
          type: '',
          weight: '',
          state: '',
          material: '',
          target: '',
          time: '',
          driver: ''
        },
        carStyle: {
          left: 0,
          top: 0
        },
        cars: [
          {
            pos: 'translate(1265.158, 1376.254)',
            type: '自卸汽车',
            weight: '35',
            state: '重载',
            material: 'A₁₃₂35M₃₁300W₂₃14',
            target: '洞式溢洪道DSYHD0123',
            time: '135分钟',
            driver: '张胜利'
          },
          {
            pos: 'translate(1385.158, 551.253)',
            type: '自卸汽车',
            weight: '35',
            state: '重载',
            material: 'X₁₃₂35F₃₁300W₂₃40',
            target: '主厂房ZCF0401',
            time: '231分钟',
            driver: '李文生'
          }
        ],
        builds: [
          {
            pos: 'matrix(0.3558 0 0 0.3558 1554.0518 870.2959)',
            name: '1#拌合楼',
            current: 'A₁₃₂35M₃₁300W₂₃14',
            target: '主厂房ZCF0231',
            total: '1230m³'
          },
          {
            pos: 'matrix(0.3687 0 0 0.3687 3449.0732 1784.2773)',
            name: '2#拌合楼',
            current: 'D₁₃₂35Y₃₁300W₂₃21',
            target: '主厂房ZCF0401',
            total: '1230m³'
          },
          {
            pos: 'matrix(0.4121 0 0 0.4121 2986.75 1123.6846)',
            name: '3#拌合楼',
            current: 'X₁₃₂35F₃₁300W₂₃40',
            target: '主厂房ZCF0217',
            total: '1230m³'
          },
          {
            pos: 'matrix(0.4005 0 0 0.4005 373.0728 125.2764)',
            name: '4#拌合楼',
            current: 'O₁₃₂35U₃₁300W₂₃71',
            target: '主厂房ZCF0890',
            total: '1230m³'
          }
        ],
        buildBoxShow: false,
        buildStyle: {
          left: 0,
          top: 0
        },
        selectedBuild: {
          pos: '',
          name: '',
          current: '',
          target: '',
          total: ''
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .desk-map{
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin-top: 20px;
    margin-left: 20px;
    position: relative;

    .reset{
      position: absolute;
      left: 20px;
      top: 20px;
    }

    .info-box{
      position: fixed;
      z-index: 1000000;
      left: 0;
      top: 0;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
      width: 350px;
      transition: all 0.3s; 
      .title{
        font-size: 16px;
        color: #FFF;
        background-color: #409EFF;
        padding-left: 10px;
        line-height: 36px;
        height: 36px;
        border-radius: 4px 4px 0 0;
        .close{
          float: right;
          margin-right: 10px;
        }
      }

      .infos{
        background-color: #FFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 0 0 4px 4px;
        padding: 10px 0;
        .info{
          margin-bottom: 10px;
          font-size: 14px;
          span{
            display: inline-block;
          }
          span.name{
            width: 120px;
            text-align: right;
          }
        }
      }
    }
  }
</style>


