var req = new XMLHttpRequest();
req.open(
  "Get",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
req.send();
req.onload = function () {
  let list = JSON.parse(req.response);

  var AsiaCountries = list.filter((x) => x.region === "Asia");
  console.log(AsiaCountries);

  var Lesspop = list.filter((x) => x.population < 200000);
  console.log(Lesspop);

  var usdlist = list.filter((x) => x.currencies.code === "USD");
  console.log(usdlist);

  let totalpop = list.reduce((acc, list) => acc + list.population, 0);
  console.log(totalpop);

  var name = list.forEach((element) => {
    console.log(element.name, element.capital, element.flag);
  });
};
