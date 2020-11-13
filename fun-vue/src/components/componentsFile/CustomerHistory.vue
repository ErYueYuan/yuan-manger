<template>
    <div class="posi2 mar3-5 bg7 b-radius1">
        <section class="">
            <div>
                <section class="mar3-2">
                    <lazy-component>
                        <div class="b-sh1   bg7  mar7-3 "  v-for="(item,index) in proposalList" :key="index">
                            <section class="blk-cont2020  ">
                                <div class="mar7">
                                    <ul class="cont-blk  icon-wrap " @click="goHistoryDetail(item.proposalId)">
                                        <li class="li-p6  posi2 clearfix">
                                            <div class="product2020 f-left posi2">
                                                <img v-lazy="item.ERiskPicRelaPath" />
                                            </div>
                                            <div class="info-blk  ">
                                                <h3 class=" mess f3 c44 ">{{item.riskName}}</h3>
                                                <p v-if="item.insuredsex != '2'">{{'被保人：' + (item.insuredsex == 1 ? '男' : '女') + '&nbsp;&nbsp;&nbsp;&nbsp;' + item.insuredage.slice(0,-1) + '周岁&nbsp;&nbsp;&nbsp;'}}</p>
                                                <p v-if="item.insuredsex == '2'">{{'被保人：' + '未知' + '&nbsp;&nbsp;&nbsp;&nbsp;' + item.insuredage.slice(0,-1) + '周岁&nbsp;&nbsp;&nbsp;'}}</p>
                                                <div class="t-left f2 c4 mar2">
                                                    编码: {{item.proposalNo}}
                                                </div>
                                                <div class="t-left c4 f2 ">
                                                    首期保费:<span class="c9">{{item.totalamount}}元</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="f-flex pad1 border-t" style="align-items: center;">
                                        <div class="f1-2 " style="color: #666;">{{item.createDate.slice(0,4)}}-{{item.createDate.slice(4,6)}}-{{item.createDate.slice(6)}}</div>
                                        <div class="t-right mar6-2 pad6-1 " v-show="totalCount!=0">
                                            <button class=" ek-btn-3 min-w f1 mar5-3"  @click="goProposalEdit(item.proposalId)">编辑</button>
                                            <button class=" ek-btn-3 min-w f1" @click="delProposal(item.proposalId)">删除</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </lazy-component>
                    <van-empty v-show="totalCount===0" description="暂无历史方案" />
                    <div class="f2 pad888" v-if="proposalList.length>=totalCount && proposalList.length>0">
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
                proposalList: [],
                totalCount: 0,
                isLoad: true,
                allLoaded: false,
                queryLoading: true,
                offset: 1,
                limit: 10,
                isDel: false,
                isTrue: false,//确定删除
            }
        },
        computed: {
            ...mapGetters(['user']),
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].className = "bg3";
        },
        created() {
            this.queryProposalList();//历史方案列表
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
                    this.this.queryProposalList();//历史方案列表();
                }
            },

            queryProposalList () {
                const _data = {
                    agentCode: this.user.userInfo.agentcode,
                    saasId: tool.app.saasId,
                    operation: "1",
                    pagesize: this.limit,
                    pageoffset: this.offset,
                    uuserId: this.user.userInfo.userId,
                    customerId: this.customerClientNewId,
                    platformId: tool.app.platformId
                }
                api_sell.queryProposalList(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.isLoad = false;
                        this.totalCount = data.totalCount;
                        if (this.offset === 1 || this.proposalList.length === 0) {
                            this.proposalList = data.dataM.proposalList ? data.dataM.proposalList : []
                            if (this.proposalList.length < this.totalCount) {
                                this.queryLoading = false;
                            }
                        } else {
                            this.proposalList = this.proposalList.concat(data.dataM.proposalList);
                        }
                        this.allLoaded = this.proposalList.length >= this.totalCount;
                        if (this.allLoaded) {
                            this.queryLoading = true;
                        }
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            goProposalEdit (proposalId) {//复制方案到lzg
                const channelUserId = this.user.userInfo.mobile || this.user.userInfo.agentcode,
                    backPath = tool.strToHexCharCode(window.location.href),
                    identificationStatus = this.user.userInfo.status || '';
                window.location.href = tool.app.lzgUrl + '#/source/channelUserId=' + channelUserId + '&opType=4&status=' + identificationStatus + '&proposalId=' + proposalId  + '&backPath=' + backPath +'&platformId=2724341dfdc5463cbf167f1195da6e3e&platformCode=12';
            },

            goHistoryDetail (proposalId) {//到lzg的个人计划书详情
                const channelUserId = this.user.userInfo.mobile || this.user.userInfo.agentcode,
                    backPath = tool.strToHexCharCode(window.location.href),
                    identificationStatus = this.user.userInfo.status || '';
                window.location.href = tool.app.lzgUrl + '#/source/channelUserId=' + channelUserId + '&opType=6&status=' + identificationStatus + '&proposalId=' + proposalId + '&backPath=' + backPath + '&platformId=2724341dfdc5463cbf167f1195da6e3e&platformCode=12';
                // window.location.href = tool.app.lzgUrl + '#/source/channelUserId=' + channelUserId + '&opType=6&status=' + identificationStatus + '&proposalId=' + proposalId + '&platformId=2724341dfdc5463cbf167f1195da6e3e&platformCode=12';
            },

            delProposal (id) {
                const _data = {
                    saasId: tool.app.saasId,
                    proposalNoList: [id],
                    agentCode: this.user.userInfo.agentcode,
                    platformId: tool.app.platformId
                }
                api_sell.delProposalList(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.queryProposalList();
                        tool.toastMessage(data.message);
                    } else {
                        tool.toastMessage(data.message, 'error');
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
