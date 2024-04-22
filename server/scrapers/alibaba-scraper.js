import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { AVAILABLE_CURRENCIES } from "../utils/currency.js";

export const findProductsOnAlibaba = async (search_term, country) => {
  console.log("Looking for products on Alibaba")

  let countryCode = AVAILABLE_CURRENCIES.find(currency => currency.defaultCountry === country)?.code;
  let countryLocale = AVAILABLE_CURRENCIES.find(currency => currency.defaultCountry === country)?.defaultLocale;
  let url = `https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&country=${country}&param_order=CNTRY-${country}&fsb=y&IndexArea=product_en&CatId=&SearchText=${search_term}`;
  let cookie = `sc_g_cfg_f=sc_b_currency=${countryCode}&sc_b_locale=${countryLocale}&sc_b_site=${country};`;
  console.log("Settings:", { search_term, country, url, cookie })
  
  const response = await fetch(
    url,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
        cookie: cookie,
      },
    }
  );
  const content = await response.text();

  // console.log("Content:", content)
  const $ = cheerio.load(content);

  const products = [];

  if ($("div.fy23-search-card.m-gallery-product-item-v2.J-search-card-wrapper.searchx-offer-item").length > 0) {
    console.log("Found products on Alibaba")
    // console.log(`Contents: ${$("div.fy23-search-card.m-gallery-product-item-v2.J-search-card-wrapper.searchx-offer-item").html()}`)
    // start
    $("div.fy23-search-card.m-gallery-product-item-v2.J-search-card-wrapper.searchx-offer-item").each((index, element) => {
      const product = {
        title: $(element).find("span").first().text().trim(),
        price: $(element).find("div.search-card-e-price-main").text().trim(),
        currency: $(element).find("span.price-currency").text().trim(),
        image: $(element).find("img").attr("src"),
        link: $(element).find("a.title").attr("href"),
        rating: $(element).find("span.star").length,
      };

      if (product.price) {
        product.currency = AVAILABLE_CURRENCIES.find(currency => currency.code === countryCode)?.symbol;
        product.price = parseFloat(
          product.price.replace(/,/g, "").replace(product.currency, "")
        );
      }
      products.push(product);
    });
    // end
  } else {
    console.log("No products found on Alibaba")
  }

  // console.log(`Products: ${JSON.stringify(products)}`)

  if(products.length > 0) {
    console.log(`Products found on Alibaba for ${search_term}, total: ${products.length}`);
  }
  return products;
};