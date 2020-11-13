<template>
  <div class="bg3">
   <div class="fun-top-panel bg7 ">
      <span
        class="mess-back "
        @click="goBack()"
      >
        <div class="cont"></div>
      </span>
      <span class="title c3 f3 dblock2 t-center ">知识库</span>
    </div>
    <div class="main-top p-fix bg7 b-radius2">
      {{content}}
    </div>
  </div>
</template>

<script>
import { TopPanel } from "@/components/index";
import { api_my } from '@/api/index'
import * as tool from '@/common/Tool'
import { mapGetters } from 'vuex'
export default {
  name: 'repositorydetails',
  components: {
    "top-panel": TopPanel,
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.getKnowledgeContent();
  },
  data() {
    return {
      topPanel: {
        back: true,
        titles: "知识库详情",
      },
      content: ''
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    getKnowledgeContent() {
      let _data = {
        id: this.$route.params.p,
        saasId: this.user.userInfo.saasId
      }
      api_my.getKnowledgeContent(_data).then(res => {
        if (res.status == tool.rtCode.status) {
          this.content = res.content
        } else {
          tool.toastMessage(res.message, 'error');
        }
      })
    }
  },
}
</script>

<style>
</style>