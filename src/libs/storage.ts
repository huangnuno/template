class Storage {
  get len() {
    return sessionStorage.length;
  }

  /**
   * 获取数据
   * @param key
   */
  public get(key) {
    const data = sessionStorage.getItem(key);
    return data && JSON.parse(data);
  }
  /**
   * 设置缓存
   * @param key
   * @param value
   */
  public set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 删除缓存
   * @param key
   */
  public delete(key) {
    sessionStorage.removeItem(key);
  }
}

export default new Storage();
