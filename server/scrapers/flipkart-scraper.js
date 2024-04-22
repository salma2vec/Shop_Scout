import fetch from "node-fetch";
import * as cheerio from "cheerio";

export const findProductsOnFlipkart = async (search_term, country) => {
  const response = await fetch(
    `https://www.flipkart.com/search?q=${search_term}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off`,
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

  $("div[data-id]").each((index, element) => {
    // find a tag with title attribute and get the value of title attribute
    const aTagWithTitleAttr = $(element).find("a[title]");

    const title = aTagWithTitleAttr.attr("title");

    const productRatingSpan = $(element).find("span[id^='productRating']");
    // find a span with id starting with productRating and get the text
    const rating = productRatingSpan.text();
    // get next span of above span and get the text
    const reviews = parseInt(
      productRatingSpan
        .next()
        .text()
        .replace("(", "")
        .replace(")", "")
        .replace(",", "")
    );

    // get third a tag and get the text of first div inside it
    const price = parseFloat(
      $(element)
        .find("a")
        .eq(2)
        .find("div div")
        .first()
        .text()
        .replace("₹", "")
        .replace(",", "")
    );

    // get href of aTagWithTitleAttr and prepend https://www.flipkart.com
    const link = `https://www.flipkart.com${aTagWithTitleAttr.attr("href")}`;

    // find src of img tag for image
    const image = $(element).find("img").attr("src");

    if (title && price && image && link) {
      products.push({
        title,
        price,
        image,
        link,
        rating,
        reviews,
      });
    }
  });

  return products;
};
