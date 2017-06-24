import { PLATFORM } from 'aurelia-pal';

export class App {
  main1 = PLATFORM.moduleName('one/app');
  main2 = PLATFORM.moduleName('two/app');
}