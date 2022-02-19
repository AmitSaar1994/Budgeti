const scrapingCalData = (tabDoc) => {
  console.log("SCRAPING");
  const results = [];
  const shuf = [];
  const netfl = [];
  const water = [];

  let htmlElems = tabDoc.getElementsByClassName("NW");

  for (var index = 0; index < htmlElems.length; index++) {
    var source = htmlElems[index].innerText;

    switch (source) {
      case "שופרסל און ליין": {
        shuf.push({
          date: htmlElems[index - 1].innerText,
          name: source,
          price: htmlElems[index + 1].innerText,
        });
        break;
      }
      case "NETFLIX.COM": {
        netfl.push({
          date: htmlElems[index - 1].innerText,
          name: source,
          price: htmlElems[index + 1].innerText,
        });
        break;
      }
      case "הבאר השלישית": {
        water.push({
          date: htmlElems[index - 1].innerText,
          name: source,
          price: htmlElems[index + 1].innerText,
        });
        break;
      }
    }
  }

  results.push({ shufersal: shuf }, { netflix: netfl }, { water: water });

  console.log("results", results);
};

export default scrapingCalData;
