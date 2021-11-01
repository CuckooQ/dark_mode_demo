import DummyContent from "./DummyContent.js";
import ThemeSwitch from "./ThemeSwitch.js";

export const THEME_MODE = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

class App {
  target;
  state;

  constructor(target) {
    this.target = target;
    this.initState();
    this.setEvent();
    this.render();
  }

  initState() {
    const currentTheme = localStorage.getItem("theme");
    this.state = { themeMode: currentTheme ? currentTheme : THEME_MODE.LIGHT };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}

  mounted() {
    const { themeMode } = this.state;
    const headerEl = document.querySelector("header");
    new ThemeSwitch(headerEl, {
      themeMode,
      changeThemeMode: this.changeThemeMode.bind(this),
    });
    const mainEl = document.querySelector("main");
    new DummyContent(mainEl);
  }

  template() {
    const { themeMode } = this.state;
    return `
      <div class='app ${themeMode === THEME_MODE.DARK && "dark"}'>
        <header></header>
        <main><main>
      </div>
    `;
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }

  changeThemeMode(themeMode) {
    localStorage.setItem("theme", themeMode);
    this.setState({ themeMode });
  }
}

export default App;
