export default {
  /**
   * @description 是否为生产环境
   */
  isProduction: process.env.NODE_ENV === "production",
  /**
   * @description 浏览器标签的title
   */
  title: "笔歌拼团",
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    develoment: "",
    production: "",
  },
};
