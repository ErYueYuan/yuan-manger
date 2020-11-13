<template>
    <div class="bg3">
        <div class="fun-top-panel bg7" @click="goBack()">
            <span class="mess-back "><div class="cont"></div></span>
            <span class="title c3 f3 dblock2 t-center ">添加家庭成员</span>
        </div>
        <div class="main-container mar3-7 no-bot clearfix" style="padding-bottom: 220px;">
            <section class="b-radius3  bg7 mar3-2">
                <dl id="relation" class="per-box52   border-b" @click="showPopup('relation')">
                    <dt class="c6 f3-1">关系<span class="c8">&nbsp;*</span></dt>
                    <dd class="t-right f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.relationName"></dd>
                </dl>
                <dl class="per-box52   border-b">
                    <dt class="c6 f3-1">姓名<span class="c8">&nbsp;*</span></dt>
                    <dd class="t-right f3 clearfix"><input type="text" class="ed-input w2 t-right" placeholder="请输入" v-model="familyList.name"><span class="f-right insure-icon icon-addr mar1-2" title=""></span></dd>
                </dl>
                <dl class="per-box52   border-b">
                    <dt class="c6 f3-1">手机号码</dt>
                    <dd class="t-right f3"><input type="text" class="ed-input t-right" placeholder="请输入" v-model="familyList.mobile"></dd>
                </dl>
                <dl class="per-box52   border-b">
                    <dt class="c6 f3-1">性别</dt>
                    <dd class="t-right f3 ">
                        <div class="f-right pad4 t-left">
                            <label class="reg-sel-btn posi2">
                                <input type="radio" name="a" v-model="familyList.sex" @change="chooseMan">
                                <b class="btn">男</b>
                            </label>
                        </div>
                        <div class="f-right pad4 t-left">
                            <label class="reg-sel-btn posi2">
                                <input type="radio" name="a" v-model="familyList.sex" @change="chooseWoman">
                                <b class="btn">女</b>
                            </label>
                        </div>
                    </dd>
                </dl>
                <dl class="per-box52   border-b" @click="showDate('birthday')">
                    <dt class="c6 f3-1">出生日期</dt>
                    <dd class="t-right  f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.birthday"></dd>
                </dl>
                <dl class="per-box52   border-b">
                    <dt class="c6 f3-1">年龄</dt>
                    <dd class="t-right  f3 "><input type="text" class="ed-input t-right" placeholder="请输入" disabled v-model="familyList.age"></dd>
                </dl>
                <dl id="country" class="per-box52   border-b" @click="showPopup('country')">
                    <dt class="c6 f3-1">国籍</dt>
                    <dd class="t-right  f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.countryName"></dd>
                </dl>
                <dl id="marry" class="per-box52   border-b" @click="showPopup('marry')">
                    <dt class="c6 f3-1">婚姻</dt>
                    <dd class="t-right  f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.marryName"></dd>
                </dl>
                <dl id="certype" class="per-box52" @click="showPopup('idType')">
                    <dt class="c6 f3-1">证件类型</dt>
                    <dd class="t-right  f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.cerTypeName"></dd>
                </dl>
                <dl id="cerValiddateType" class="per-box52   border-b  border-t" v-if="isSfz" @click="showPopup('dateType')">
                    <dt class="c6 f3-1">证件有效期类型</dt>
                    <dd class="t-right  f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.cerValiddateTypeName"></dd>
                </dl>
                <dl class="per-box52   border-b" v-show="isSfz && isEndDate" @click="showEndDate('endDate')">
                    <dt class="c6 f3-1">证件有效期止期</dt>
                    <dd class="t-right  f3  arrow"><input type="text" class="ed-input t-right" placeholder="请选择" disabled :value="familyList.cerValiddate"></dd>
                </dl>
                <dl class="per-box52   border-b">
                    <dt class="c6 f3-1">证件号码</dt>
                    <dd class="t-right f3  clearfix"><input type="text" class="ed-input t-right" placeholder="请输入" v-model="familyList.cerCode"><span class="f-right insure-icon icon-addr mar1-2" title=""></span></dd>
                </dl>
            </section>
        </div>
        <div class="pad5-9 posi1 b1 bg7 border-t">
            <div class="reg-bt t-center">
                <button type="button" class="b-right" style="width: 100%;border-radius: 50px;" @click="saveFamilyInfo()">保存</button>
            </div>
        </div>

        <van-popup v-model="isShow" round position="bottom" :style="{height: '50%'}">
            <van-picker
                show-toolbar
                :value-key="contentValueKey"
                :columns="popList"
                @cancel="isShow = false"
                @confirm="selectContent"
                :style="{width: '100%'}"
                :title="popTitle"
            />
        </van-popup>

        <van-popup
            v-model="currentDateShow"
            position="bottom"
            :style="{height:'50%'}"
        >
            <van-datetime-picker
                @confirm="confirm"
                @cancel="currentDateShow = false"
                v-model="currentDate"
                type="date"
                title="出生日期"
                :min-date="minDate"
                :max-date="maxDate"
                :formatter="formatter"
            />
        </van-popup>

        <van-popup
            v-model="endDateShow"
            position="bottom"
            :style="{height:'50%'}"
            round
        >
            <van-datetime-picker
                @confirm="confirm"
                @cancel="endDateShow = false"
                v-model="currentDate"
                type="date"
                title="证件有效期止期"
                :min-date="endMinDate"
                :max-date="endMaxDate"
                :formatter="formatter"
            />
        </van-popup>

    </div>
</template>
<script>
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    import * as tool from '@/common/Tool'
    import { api_sell } from '@/api/index'
    import DataSource from '@/common/DataSource'
    import Vd from '@/common/Validator'
    import '@vant/touch-emulator'
    import { Popup, DatetimePicker, Picker } from 'vant'

    Vue.use(Popup)
    Vue.use(DatetimePicker)
    Vue.use(Picker)

    export default {
        name: "addFamily",
        data () {
            return {
                isShow: false,
                contentValueKey: 'name',
                popList: [],
                popTitle: '请选择',


                clientNewId: this.$route.params.q,
                resultId: this.$route.params.r,
                familyList: [],
                relationList: [],
                countryList: [],
                marriageList: [],
                idtypeList: [],
                dateTypeList: [
                    {
                        name: "长期",
                        value: "0",
                        type: "dateType"
                    },
                    {
                        name: "非长期",
                        value: "1",
                        type: "dateType"
                    }
                ],
                masterList: [],
                minDate: new Date(1870, 0, 1),
                maxDate: new Date(),
                currentDate: new Date(),
                currentDateShow: false,
                cerValidDateTypeShow: false,
                endMinDate: new Date(1870, 0, 1),
                endMaxDate: new Date(2170, 0, 1),
                isEndDate: false,
                endDateShow: false,
                isSfz: false,
            }
        },
        computed: {
            ...mapGetters(['user']),
        },
        components: {

        },
        created () {
            this.getCustomerDetail();//家主本人信息
            this.queryRelation();//关系
            this.queryCountry();//国籍
            this.queryMarriage();//婚姻
            this.queryIdtype();//证件类型
        },
        methods: {
            getCustomerDetail () {
                const _data = {
                    saasId: tool.app.saasId,
                    clientNewId: this.clientNewId
                }
                api_sell.getCustomerDetail(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        if (data.customerDetail) {
                            this.masterList = data.customerDetail;
                        }
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            queryRelation () {
                const _data = {type: 'cus_relation/' + tool.app.platformCode + '/' + tool.app.saasId}
                api_sell.sysDict(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.relationList = data.params.dicts.filter(function(item){
                            return item.value != '01'
                        })
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            queryCountry () {
                const _data = {type: 'cbs_country/' + tool.app.platformCode + '/' + tool.app.saasId}
                api_sell.sysDict(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.countryList = data.params.dicts;
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            queryMarriage () {
                const _data = {type: 'cbs_marriage/' + tool.app.platformCode + '/' + tool.app.saasId}
                api_sell.sysDict(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.marriageList = data.params.dicts;
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            queryIdtype () {
                const _data = {type: 'cbs_idtype/' + tool.app.platformCode + '/' + tool.app.saasId}
                api_sell.sysDict(_data).then(data => {
                    if (data.status == tool.rtCode.status) {
                        this.idtypeList = data.params.dicts;
                    } else {
                        tool.toastMessage(data.message, 'error');
                    }
                })
            },

            showPopup (type) {
                this.isShow = true;
                if (type == 'relation') {
                    this.popList = this.relationList;
                    this.popTitle = '关系';
                } else if (type == 'country') {
                    this.popList = this.countryList;
                    this.popTitle = '国籍';
                } else if (type == 'marry') {
                    this.popList = this.marriageList;
                    this.popTitle = '婚姻';
                } else if (type == 'dateType') {
                    this.popList = this.dateTypeList;
                    this.popTitle = '证件有效期类型';
                } else if (type == 'idType') {
                    this.popList = this.idtypeList;
                    this.popTitle = '证件类型';
                }
            },
            selectContent (values, index) {
                this.isShow = false;
                if (values.type == 'cus_relation') {
                    this.familyList.relationFlag = values.value;
                    this.familyList.relationName = values.name;
                } else if (values.type == 'cbs_country') {
                    this.familyList.nationality = values.value;
                    this.familyList.countryName = values.name;
                } else if (values.type == 'cbs_marriage') {
                    this.familyList.marriage = values.value;
                    this.familyList.marryName = values.name;
                } else if (values.type == 'dateType') {
                    this.familyList.cerValiddateType = values.value;
                    this.familyList.cerValiddateTypeName = values.name;
                    this.cerValidDateTypeShow = false;
                    if (values.value == '1') {
                        this.isEndDate = true;
                    } else {
                        this.isEndDate = false;
                    }
                } else if (values.type == 'cbs_idtype') {
                    this.familyList.cerType = values.value;
                    this.familyList.cerTypeName = values.name;
                    if (values.value == '01') {
                        this.isSfz = true;
                        this.familyList.cerValiddateType = "";
                        this.familyList.cerValiddate = "";
                    } else {
                        this.isSfz = false;
                    }
                }
            },

            showDate (type) {
                this.currentDateShow = true;
                this.confirmType = type;
            },

            showEndDate (type) {
                this.endDateShow = true;
                this.confirmType = type;
            },

            chooseMan () {
                this.familyList.sex = "1";
            },
            chooseWoman () {
                this.familyList.sex = "0";
            },
            confirm(val) {
                this.currentDateShow = false;
                this.endDateShow = false;
                
                let year = val.getFullYear()
                let month = val.getMonth() + 1
                let day = val.getDate()
                if (month >= 1 && month <= 9) { month = `0${month}` }
                if (day >= 1 && day <= 9) { day = `0${day}` }
                let value = `${year}-${month}-${day}`
                if(this.confirmType == 'birthday'){
                    this.familyList.birthday = value;
                    // 计算年龄
                    let returnAge;
                    let strBirthdayArr = this.familyList.birthday.split("-");
                    let birthYear = strBirthdayArr[0];
                    let birthMonth = strBirthdayArr[1];
                    let birthDay = strBirthdayArr[2];

                    let d = new Date();
                    let nowYear = d.getFullYear();
                    let nowMonth = d.getMonth() + 1;
                    let nowDay = d.getDate();

                    if(nowYear == birthYear){
                        returnAge = 0;//同年 则为0岁
                    }else{
                        let ageDiff = nowYear - birthYear; //年之差
                        if(ageDiff > 0){
                            if(nowMonth == birthMonth){
                                let dayDiff = nowDay - birthDay;//日之差
                                if(dayDiff < 0){
                                    returnAge = ageDiff - 1;
                                }else{
                                    returnAge = ageDiff ;
                                }
                            }else{
                                let monthDiff = nowMonth - birthMonth;//月之差
                                if(monthDiff < 0){
                                    returnAge = ageDiff - 1;
                                }else{
                                    returnAge = ageDiff ;
                                }
                            }
                        }else{
                            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
                        }
                    }
                    this.familyList.age = returnAge;
                    return returnAge;//返回周岁年龄
                }else if(this.confirmType == 'endDate'){
                    this.familyList.cerValiddate = value;
                }
            },
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`
                } else if (type === 'month') {
                    return `${value}月`
                } else if (type === 'day') {
                    return `${value}日`
                }
                return value
            },

            saveFamilyInfo () {
                if (Vd.required(this.familyList.relationFlag, '请选择家庭成员与您的关系')
                    &&Vd.required(this.familyList.name, '请输入家庭成员姓名') && Vd.name(this.familyList.name, '您输入的姓名不符合规则')) {
                    const _data = {
                        agentCode: this.user.userInfo.agentcode,
                        saasId: tool.app.saasId,
                        clientNewId: this.clientNewId,//家主本人clientNewId
                        relationFlag: this.familyList.relationFlag,
                        name: this.familyList.name,
                        sex: this.familyList.sex,
                        mobile: this.familyList.mobile,
                        birthday: this.familyList.birthday,
                        age: this.familyList.age,
                        nationality: this.familyList.nationality,
                        marriage: this.familyList.marriage,
                        cerType: this.familyList.cerType,
                        cerCode: this.familyList.cerCode ? this.familyList.cerCode : '',
                        cerValiddateType: this.familyList.cerValiddateType,
                        cerValiddate: this.familyList.cerValiddateType == '1' ? this.familyList.cerValiddate : '',
                    }
                    api_sell.addFamilyMember(_data).then(data => {
                        if (data.status == tool.rtCode.status) {
                            this.$router.go(-1);
                        } else {
                            tool.toastMessage(data.message, 'error');
                        }
                    })
                }
            },

            goBack () {
                this.$router.go(-1);
            },

        }
    }
</script>
<style scoped>

</style>
