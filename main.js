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
    backgroundSource: "black"
  },
  created: function() {
    this.selecting = false;
    this.talker = scenario[this.section].talks[this.index].talker;
    this.message = scenario[this.section].talks[this.index].content;
    if (scenario[this.section].talks[this.index].background) {
      this.setBack(scenario[this.section].talks[this.index].background);
    }
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
      switch (this.section) {
        case 0:
          this.changeSection(1);
          break;
        case 2:
          this.changeSection(3);
          break;
      }
    },
    selectItem2: function() {
      switch (this.section) {
        case 0:
          this.changeSection(2);
          break;
        case 2:
          this.changeSection(4);
          break;
      }
    },
    setBack: function(bgNum) {
      switch (bgNum) {
        case 100: // 黒背景
          this.backgroundSource = "url(./assets/black.png)";
          break;
        case 1: // しゅりの部屋(カーテン閉)
          this.backgroundSource = "url(./assets/shuri-room-closed.jpg)";
          break;
        case 2: // しゅりの部屋(カーテン開)
          this.backgroundSource = "url(./assets/shuri-room-opened.jpg)";
          break;
        case 3: // 首里城
          this.backgroundSource = "url(./assets/shuri-castle.jpg)";
          break;
        case 4: // 正門
          this.backgroundSource = "url(./assets/school-gate.png)";
          break;
        case 5: // 校長室
          this.backgroundSource = "url(./assets/principals-room.jpg)";
          break;
        case 6: // 教室
          this.backgroundSource = "url(./assets/classroom.jpg)";
      }
    }
  },
  watch: {
    index: function(newIndex, oldIndex) {
      if (scenario[this.section].talks[this.index].talker != "if") {
        this.selecting = false;
        this.talker = scenario[this.section].talks[this.index].talker;
        this.message = scenario[this.section].talks[this.index].content;
        if (scenario[this.section].talks[this.index].background) {
          this.setBack(scenario[this.section].talks[this.index].background);
        }
      } else {
        this.selecting = true;
        this.item1 = scenario[this.section].talks[this.index].content[0];
        this.item2 = scenario[this.section].talks[this.index].content[1];
      }
    }
  }
});
