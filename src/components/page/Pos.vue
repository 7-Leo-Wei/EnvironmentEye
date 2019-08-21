<template>
  <div class="pos">
    <el-row class="mainBody">
      <el-col :span="10" class="orderList">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border stripe style="width: 100%;" :data="tableData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="price" label="商品价格"></el-table-column>
              <el-table-column prop="count" label="商品数量"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="ctrlBtn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
            <div class="testWord" style="margin-top: 10px;">
              <el-button type="success" @click="isShow = !isShow">动画效果</el-button>
              <transition name="el-fade-in-linear">
                <p v-show="isShow">el-fade-in-linear</p>
              </transition>
              <transition name="el-fade-in">
                <p v-show="isShow">el-fade-in</p>
              </transition>
            </div>
            <div class="zoomTest" style="margin-top: 10px;">
              <el-button type="success" @click="isZoomShow = !isZoomShow">zoom效果</el-button>
              <transition name="el-zoom-in-center">
                <div class="zoomCtr" v-show="isZoomShow">
                  <p>el-zoom-in-center</p>
                </div>
              </transition>
              <transition name="el-zoom-in-top">
                <div class="zoomTop" v-show="isZoomShow">
                  <p>el-zoom-in-top</p>
                </div>
              </transition>
              <transition name="el-zoom-in-bottom">
                <div class="zoomBtm" v-show="isZoomShow">
                  <p>el-zoom-in-bottom</p>
                </div>
              </transition>
            </div>
            <div class="collapseTest">
              <el-button type="success" @click="isClpsShow = !isClpsShow">collapse效果</el-button>
              <el-collapse-transition>
                <div class="clpsDiv" v-show="isClpsShow">
                  <div class="clps">
                    <p>el-collapse-transition</p>
                  </div>
                  <div class="clps">
                    <p>el-collapse-transition</p>
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            <table class="orderListTbl" cellspacing="1">
              <tr v-for="item in tableData">
                <td><input type="text" v-model="item.goodsName"></td>
                <td><input type="text" v-model="item.price"></td>
                <td><input type="text" v-model="item.count"></td>
              </tr>
              <tr>
                <td colspan="3">
                  <el-button type="primary" @click="addTr" size="small">添加</el-button>
                  <el-button type="success" @click="saveTr" size="small">保存</el-button>
                </td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="外卖">
            <template>
              <el-table :data="tableData2" style="width: 100%" height="400">
                <el-table-column prop="date" label="日期" width="100" fixed></el-table-column>
                <el-table-column label="配送信息">
                  <el-table-column prop="name" label="姓名" width="80"></el-table-column>
                  <el-table-column label="地址">
                    <el-table-column prop="province" label="省份"></el-table-column>
                    <el-table-column prop="city" label="市区"></el-table-column>
                    <el-table-column prop="address" label="地址" width="240"></el-table-column>
                  </el-table-column>
                </el-table-column>
                <el-table-column prop="zip" label="邮编" fixed="right"></el-table-column>
              </el-table>
            </template>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="14">
        <el-container style="background: #fff;color: #fff;">
          <el-header style="background: #3399ff;height: auto;">el-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-headerel-header</el-header>
          <el-container>
            <el-aside width="100px" style="background: #3366dd;">el-asideel-asideel-asideel-asideel-asideel-asideel-asideel-asideel-asideel-asideel-asideel-asideel-asideel-aside</el-aside>
            <el-main style="background: #9955dd;">
              <div class="itemDiv">
                <el-link type="primary">链接</el-link>
                <el-link type="success">链接</el-link>
                <el-link type="warning">链接</el-link>
                <el-link type="danger">链接</el-link>
              </div>
              <div class="itemDiv">
                <el-radio-group v-model="chsRadio">
                  <el-radio v-for="(it, index) in radioData" :key="it" :label="it" border></el-radio>
                </el-radio-group>
              </div>
              <div class="itemDiv">
                <el-radio-group v-model="chsRadio">
                  <el-radio-button v-for="(it, index) in radioData" :key="it" :label="it" border></el-radio-button>
                </el-radio-group>
              </div>
              <div class="itemDiv">
                <el-checkbox v-model="chsCheckboxAll" @change="chsBoxAll">全选</el-checkbox>
                <el-checkbox-group v-model="chsCheckbox" @change="handleBoxChs" :min="0" :max="2">
                  <el-checkbox v-for="(it, index) in radioData" :key="it" :label="it" border>{{it}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="itemDiv">
                <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="chsRadio"></el-input>
                <el-input placeholder="请输入内容" v-model="chsRadio" size="medium">
                  <template slot="prepend">Http://</template>
                  <template slot="append">.com</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="chsRadio">
                  <el-select v-model="chsRadio" slot="prepend" placeholder="请选择..." clearable>
                    <el-option v-for="item in radioData" :key='item' :label="item" :value="item"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-autocomplete v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" suffix-icon="el-icon-edit">
                  <template slot-scope="{item}">
                    <div style="margin: 5px 0;">
                      <div class="name">{{item.value}}</div>
                      <div class="addr">{{item.address}}</div>
                    </div>
                  </template>
                </el-autocomplete>
                <el-input type="text" v-model="state" maxlength="10" show-word-limit></el-input>
              </div>
              <div class="itemDiv">
                <el-input-number v-model="chsRadio" :min="0" :max="10"></el-input-number>
              </div>
              <div class="itemDiv">
                <el-select v-model="chsCheckbox" multiple placeholder="请输入">
                  <el-option v-for="item in radioData" :key='item' :label="item" :value="item"></el-option>
                </el-select>
              </div>
              <div>
                <jspang></jspang>
                <panda></panda>
                <xiongmao :position="address"></xiongmao>
                <component :is="who"></component>
                <el-button type="primary" size="mini" @click="changeComp">changeComp</el-button>
              </div>
            </el-main>
          </el-container>
          <el-footer>el-footer</el-footer>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
Vue.component('jspang', {
  template: `<div style="color: #ff0000;">全局组件</div>`
});
export default {
  name: 'pos',
  data () {
    return {
      who: 'componentA',
      address: 'China',
      restaurants: [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ],
      state: '',
      chsCheckboxAll: false,
      isIndeterminate: true,
      chsCheckbox: [],
      chsRadio: 6,
      radioData: [0, 3, 6, 9],
      tableData: [
        {
          goodsName: '可口可乐',
          price: 8,
          count: 1
        }, {
          goodsName: '香辣鸡翅堡',
          price: 25,
          count: 1
        }, {
          goodsName: '爱心薯条',
          price: 16,
          count: 1
        }, {
          goodsName: '甜筒',
          price: 6,
          count: 1
        }
      ],
      isShow: true,
      isZoomShow: false,
      isClpsShow: true,
      tableData2: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
        ]
    }
  },
  components: {
    'panda': {
      template: `<div style="color: #ff0000;">局部组件</div>`
    },
    'xiongmao': {
      template: `<div style="color: #ff0000;">Xiongmao is from {{ position }}</div>`,
      props: ['position']
    },
    'componentA': {
      template: `<div style="color: #ff0000;">componentA</div>`
    },
    'componentB': {
      template: `<div style="color: #ffff00;">componentB</div>`
    },
    'componentC': {
      template: `<div style="color: #ff9900;">componentC</div>`
    },
  },
  methods: {
    changeComp() {
      if(this.who == 'componentA'){
        this.who = 'componentB'
      }else if (this.who == 'componentB') {
        this.who = 'componentC'
      }else{
        this.who = 'componentA'
      }
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleBoxChs: function() {
      if (this.chsCheckbox.length == this.radioData.length) {
        this.chsCheckboxAll = true;
      }else {
        this.chsCheckboxAll = false;
      }
    },
    chsBoxAll: function() {
      if (this.chsCheckboxAll) {
        this.chsCheckbox = this.radioData;
      }else {
        this.chsCheckbox = [];
      }
    },
    addTr: function() {
      this.tableData.push({
        goodsName: '',
        price: null,
        count: null
      });
    },
    saveTr: function() {
      console.log(this.tableData);
    }
  },
  created: function() {
    // axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    // .then(reponse => {
    //   console.log(reponse);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemDiv{
  margin-bottom: 10px;
}
.el-radio, .el-checkbox{
  color: #fff;
}
.el-input{
  margin-top: 5px;
  width: auto;
}
.el-select{
  min-width: 90px;
}
/*div.pos{
  width: calc(100% - 80px);
}*/
div.mainBody{
  height: 100%;
  background: #c2c2c2;
}
div.orderList{
  height: 100%;
  background: #fff;
  position: relative;
}
div.ctrlBtn{
  margin-top: 10px;
}
div.zoomTest div{
  position: fixed;
  width: 200px;
  height: 120px;
  background: #3399ff;
  z-index: 10;
  border-radius: 10px;
  color: #fff;
}
div.zoomTest div.zoomCtr{
  top: calc(50% - 60px);
  left: calc(50% - 100px);
}
div.zoomTest div.zoomTop{
  top: 0;
  left: calc(50% - 100px);
}
div.zoomTest div.zoomBtm{
  bottom: 0;
  left: 0;
}
div.collapseTest{
  margin-top: 10px;
}
div.collapseTest div.clpsDiv div.clps{
  width: 200px;
  height: 100px;
  line-height: 100px;
  background: #3366dd;
  color: #fff;
  border-radius: 10px;
  margin: 5px auto;
}
.el-footer{
  background: #0000ff;
}
.orderListTbl{
  width: 100%;
  background: #c0c0c0;
}
.orderListTbl tr td{
  background: #fff;
}
.orderListTbl tr td input{
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  height: 28px;
}
.name {
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 24px;
}
.addr {
  font-size: 12px;
   line-height: 16px;
  color: #b4b4b4;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
