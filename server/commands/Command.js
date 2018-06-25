export default class Command {
  constructor(options){
    this.name = options.name,
    this.action = options.action
  }

  call() {
    this.action();
  }
}