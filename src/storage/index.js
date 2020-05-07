// 封装Storage存储
const STORAGE_KEY = "mall";
export default {
  // 存储值：module_name-模块(user) key-属性 value-值
  setItem(key, value, module_name) {
    // 如果是设置某一模块下的值则需要先判断
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }else{
      // 获取全部数据
      let val = this.getStorage();
      // 在数据内部添加新的属性及值
      val[key] = value;
      // 重新写入
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },

  // 获取值其中某个属性的值：module_name-模块(user) key-属性
  getItem(key, module_name) {
    // 获取某个模块下的属性：eg：user下面的userName属性属性值
    if (module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },

  // 获取所有mall中的数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  // 清空存储
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name){
      if (!val[module_name])return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  },
};
