<template>
  <div>
    <p>输入框: {{ name }}</p>
    <input v-model.trim="name" type="text">
    <input v-model.lazy="name" type="text">
    <input v-model.number="age" type="text">

    <p>多行文本: {{ desc }}</p>
    <textarea v-model="desc" />
    <!-- 注意，<textarea>{{desc}}</textarea> 是不允许的！！！ -->

    <p>复选框 {{ checked }}</p>
    <input v-model="checked" type="checkbox">

    <p>多个复选框 {{ checkedNames }}</p>
    <input id="jack" v-model="checkedNames" type="checkbox" value="Jack">
    <label for="jack">Jack</label>
    <input id="john" v-model="checkedNames" type="checkbox" value="John">
    <label for="john">John</label>
    <input id="mike" v-model="checkedNames" type="checkbox" value="Mike">
    <label for="mike">Mike</label>

    <p>单选 {{ gender }}</p>
    <input id="male" v-model="gender" type="radio" value="male">
    <label for="male">男</label>
    <input id="female" v-model="gender" type="radio" value="female">
    <label for="female">女</label>

    <p>下拉列表选择 {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <p>下拉列表选择（多选） {{ selectedList }}</p>
    <select v-model="selectedList" multiple>
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '双越',
      age: 18,
      desc: '自我介绍',

      checked: true,
      checkedNames: [],

      gender: 'male',

      selected: '',
      selectedList: []
    }
  }
}
</script>
