import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Base extends Vue {
  public static install(Vue) {
    Vue.component(this.name, this)
  }
}
