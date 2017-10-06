import angular from "angular"
import template from "./dummy.html"

class DummyController {

  /* @ngInject */
  constructor() {
    this.name = "Sam"
  }
}

const component = {
  controller: DummyController,
  template
}

export default angular.module("app.dummy", [])
  .component("dummyComponent", component)
  .name