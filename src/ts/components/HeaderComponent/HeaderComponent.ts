import Component from "../Component/Component";

export class HeaderComponent extends Component {
  constructor(parentElement: Element, className = "", tagName = "<div>") {
    super(parentElement, className, tagName);
  }

  public render(): void {
    super.render();
    this.element.innerHTML = `<h1 class="main-title">My Series</h1>`;
  }
}
