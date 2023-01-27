import CardsListComponent from "./components/CardsListComponent/CardsListComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import PageComponent from "./components/PageComponent/PageComponent";
import SeriesList from "./components/SeriesList/SeriesList";

const pageComponent = new PageComponent();
pageComponent.render();

const container = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(container, "main-header", "header");
headerComponent.render();

const seriesList = new SeriesList(container, "main-content", "main");
seriesList.render();

const obs = {
  listTitle: "Pending series",
  listInfo: "You have 4 series pending to watch",
};

const mainContent = document.querySelector(".main-content")!;

const cardsComponent = new CardsListComponent(
  "Pending series",
  "You have 4 series pending to watch",
  mainContent,
  "list",
  "section"
);
cardsComponent.render();
