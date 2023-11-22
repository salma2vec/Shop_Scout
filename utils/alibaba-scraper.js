import fetch from "node-fetch";
import * as cheerio from "cheerio";

export const findProductsOnAlibaba = async (search_term) => {
  const response = await fetch(
    `https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&country=IN&param_order=CNTRY-IN&fsb=y&IndexArea=product_en&CatId=&SearchText=${search_term}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
        cookie: "sc_g_cfg_f=sc_b_currency=INR&sc_b_locale=en_US&sc_b_site=IN;",
      },
    }
  );
  const content = await response.text();

  const $ = cheerio.load(content);

  const products = [];

  $("div[data-product_id]").each((index, element) => {
    const product = {
      title: $(element).find("a[data-spm='d_title']").text().trim(),
      price: $(element).find("a[data-spm='d_price']").text().trim(),
      image: `https:${$(element).find("img").attr("src")}`,
      link: `https:${$(element).find("a").attr("href")}`,
      rating: $(element).find(".search-card-e-iconfont").length,
    };

    if (product.title && product.price && product.image && product.link) {
      product.price = parseFloat(
        product.price.replace(/,/g, "").replace("₹", "")
      );

      products.push(product);
    }
  });

  return products;
};