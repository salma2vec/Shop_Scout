import fetch from "node-fetch";
import * as cheerio from "cheerio";

export const findProductsOnSnapdeal = async (search_term) => {
  const response = await fetch(
    `https://www.snapdeal.com/search?keyword=${search_term}&sort=rlvncy`,
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

  $("div[data-catid]").each((index, element) => {
    const product = {
      title: $(element).find("p.product-title").text().trim(),
      price: $(element).find("span.product-price").text().trim(),
      image: $(element).find("picture.picture-elem source").attr("srcset"),
      link: $(element).find("a.dp-widget-link").attr("href"),
      rating: $(element).find(".filled-stars").attr("style"),
      reviews: parseInt(
        $(element)
          .find("p.product-rating-count")
          .text()
          .replace("(", "")
          .replace(")", "")
          .replace(",", "")
          .trim()
      ),
    };

    // console.log(product);

    if (product.title && product.price && product.image && product.link) {
      product.price = parseFloat(
        product.price.replace("Rs.", "").replace(/,/g, "").trim()
      );

      if (product.rating) {
        product.rating = (
          parseFloat(product.rating.replace("width:", "").replace("%", "")) / 20
        ).toFixed(1);
      }

      products.push(product);
    }
  });

  return products;
};