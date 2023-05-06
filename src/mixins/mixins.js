/**
 *
 * @param {*} defaultData 数据的初始值
 * @param {Function} requestData
 * @returns
 */
export default function (defaultData = null, requestData = null) {
  return {
    data() {
      return {
        loading: true,
        fetchData: defaultData,
      };
    },
    async created() {
      if (requestData) {
        this.fetchData = await requestData();
        this.loading = false;
      }
    },
  };
}
