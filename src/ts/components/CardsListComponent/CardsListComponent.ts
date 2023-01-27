import { type SeriesStructure } from "../../types";
import Component from "../Component/Component";
import series from "../../series";

class CardsListComponent extends Component {
  series: SeriesStructure[];
  listTitle: string;
  listInfo: string;

  constructor(
    listTitle: string,
    listInfo: string,
    parentElement: Element,
    className = "",
    tagName = "div"
  ) {
    super(parentElement, className, tagName);
    this.listTitle = listTitle;
    this.listInfo = listInfo;
    this.series = series;
  }

  public render(): void {
    super.render();
    this.element.innerHTML = `<section class="list">
        <h3 class="list__title">${this.listTitle}</h3>
        <span class="list__info">${this.listInfo}</span>
        <ul class="series">${this.series
          .map(() => '<li class="serie"></li>')
          .join("")}</ul>
      </section>`;
  }
}

export default CardsListComponent;
