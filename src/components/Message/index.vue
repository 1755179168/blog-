<template>
  <div class="bord-container">
    <div class="nickname">
      <input
        type="text"
        placeholder="请输入昵称"
        v-model="nickNameCount.text"
        maxlength="10"
      >
      <div class="nickname-count">
        <span class="currentText">{{nickNameCount.text.length>10?10:nickNameCount.text.length}}</span>
        &nbsp;/&nbsp;
        <span class="targetText">
          10
        </span>
      </div>
    </div>
    <div class="p">
      <textarea
        maxlength="300"
        name="text"
        id=""
        placeholder="输入内容"
        v-model="contentCount.text"
      ></textarea>
      <div class="count">
        <span class="currentText">{{contentCount.text.length>300?10:contentCount.text.length}}</span>&nbsp;/&nbsp;<span class="targetText">300</span>
      </div>
    </div>
    <div
      class="btn"
      :style="{margin:'20px 0'}"
    >
      <button
        @click="submit"
        :class="{isClick:isClick}"
      >提交</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "message",
  data() {
    return {
      isClick: false,
      nickNameCount: {
        count: 0,
        text: "",
      },
      contentCount: {
        count: 0,
        text: "",
      },
    };
  },
  computed: {},
  created() {},
  methods: {
    async submit() {
      this.isClick = true; //这里显示提交按钮的点击事件，不要忘记在给出的参数中
      this.$emit(
        "submit",
        {
          nickName: this.nickNameCount.text, //这里面的参数应该是自然数或数组或字符串形式的数组，如果不能被Python解释并将其用代码解释，可以将其用数字或字符串形式。 不要使用MDN的文本数据类型中的字符串参数，否则会导致它们被转换为字符串类型。 不要使用“=”符号，否则会导致“=”出现
          content: this.contentCount.text, //这里面的参数应该是自然数或数组或字符串形式的数组
          date: Date.now(), //这里面的参数应该是一个整数或形式的字符串，记住这个参数是在提交日期时显示的。不要使用MDN的文本数据类型中的整数参数，
        },
        () => {
          this.isClick = false; //这里面的回合应该是一个函数，当成功提交时调用该函数，并传递true或false。 不要使用“=”符号，否则会导致“=”出现。给出的参数应该是自然数或数组或字符串形式的数组或字符串。 不要使用数字或字符串参数，否则会导致“=”出现。给出的参数应该
          this.nickNameCount = {
            count: 0,
            text: "",
          }; //这里面的变量应该是一个整数，表示提交成功的次
          this.contentCount = {
            count: 0,
            text: "",
          };
        }
      );
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin/mixin.less";
.bord-container {
  textarea {
    width: 600px;
    height: 200px;
    border: 1px dashed rgb(88, 156, 163);
    border-radius: 5px;
    overflow: hidden;
    resize: none;
    text-indent: 2em;
    line-height: 1em;
    outline: none; //for firefox only. ick. ick. ick. ick. ick. ick. ick. ick.
  }
  div.count {
    position: absolute;
    right: 0px;
    bottom: 2px;
  }
  div.p {
    position: relative;
    width: 600px;
  }
  div.nickname-count {
    position: absolute; // for firefox only. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick. ick.
    right: 0;
    top: 0;
  }
  div.nickname {
    margin: 0 0 20px 0;
    border: 1px dashed rgb(88, 156, 163);
    height: 30px;
    width: 300px;
    line-height: 30px;
    border-radius: 5px;
    position: relative;
  }
  button {
    padding: 10px 28px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background-color: rgb(71, 99, 217);
  }
  button.isClick {
    cursor: not-allowed;
    color: #eee;
    background-color: rgb(122, 140, 214);
  }
}
</style>