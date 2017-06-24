import { PLATFORM } from "aurelia-pal";
import {
  Aurelia,
  noView,
  bindable,
  inject,
  Container
} from 'aurelia-framework';
import {Loader} from 'aurelia-loader';

@noView()
@inject(Loader, Element)
export class ChildApp {
  @bindable main;

  constructor(loader, element) {
    this.host = element;
    this.app = new Aurelia(this.loader, new Container());
    this.app.use.standardConfiguration();
  }

  mainChanged() {
    this.app.start().then(a => a.setRoot(PLATFORM.moduleName(this.main), this.host));
  }
}
