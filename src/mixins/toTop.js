import Event from "@/event";

export default function (container) {
  return {
    mounted() {
      Event.$on("toTop", this.toTop);
      this.$refs[container].addEventListener("scroll", this.wrapperScroll);
    },
    beforeDestroy() {
      this.$refs[container].removeEventListener("scroll", this.wrapperScroll);
    },
    methods: {
      wrapperScroll() {
        Event.$emit("wrapperScroll", this.$refs[container]);
      },
    },
  };
}
