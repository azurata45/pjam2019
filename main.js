Vue.component("messagebox", {
  props: ["talker", "message"],
  template: `
    <div id="messagebox">
      <div id="talker">{{ talker }}</div><hr>
      <div id="message">{{ message }}</div>
    </div>
  `
});

var vm = new Vue({
  el: "#app",
  data: {
    section: 0,
    talker: "",
    message: "",
    index: 0,
    selecting: false,
    item1: "",
    item2: "",
  },
  created: function() {
    this.talker = scenario[this.section].talks[this.index].talker;
    this.message = scenario[this.section].talks[this.index].content;
  },
  methods: {
    indexNext: function() {
      if (!this.selecting && scenario[this.section].talks.length > this.index)
        this.index++;
    },
    changeSection: function(newSection) {
      this.section = newSection;
      this.index = 0;
    },
    selectItem1: function() {
      switch(this.section)
      {
        case 0:
          this.changeSection(1);
          break;
        case 2:
          this.changeSection(3);
          break;
      }
    },
    selectItem2: function() {
      switch(this.section)
      {
        case 0:
          this.changeSection(2);
          break;
        case 2:
          this.changeSection(4);
          break;
      }
    },
  },
  watch: {
    index: function(newIndex, oldIndex) {
      if (scenario[this.section].talks[this.index].talker != "if") {
        this.selecting = false;
        this.talker = scenario[this.section].talks[this.index].talker;
        this.message = scenario[this.section].talks[this.index].content;
      } else {
        this.selecting = true;
        this.item1 = scenario[this.section].talks[this.index].content[0];
        this.item2 = scenario[this.section].talks[this.index].content[1];
      }
    }
  }
});
