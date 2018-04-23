
let component = ReasonReact.statelessComponent("Link");

let handleClick = (href, event) =>
  /* the default action will reload the page, which will cause us to lose state */
  if (! ReactEventRe.Mouse.defaultPrevented(event)) {
    ReactEventRe.Mouse.preventDefault(event);
    ReasonReact.Router.push(href)
  };

let make = (~color, ~href, children) => {
  ...component,
  render: (_self) => ReasonReact.createDomElement(
    "a",
    ~props={
      "href": href,
      "onClick": handleClick(href),
      "style": {color: color}
    },
    children
  )
};