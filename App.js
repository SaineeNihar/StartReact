const heading = React.createElement("h1", { id: "head", cyz: "dgdg" }, [
  React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Hello From react")
  ),
  React.createElement("h2", {}, "Hello From react"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
