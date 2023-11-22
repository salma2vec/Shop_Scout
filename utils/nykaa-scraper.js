import fetch from "node-fetch";
import * as cheerio from "cheerio";

const findProducts = async (search_term) => {
  const response = await fetch(
    `https://www.nykaa.com/search/result/?q={search_term}&root=search&searchType=Manual&sourcepage=home`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      },
    }
  );
  const content = await response.text();

  const $ = cheerio.load(content);

  const products = [];

  // get window.__PRELOADED_STATE__ from script tag
  const script = $("script").get()[1].children[0].data;
  const json = script.replace("window.__PRELOADED_STATE__ = ", "").trim();
  const data = JSON.parse(json);

  console.log(data);

  return products;
};

findProducts("shoes").then((products) => console.log(products));
