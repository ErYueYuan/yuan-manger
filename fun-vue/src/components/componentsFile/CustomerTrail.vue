<template>
    <div class="posi2 mar3-5 bg7 b-radius1">
        <section class="">
            <div>
                <section class="mar3-2">
                    <div class="b-sh1  pad1-3 bg7  mar7-3" v-for="(item, index) in trailList" :key="index">
                        <div class="blk-cont-box posi2  ">
                            <div class="img-box2 posi2">
                                <img v-if="!!customerBaseInfo.head" :src="customerBaseInfo.head" alt="pic">
                                <img v-if="!customerBaseInfo.head" src="../../assets/img/index/bar_bg.png" alt="pic">
                            </div>
                            <div class="right-box rb1 posi2 c-p">
                                <h3 class="f2 c6 mar7-2">访问产品“{{item.busName}}”</h3>
                                <div class="f1 c4 t-right">
                                    <span class="f-left"></span>{{item.viewdate}}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <van-empty v-show="total===0" description="暂无轨迹" />
                <div class="f2 pad888" v-if="trailList.length>=total && trailList.length>0">
                    <div class="lzg-h-more posi2 t-center">
                        <span class="c5 bg7 posi2 c222">没有更多啦</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    import * as tool from '@/common/Tool'
    import { api_sell } from '@/api/index'
    import '@vant/touch-emulator'
    import { Popup, Picker, Tab, Tabs, Empty } from 'vant'
    import * as scroll from '@/common/Scroll'

    Vue.use(Popup).use(Picker).use(Tab).use(Tabs).use(Empty)

    export default {
        name: "CustomerTrail",
        props: {
            customerClientId: {
                type: String, //要求父组件数据传输类型
                required: true  //必传
            },
            customerClientNewId: {
                type: String, //要求父组件数据传输类型
                required: true  //必传
            },
            customerResultId: {
                type: String, //要求父组件数据传输类型
                required: true  //必传
            },
        },
        data() {
            return {
                customerBaseInfo: {},
                trailList: [],
                total: 0,
                isLoad: true,
                allLoaded: false,
                queryLoading: true,
                offset: 0,
                limit: 10,
            }
        },
        computed: {
            ...mapGetters(['user']),
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].className = "bg3";
        },
        created() {
            this.queryBasicIntroduction();//基本介绍
            this.getCusVisitTrail();//查询访问轨迹
        },
        methods: {
            handleScroll() {
                if (scroll.getScrollTop() + scroll.getClientHeight() > (scroll.getScrollHeight() - 5)) {
                    this.loadMore();
                }
            },

            loadMore() {
                if (this.queryLoading) {
                    return
                }
                if (!this.isLoad) {
                    this.isLoad = true;
                    this.offset += 10;
                    this.getCusVisitTrail();
                }
            },

            queryBasicIntroduction () {
                const _data = {
                    saasId: tool.app.saasId,
                    clientId: this.customerClientId
                }
                api_sell.queryBasicIntroduction(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.customerBaseInfo = data;
                    }
                })
            },

            getCusVisitTrail () {
                const _data = {
                    saasId: tool.app.saasId,
                    clientNewId: this.customerClientNewId,
                    offset: this.offset,
                    limit: this.limit
                }
                api_sell.getCusVisitTrail(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.isLoad = false;
                        this.total = data.total;
                        if (this.offset === 0 || this.trailList.length === 0) {
                            this.trailList = data.result ? data.result : []
                            if (this.trailList.length < this.total) {
                                this.queryLoading = false;
                            }
                        } else {
                            this.trailList = this.trailList.concat(data.result)
                        }
                        this.allLoaded = this.trailList.length >= this.total;
                        if (this.allLoaded) {
                            this.queryLoading = true;
                        }
                    } else {
                        // tool.toastMessage(data.message, 'error');
                    }
                })
            }, 
        },
        beforeDestroy: function() {
            document.body.removeAttribute("class", "bg3");
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        },
    }
</script>
<style scoped>

</style>