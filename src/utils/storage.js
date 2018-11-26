export default {
  /**
   * 存值到localStorage
   * @param  {string} key   待设置的key
   * @param  value 待设置的值
   * @return {void}
   */
  setLocalItem(key, value) {
    // console.log(`[localStorage]: set @key ${key} @value ${value}`);
    localStorage.setItem(key, value);
  },

  /**
   * 从localStorage取值
   * @param  {string} key 待获取的key
   * @return {string}     若没有则返回空字符串
   */
  getLocalItem(key) {
    const value = localStorage.getItem(key);
    // console.log(`[localStorage]: get @key ${key} @value ${value}`);
    return value;
  },

  /**
   * removeLocalItem
   * @param key
   */
  removeLocalItem(key) {
    localStorage.removeItem(key);
  },

  /**
   * 存值到sessionStorage
   * @param  {string} key   待设置的key
   * @param  {string} value 待设置的值
   * @return {void}
   */
  setSessionItem(key, value) {
    // console.log(`[sessionStorage]: set @key ${key} @value ${value}`);
    sessionStorage.setItem(key, value);
  },

  /**
   * 从sessionStorage取值
   * @param  {string} key 待获取的key
   * @return {string}     若没有则返回空字符串
   */
  getSessionItem(key) {
    const value = sessionStorage.getItem(key);
    // console.log(`[sessionStorage]: get @key ${key} @value ${value}`);
    return value;
  },

  /**
   * removeSessionItem
   * @param key
   */
  removeSessionItem(key) {
    sessionStorage.removeItem(key);
  },
};
