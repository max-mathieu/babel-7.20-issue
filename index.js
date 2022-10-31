const Decorator = () => {};

@Decorator()
export default class Test {
  constructor() {
    this.value = 1;
  }
}
