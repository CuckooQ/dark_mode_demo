import { THEME_MODE } from "./App.js";

class ThemeSwitch {
  target;
  state;
  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.initState();
    this.setEvent();
    this.render();
  }

  initState() {
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {
    this.target.addEventListener("change", this.change.bind(this));
  }

  mounted() {}

  template() {
    const { themeMode } = this.props;
    return `
      <div class="theme-switch-wrapper">
        <label class="theme-switch">
          <input type="checkbox" ${themeMode === THEME_MODE.DARK && "checked"} >
          <span class="slider"></span>
        </label>
      </div>
    `;
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }

  change({ target }) {
    const { changeThemeMode } = this.props;
    if (target === document.querySelector("input")) {
      changeThemeMode(target.checked ? THEME_MODE.DARK : THEME_MODE.LIGHT);
    }
  }
}

export default ThemeSwitch;
