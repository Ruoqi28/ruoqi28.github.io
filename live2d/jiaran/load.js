
const initConfig = {
  mode: "fixed",
  hidden: false,
  tips: false,
  content: {
    welcome: "",
    touch: [],
    skin: [],
    custom: [],
    close: "",
    home: "",
    link: ""
  },
  night: "",
  model: ["/live2d/jiaran/Diana/Diana.model3.json"],
  onModelLoad: onModelLoad
};

let pio_reference = new Paul_Pio(initConfig);

function onModelLoad(model) {
  // ✅ 徹底覆蓋 render 函數，防止任何對話框顯示
  if (pio_reference?.modules) {
    pio_reference.modules.render = function () {
      const dlg = document.querySelector('.pio-dialog');
      if (dlg) dlg.remove();
    };
  }
}
