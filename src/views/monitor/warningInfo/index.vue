<template>
  <div class="app-container">
    <div class="warning-info">
      <div class="warn-top">
        <span class="title">预警信息</span>
        <el-select v-model="filter.bid" placeholder="标段" class="filter-select">
          <el-option
            v-for="item in bids"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="filter.state" placeholder="处理状态" class="filter-select">
          <el-option
            v-for="item in states"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="warning-tip">
          当前未处理预警<span class="tip-doing">{{doing}}</span>条，累计已处理<span class="tip-done">{{done}}</span>条
        </span>
      </div>
      <div class="warn-main">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content">
              <div class="grid-topic topic1">
                <span>混凝土生产</span>
                <span class="grid-tip">当前未处理预警<i>2</i>条</span>
              </div>
              <el-table :data="tables.table1" border style="width: 100%" :header-cell-style="{padding:'2px 0'}" :cell-style="{padding:'2px 0'}" :stripe="true">
                <el-table-column prop="code" label="编号" width="80"></el-table-column>
                <el-table-column prop="name" filter-placement="bottom-start" :filters="[{text:'易和性',value:'易和性'}]" label="指标项"></el-table-column>
                <el-table-column prop="range" label="指标范围">
                  <template slot-scope="scope">
                    <span class="range">{{scope.row.range}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="real" label="实测值">
                  <template slot-scope="scope">
                    <span v-text="scope.row.real" :class="getArrowStyle(scope.row)"></span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="预警时间" width="200"></el-table-column>
                <el-table-column prop="type" label="预警类型" width="150">
                  <template slot-scope="scope">
                    <span :class="getArrowStyle(scope.row)" class="arrow">
                      <svg-icon :iconClass="'arrow'"></svg-icon>
                      <span v-text="scope.row.type"></span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" label="处理状态">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.current"
                      type="success"
                      size="mini">待处理</el-button>
                    <span v-else>{{scope.row.state}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination 
                style="float:right;margin-top:5px;"
                :current-page="1"
                :page-sizes="[5]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="17">
              </el-pagination>
              <div class="clear"></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="grid-topic topic2">
                <span>拌合楼装料</span>
                <span class="grid-tip">当前未处理预警<i>2</i>条</span>
              </div>
              <el-table :data="tables.table1" border style="width: 100%" :header-cell-style="{padding:'2px 0'}" :cell-style="{padding:'2px 0'}" :stripe="true">
                <el-table-column prop="code" label="编号" width="80"></el-table-column>
                <el-table-column prop="name" filter-placement="bottom-start" :filters="[{text:'易和性',value:'易和性'}]" label="指标项"></el-table-column>
                <el-table-column prop="range" label="指标范围">
                  <template slot-scope="scope">
                    <span class="range">{{scope.row.range}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="real" label="实测值">
                  <template slot-scope="scope">
                    <span v-text="scope.row.real" :class="getArrowStyle(scope.row)"></span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="预警时间" width="200"></el-table-column>
                <el-table-column prop="type" label="预警类型" width="150">
                  <template slot-scope="scope">
                    <span :class="getArrowStyle(scope.row)" class="arrow">
                      <svg-icon :iconClass="'arrow'"></svg-icon>
                      <span v-text="scope.row.type"></span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" label="处理状态">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.current"
                      type="success"
                      size="mini">待处理</el-button>
                    <span v-else>{{scope.row.state}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination 
                style="float:right;margin-top:5px;"
                :current-page="1"
                :page-sizes="[5]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="17">
              </el-pagination>
              <div class="clear"></div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content">
              <div class="grid-topic topic3">
                <span>混凝土运输</span>
                <span class="grid-tip">当前未处理预警<i>2</i>条</span>
              </div>
              <el-table :data="tables.table1" border style="width: 100%" :header-cell-style="{padding:'2px 0'}" :cell-style="{padding:'2px 0'}" :stripe="true">
                <el-table-column prop="code" label="编号" width="80"></el-table-column>
                <el-table-column prop="name" filter-placement="bottom-start" :filters="[{text:'易和性',value:'易和性'}]" label="指标项"></el-table-column>
                <el-table-column prop="range" label="指标范围">
                  <template slot-scope="scope">
                    <span class="range">{{scope.row.range}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="real" label="实测值">
                  <template slot-scope="scope">
                    <span v-text="scope.row.real" :class="getArrowStyle(scope.row)"></span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="预警时间" width="200"></el-table-column>
                <el-table-column prop="type" label="预警类型" width="150">
                  <template slot-scope="scope">
                    <span :class="getArrowStyle(scope.row)" class="arrow">
                      <svg-icon :iconClass="'arrow'"></svg-icon>
                      <span v-text="scope.row.type"></span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" label="处理状态">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.current"
                      type="success"
                      size="mini">待处理</el-button>
                    <span v-else>{{scope.row.state}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination 
                style="float:right;margin-top:5px;"
                :current-page="1"
                :page-sizes="[5]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="17">
              </el-pagination>
              <div class="clear"></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="grid-topic topic4">
                <span>混凝土入仓</span>
                <span class="grid-tip">当前未处理预警<i>2</i>条</span>
              </div>
              <el-table :data="tables.table1" border style="width: 100%" :header-cell-style="{padding:'2px 0'}" :cell-style="{padding:'2px 0'}" :stripe="true">
                <el-table-column prop="code" label="编号" width="80"></el-table-column>
                <el-table-column prop="name" filter-placement="bottom-start" :filters="[{text:'易和性',value:'易和性'}]" label="指标项"></el-table-column>
                <el-table-column prop="range" label="指标范围">
                  <template slot-scope="scope">
                    <span class="range">{{scope.row.range}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="real" label="实测值">
                  <template slot-scope="scope">
                    <span v-text="scope.row.real" :class="getArrowStyle(scope.row)"></span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="预警时间" width="200"></el-table-column>
                <el-table-column prop="type" label="预警类型" width="150">
                  <template slot-scope="scope">
                    <span :class="getArrowStyle(scope.row)" class="arrow">
                      <svg-icon :iconClass="'arrow'"></svg-icon>
                      <span v-text="scope.row.type"></span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" label="处理状态">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.current"
                      type="success"
                      size="mini">待处理</el-button>
                    <span v-else>{{scope.row.state}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination 
                style="float:right;margin-top:5px;"
                :current-page="1"
                :page-sizes="[5]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="17">
              </el-pagination>
              <div class="clear"></div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content">
              <div class="grid-topic topic5">
                <span>混凝土振捣</span>
                <span class="grid-tip">当前未处理预警<i>2</i>条</span>
              </div>
              <el-table :data="tables.table1" border style="width: 100%" :header-cell-style="{padding:'2px 0'}" :cell-style="{padding:'2px 0'}" :stripe="true">
                <el-table-column prop="code" label="编号" width="80"></el-table-column>
                <el-table-column prop="name" filter-placement="bottom-start" :filters="[{text:'易和性',value:'易和性'}]" label="指标项"></el-table-column>
                <el-table-column prop="range" label="指标范围">
                  <template slot-scope="scope">
                    <span class="range">{{scope.row.range}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="real" label="实测值">
                  <template slot-scope="scope">
                    <span v-text="scope.row.real" :class="getArrowStyle(scope.row)"></span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="预警时间" width="200"></el-table-column>
                <el-table-column prop="type" label="预警类型" width="150">
                  <template slot-scope="scope">
                    <span :class="getArrowStyle(scope.row)" class="arrow">
                      <svg-icon :iconClass="'arrow'"></svg-icon>
                      <span v-text="scope.row.type"></span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" label="处理状态">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.current"
                      type="success"
                      size="mini">待处理</el-button>
                    <span v-else>{{scope.row.state}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination 
                style="float:right;margin-top:5px;"
                :current-page="1"
                :page-sizes="[5]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="17">
              </el-pagination>
              <div class="clear"></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="grid-topic topic6">
                <span>温度控制</span>
                <span class="grid-tip">当前未处理预警<i>2</i>条</span>
              </div>
              <el-table :data="tables.table1" border style="width: 100%" :header-cell-style="{padding:'2px 0'}" :cell-style="{padding:'2px 0'}" :stripe="true">
                <el-table-column prop="code" label="编号" width="80"></el-table-column>
                <el-table-column prop="name" filter-placement="bottom-start" :filters="[{text:'易和性',value:'易和性'}]" label="指标项"></el-table-column>
                <el-table-column prop="range" label="指标范围">
                  <template slot-scope="scope">
                    <span class="range">{{scope.row.range}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="real" label="实测值">
                  <template slot-scope="scope">
                    <span v-text="scope.row.real" :class="getArrowStyle(scope.row)"></span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="预警时间" width="200"></el-table-column>
                <el-table-column prop="type" label="预警类型" width="150">
                  <template slot-scope="scope">
                    <span :class="getArrowStyle(scope.row)" class="arrow">
                      <svg-icon :iconClass="'arrow'"></svg-icon>
                      <span v-text="scope.row.type"></span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" label="处理状态">
                  <template slot-scope="scope">
                    <el-button
                      v-if="scope.row.current"
                      type="success"
                      size="mini">待处理</el-button>
                    <span v-else>{{scope.row.state}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination 
                style="float:right;margin-top:5px;"
                :current-page="1"
                :page-sizes="[5]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="17">
              </el-pagination>
              <div class="clear"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'warningInfo',
    methods: {
      getArrowStyle(row) {
        const style = {};
        if (row.type === '轻微') {
          style.light = true;
        } else if (row.type === '一般') {
          style.normal = true;
        } else {
          style.serious = true;
        }

        if (row.real > 5) {
          style.up = true;
        } else {
          style.down = true;
        }

        return style;
      }
    },
    data() {
      return {
        done: 231,
        doing: 12,
        filter: {
          bid: '',
          state: '待处理'
        },
        bids: [
          {
            name: '全部',
            value: ''
          },
          {
            name: '标段1',
            value: '标段1'
          },
          {
            name: '标段2',
            value: '标段2'
          },
          {
            name: '标段3',
            value: '标段3'
          },
          {
            name: '标段4',
            value: '标段4'
          }
        ],
        states: [
          {
            name: '全部',
            value: ''
          },
          {
            name: '待处理',
            value: '待处理'
          },
          {
            name: '监理处理',
            value: '监理处理'
          },
          {
            name: '总监处理',
            value: '总监处理'
          },
          {
            name: '业主处理',
            value: '业主处理'
          },
          {
            name: '处理完成',
            value: '处理完成'
          }
        ],
        tables: {
          table1: [
            {
              code: '1',
              name: '和易性',
              range: '[2,5]',
              real: '0.1',
              time: '2018-7-6 09:58:06',
              type: '一般',
              state: '监理处理'
            },
            {
              code: '2',
              name: '和易性',
              range: '[2,5]',
              real: '1.9',
              time: '2018-7-6 09:58:06',
              type: '轻微',
              state: '待处理',
              current: true
            },
            {
              code: '3',
              name: '和易性',
              range: '[2,5]',
              real: '6.7',
              time: '2018-7-6 09:58:06',
              type: '一般',
              state: '总监处理'
            },
            {
              code: '4',
              name: '和易性',
              range: '[2,5]',
              real: '5.1',
              time: '2018-7-6 09:58:06',
              type: '轻微',
              state: '业主处理'
            },
            {
              code: '5',
              name: '和易性',
              range: '[2,5]',
              real: '11',
              time: '2018-7-6 09:58:06',
              type: '严重',
              state: '处理完成'
            }
          ]
        }
      };
    }
  };
</script>

<style scoped>

  .down .svg-icon{
    transform: rotate(180deg);
  }

  .light{
    color: #DDC50B;
  }

  .normal{
    color: #E6A23C;
  }

  .serious{
    color: #F56C6C;
  }

  .el-button--mini{
    padding: 3px 10px;
    font-size: 12px;
  }

  .range{
    color:#67c23a;
  }

  .topic1{
    background-color: #E6A23C;
  }

  .topic2{
    background-color: #67C23A;
  }

  .topic3{
    background-color: #BEB449;
  }

  .topic4{
    background-color: #8d44eb;
  }

  .topic5{
    background-color: #F56C6C;
  }

  .topic6{
    background-color: #5EC4BD;
  }

  .grid-tip{
    font-size: 14px;
    margin-left: 15px;
  }

  .grid-tip i{
    font-style: normal;
    margin: 0 5px;
    color: red;
  }

  .grid-topic{
    height: 35px;
    line-height: 35px;
    color: #FFF;
    padding: 0 15px;
    font-size: 16px;
  }

  .warning-info{
    font-family: 'Microsoft Yahei';
  }
  .warning-info .warn-top{
    height: 60px;
    background-color: #409EFF;
    position: relative;
  }

  .warning-info .warn-top span.title{
    line-height: 60px;
    color: #FFF;
    font-size: 18px;
    padding-left: 15px;
  }

  .filter-select{
    margin-left: 15px;
  }

  .warning-tip{
    color: #FFF;
    font-size: 14px;
    margin-left: 20px;
  }

  .warning-tip span{
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
  }

  .warning-tip span.tip-doing{
    color: #FFF;
  }

  .warning-tip span.tip-done{
    color: #FFF;
  }

  .warn-main{
    padding: 0 10px;
  }

  .grid-content{
    min-height: 200px;
    margin-top: 10px;
  }
</style>


