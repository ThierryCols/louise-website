type menu = {
  title: string,
  price: int,
  condition: option(string),
  elements: list(string),
};

let marche = {
  title: {js|Marché|js},
  price: 25,
  condition: Some({js|(Midi uniquement, hors week-end et jours fériés)|js}),
  elements: [{js|Entrée • Plat • Dessert|js}],
};

let issole = {
  title: {js|Issole|js},
  price: 55,
  condition: None,
  elements: [
    {js|Dorade royale façon tataki, roquette et huître, yuzu en condiment|js},
    {js|Canon d’agneau rôti au thym, caviar d’aubergine crémeux, courgettes au barbecue|js},
    {js|Pavlova pêche blanche et estragon|js}
  ],
};

let tadorne = {
  title: {js|Tadorne|js},
  price: 85,
  condition: None,
  elements: [
    {js|Dorade royale façon tataki, roquette et huître, yuzu en condiment|js},
    {js|Bar de ligne confit à l’huile d’olive vierge, raviole épinard ricotta, bouillon au parfum de citronnelle|js},
    {js|Canon d’agneau rôti au thym, caviar d’aubergine crémeux, courgettes au barbecue|js},
    {js|Pavlova pêche blanche et estragon|js}
  ],
};

let menus : list(menu) = [
  marche,
  issole,
  tadorne
]
