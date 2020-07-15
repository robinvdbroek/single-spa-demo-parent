import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/about"],
});

registerApplication({
  name: "@jem-id/angular-child",
  app: () =>
    System.import(
      "http://localhost:9101/main.js"
    ),
  activeWhen: ["/angular"],
});

registerApplication({
  name: "@jem-id/react-child",
  app: () => System.import("http://localhost:8082/jem-id-child-react.js"),
  activeWhen: ["/react"],
});

start();
