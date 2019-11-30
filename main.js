Vue.component('messagebox', {
  props: ['talker', 'message'],
  template: `
    <div id="messagebox">
      <div id="talker">{{ talker }}</div>
      <div id="message">{{ message }}</div>
    </div>
  `,
});

Vue.component('selectbox', {
  props: ['item1', 'item2'],
  template: `
    <div id="selectbox">
      <div class="item">{{ item1 }}</div>
      <div class="item">{{ item2 }}</div>
    </div>
  `,
});

var vm = new Vue({
  el: "#app",
  data: {
    section: 2,
    talker: "",
    message: "",
    index: 0,
    selecting: false,
    item1: '',
    item2: '',
  },
  created: function () {
    this.talker = scenario[this.section].talks[this.index].talker;
    this.message = scenario[this.section].talks[this.index].content;
  },
  methods: {
    onTap: function () {
      this.index++;
    },
    changeSection: function (newSection) {
      this.section = newSection;
      this.index = 0;
    },
  },
  watch: {
    index: function (newIndex, oldIndex) {
      if(newIndex >= scenario[this.section].talks.length)
      {
        this.index = oldIndex;
      }
      else {
        this.talker = scenario[this.section].talks[this.index].talker;
        this.message = scenario[this.section].talks[this.index].content;
      }
    },
  }
});
