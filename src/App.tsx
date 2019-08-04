import { Vue, Component } from "vue-property-decorator";
import "@/assets/styles/main.scss";

@Component
export default class App extends Vue {
  public render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}
