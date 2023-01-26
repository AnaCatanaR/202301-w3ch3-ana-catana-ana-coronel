import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import PageComponent from "./components/PageComponent/PageComponent";

const pageComponent = new PageComponent();
pageComponent.render();

const container = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(container, "main-header", "header");
headerComponent.render();
