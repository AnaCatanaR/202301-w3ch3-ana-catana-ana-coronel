import Component from "../Component/Component";

class SeriesList extends Component {
  constructor(parentElement: Element, className = "", tagName = "div") {
    super(parentElement, className, tagName);
  }

  public render(): void {
    super.render();
    this.element.innerHTML = `<h2 class="main-content__title">Series list</h2>`;
  }
}

export default SeriesList;
