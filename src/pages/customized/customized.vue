<template>
  <div class="flexBox">
    <div>定制</div>
    <div class="mainBox">
      <div class="List">
        <div>
          <van-cell @click="showPopup">北京</van-cell>
          <van-popup v-model="show" position="bottom" :style="{ height: '80%' }" closeable round>
            <div class="fromCityList">
              <div class="fromCity">选择出发城市</div>
              <div class="hotcity"></div>
              <div class="cityList">
                <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                  <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
              </div>
            </div>
          </van-popup>
        </div>
        <div>
          <svg
            t="1574682235522"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8568"
            width="16"
            height="16"
          >
            <path d="M45.3 559.8v-95.4L0.1 466.9v90.4z" fill="#707070" p-id="8569" />
            <path d="M180.9 567.4V456.9l-90.4 5v100.4z" fill="#707070" p-id="8570" />
            <path
              d="M1024.1 512.1L768.4 240.9v183.3l-542.3 30.2v115.5L768.4 600v183.3z"
              fill="#707070"
              p-id="8571"
            />
          </svg>
        </div>
        <div>
          <van-cell @click="Mudidi" class="BEBEBEFont">
            <span v-if="MuIf" class="BEBEBEFont">目的地</span>
            <span v-else>{{MuList}}</span>
          </van-cell>
          <van-popup
            v-model="showMudidi"
            position="bottom"
            :style="{ height: '80%' }"
            closeable
            round
          >
            <div class="MudidiBox">
              <div class="MudidiTitle">选择目的地</div>
              <div class="MudidiTag">国际</div>
              <div class="MudidiMain" v-for="City in MudidiList" :key="City.id">
                <div class="MudidiMainTitle">{{City.label}}</div>
                <div>
                  <van-grid :column-num="4" :gutter="10">
                    <van-grid-item
                      v-for="cityList in City.children"
                      :key="cityList.id"
                      :text="cityList.label"
                      @click="TohandClick"
                    />
                  </van-grid>
                </div>
              </div>
            </div>
          </van-popup>
        </div>
      </div>
      <div class="List">
        <van-cell @click="Time" class="BEBEBEFont">
          <span class="BEBEBEFont" v-if="TimeCC">选择出行时间</span>
          <span v-else>{{DayData[0]}}</span>
        </van-cell>
        <van-popup v-model="TimeCare" position="bottom" :style="{ height: '50%' }" round>
          
            <div class="MoneyTitle">选择出行时间</div>
            <div class="TimeMain">
              <van-datetime-picker v-model="currentDate" type="date" @confirm="confirmClick" @cancel="cancelClick"  :min-date="minDate"/>
            </div>
        
        </van-popup>
        <div></div>
      </div>
      <div class="List">
        <div>
          <van-cell @click="Num" class="BEBEBEFont">{{Chengren1}}成人{{Ertong1}}儿童</van-cell>
          <van-popup v-model="NumLa" position="bottom" :style="{ height: '35%' }" closeable round>
            <div class="TitleBox">
              <div class="Numtitle">选择出行人数</div>
              <div class="NumMain">
                <div class="Num1">出行人数</div>
                <div class="Num2">
                  <div>成人</div>
                  <van-stepper v-model="Chengren" integer @change="handClick" :min="1" />
                </div>
                <div class="Num2">
                  <div>儿童（已满两周岁未满十二周岁）</div>
                  <van-stepper v-model="Ertong" :min="0" integer @change="handClick1" />
                </div>
              </div>
              <div class="NumButton" @click="queding">确定</div>
            </div>
          </van-popup>
        </div>
        <div></div>
      </div>
      <div class="List">
        <van-cell @click="Money">
          <span v-if="hello" class="BEBEBEFont">选择人均预算</span>
          <span v-else>{{List1}}</span>
        </van-cell>

        <van-popup v-model="MoneyO" position="bottom" :style="{ height: '55%' }" closeable round>
          <div>
            <div class="MoneyTitle">选择人均预算</div>
            <div>
              <van-list :finished="true" :immediate-check="false">
                <van-cell title="人均预算" />
                <van-cell
                  v-for="(item,index) in list1"
                  :key="item"
                  :title="item"
                  @click="MoneyClick(index)"
                />
              </van-list>
            </div>
          </div>
        </van-popup>
        <div></div>
      </div>
      <div class="ButtonMain">免费获取方式</div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup, List, Grid, GridItem, Stepper, DatetimePicker } from "vant";
Vue.use(Popup)
  .use(List)
  .use(Grid)
  .use(GridItem)
  .use(Stepper)
  .use(DatetimePicker);
import { get } from "utils/http";
export default {
  data() {
    return {
      currentDate: new Date(),
      show: false,
      minDate: new Date(),
      list: [],
      list1: [],
      loading: false,
      finished: false,
      showMudidi: false,
      MudidiList: [],
      NumLa: false,
      MuList: "",
      MuLangue: 0,
      value: 0,
      MoneyO: false,
      Chengren: 2,
      Ertong: 0,
      Chengren1: 2,
      Ertong1: 0,
      List1: "",
      hello: true,
      MuIf: true,
      TimeCare: false,
      DayData:[],
      TimeCC:true
    };
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/m1/area/group?scene=3&platform=4"
    });
    this.MudidiList = result.data.list;
    console.log(this.MudidiList);
    let result2 = await get({
      url: "/api/v3/m1/customize/budget?platform=4"
    });
    this.list1 = result2.data.list;
    console.log(this.MudidiList);
  },
  methods: {
    Time() {
      this.TimeCare = true;
    },
    showPopup() {
      this.show = true;
    },
    Mudidi() {
      this.showMudidi = true;
    },
    Num() {
      this.NumLa = true;
    },
    TohandClick(Event) {
      this.MuIf = false;
      this.MuList = Event.toElement.innerText;
      this.showMudidi = false;
    },
    Money() {
      this.MoneyO = true;
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    handClick(value) {
      this.Chengren = value;
    },
    handClick1(value) {
      this.Ertong = value;
    },
    queding() {
      this.Chengren1 = this.Chengren;
      this.Ertong1 = this.Ertong;
      this.NumLa = false;
    },
    MoneyClick(index) {
      this.List1 = this.list1[index];
      this.hello = false;
      this.MoneyO = false;
    },
    confirmClick(){
      var date = this.currentDate;
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.currentdate =
        date.getFullYear() + seperator1 + month + seperator1 + strDate;
      this.DayData.splice(0,1,this.currentdate)
      console.log( this.DayData);
      this.TimeCC=false
      this.TimeCare=false
    },
    cancelClick(){
      this.TimeCare=false
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~assets/border.styl'
.flexBox
  display flex
  flex-direction column
  padding 0 0.18rem
.mainBox
  display flex
  height 2.8rem
  $border(2px, #ebedf0, solid)
  flex-direction column
  margin-top 0.2rem
  padding 0 0.25rem
  box-shadow 0 0 0.21333rem 0 rgba(0, 0, 0, 0.08)
  border-radius 0.08rem
.List
  padding 0.05rem 0rem
  display flex
  justify-content space-between
  align-items center
  $border(0 0 2px 0, #ebedf0, solid)
  width 100%
.ButtonMain
  height 0.44rem
  background-color #C14374 !important
  margin auto
  width 100%
  border-radius 0.05rem
  text-align center
  color #fff
  line-height 0.44rem
  font-size 0.15rem
.BEBEBEFont
  color #BEBEBE
.fromCityList
  display flex
  flex-direction column
.hotcity
  height 1.7rem
.fromCity
  margin-top 0.1rem
  font-size 0.15rem
  text-align center
.cityList
  text-align left
.MudidiBox
  display flex
  flex-direction column
  padding 0.18rem
.MudidiTitle
  margin-top 0.1rem
  font-size 0.15rem
  text-align center
.MudidiMainTitle
  margin 0.15rem 0
.TitleBox
  display flex
  flex-direction column
  padding 0 0.18rem
.Numtitle
  height 0.4rem
  text-align center
  line-height 0.4rem
  font-size 0.15rem
.NumMain
  display flex
  flex-direction column
.Num2
  display flex
  justify-content space-between
  padding 0.15rem 0 0 0
  font-size 0.15rem
.NumButton
  margin-top 0.2rem
  width 100%
  height 0.44rem
  background-color #C04374
  border-radius 0.05rem
  text-align center
  line-height 0.44rem
  font-size 0.16rem
  color #fff
.MoneyTitle
  height 0.44rem
  text-align center
  line-height 0.44rem
  font-size 0.15rem

</style>