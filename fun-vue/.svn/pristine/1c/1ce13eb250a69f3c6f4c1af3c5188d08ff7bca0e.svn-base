<template>
    <div class="posi2 mar3-5 bg7 b-radius1">
        <section class="">
            <div>
                <section class="mar3-2">
                    <div class="b-sh1  pad1-3 bg7  mar7-3">
                        <div class="stu-tracks3 posi2 mar5">
                            <ul class="border-b1" style="padding: 10px 0;"  v-for="(item, index) in funFollowUpDTOList" :key="index">
                                <li class="border-b1">
                                    <div class="top f2 c8">{{item.followTime.split('.')[0]  | dataFormat('yyyy-MM-dd hh:mm:ss')}}<span class="f-right ek-btn-7 f1 c-p" @click="editRecord(item.followUpId)">编辑跟进记录</span></div>
                                    <div class=" blk  posi2 ">
                                        <div class="f2 cont "><span class="tit">跟进内容</span><span class="txt">{{item.followContent}}</span></div>
                                        <div class="f2 cont "><span class="tit">需求评估</span><span class="txt">{{!!item.tagName ? item.tagName : '暂无'}}</span></div>
                                        <div class="f2 cont "><span class="tit">跟进结果</span><span class="txt">{{item.followUpResult}}</span></div>
                                        <div class="f2 cont ">
                                            <span class="tit">回访时间</span>
                                            <span class="txt" v-if="!!item.callbackTime">{{item.callbackTime.split('.')[0] | dataFormat('yyyy-MM-dd hh:mm:ss')}}</span>
                                            <span class="txt" v-if="!item.callbackTime">暂无</span>
                                        </div>
                                        <div class="f2 cont "><span class="tit">回访内容</span><span class="txt">{{item.callbackContent}}</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <van-empty v-show="total===0" description="暂无跟进记录" />
                    <div class="f2 pad888" v-if="funFollowUpDTOList.length>=total && funFollowUpDTOList.length>0">
                        <div class="lzg-h-more posi2 t-center">
                            <span class="c5 bg7 posi2 c222">没有更多啦</span>
                        </div>
                    </div>
                </section>
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
        name: "CustomerFollow",
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
                funFollowUpDTOList: [],//跟进列表
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
            this.queryFollowUpList();//跟进列表查询
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
                    this.queryFollowUpList();
                }
            },

            queryFollowUpList () {
                const _data = {
                    agentUserId: this.user.userInfo.userId,
                    saasId: tool.app.saasId,
                    resultId: this.customerResultId,
                    limit: this.limit,
                    offset: this.offset
                }
                api_sell.queryFollowUpList(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.isLoad = false;
                        this.total = data.total;
                        if (this.offset === 0 || this.funFollowUpDTOList.length === 0) {
                            this.funFollowUpDTOList = data.funFollowUpDTOList ? data.funFollowUpDTOList : []
                            if (this.funFollowUpDTOList.length < this.total) {
                                this.queryLoading = false;
                            }
                        } else {
                            this.funFollowUpDTOList = this.funFollowUpDTOList.concat(data.funFollowUpDTOList);
                        }
                        this.allLoaded = this.funFollowUpDTOList.length >= this.total;
                        if (this.allLoaded) {
                            this.queryLoading = true;
                        }
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            editRecord (followUpId) {
                this.$router.push({ name: 'followRecord',params: {// clientId,resultId,followUpId,add
                    p: this.customerClientId,
                    q: this.customerResultId,
                    r: followUpId,
                    s: 'edit'
                } })
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