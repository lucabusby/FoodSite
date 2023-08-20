const recipes = [
  {
    name: "Steak Sandwich",
    difficulty: "medium",
    food: "meat",
    base: "bread",
    origin: "France, Europe",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrrPX6cWTnAnSlzr2NeOTT42guOS_CY2fCaV5kHvd8h0spiJtCtYgwLU2jpcB8P8RRc0&usqp=CAU",
    link: "https://www.youtube.com/watch?app=desktop&v=jwu2y9x5OlM&t=5m06s&ab_channel=GordonRamsay",
    notes: "",
  },
  {
    "name": "Salmon",
    "difficulty": "medium",
    "food": "meat",
    "base": "none",
    "origin": "France Europe",
    "imageLink": "https://www.foodandwine.com/thmb/0Q_VTxhpKxzZih_7e8WfnpcWx64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-to-Cook-Salmon-FT-BLOG1222-10de5a17538c4c9ea812b1372a221110.jpg",
    "link": "https://www.youtube.com/watch?v=rR9wq5uN_q8&ab_channel=TheFWord",
    "notes": ""
  },
  {
    "name": "Cheese Capuns",
    "difficulty": "medium",
    "food": "vegetarian",
    "base": "none",
    "origin": "Switzerland, Europe",
    "imageLink": "https://wildeisen-prod-fastly.yanova.ch/assets/image/8e4f6cb2-a0e6-42ee-9f65-9aeb2a0ef231",
    "link": "https://www.wildeisen.ch/rezepte/kaese-capuns-mit-kraeutern",
    "notes": ""
  },
  {
    "name": "Strawberry Risotto",
    "difficulty": "easy",
    "food": "vegetarian",
    "base": "rice",
    "origin": "Italy Europe",
    "imageLink": "https://thomassixt.de/wp-content/uploads/2019/02/erdbeer-risotto-rezept-bild.jpg",
    "link": "https://thomassixt.de/rezept/erdbeerrisotto/",
    "notes": ""
  },
  {
    "name": "Couscous Tabbouleh",
    "difficulty": "easy",
    "food": "vegetarian",
    "base": "grains",
    "origin": "Lebanon Africa",
    "imageLink": "https://klaraslife.com/wp-content/uploads/2019/01/taboulehDSC09023.jpg",
    "link": "",
    "notes": "Couscous\n\nMix with cucumber, cherry tomatoes, paprika, peppermint, raisins, feta cheese, pomegranate &/ figs"
  },
  {
    "name": "Mauazna",
    "difficulty": "hard",
    "food": "vegetarian",
    "base": "bread",
    "origin": "France, Europe",
    "imageLink": "https://crumbsandcaramel.com/wp-content/uploads/2018/06/IMG_3522-2-300x300.jpg",
    "link": "",
    "notes": "verschideni gmües arte (kein broccoli), mind 3h choche (mit saitan)"
  },
  {
    "name": "Mushroom Leek Pasta",
    "difficulty": "easy",
    "food": "vegetarian",
    "base": "pasta",
    "origin": "Italy, Europe",
    "imageLink": "https://biancazapatka.com/wp-content/uploads/2019/12/vegan-mushroom-stroganoff-best-recipe-creamy-pasta-sauce.jpg",
    "link": "",
    "notes": "Steinporcino mushroom/Champignons, Leek!"
  },
  {
      "name": "Steak with Mashed Potatoes",
      "difficulty": "medium",
      "food": "meat",
      "base": "vegetables",
      "origin": "France, Europe",
      "imageLink": "https://data.thefeedfeed.com/static/2020/01/14/15790145665e1dd9a60bae1.png",
      "link": "",
      "notes": "Steak with mashed/roast potatoes. Add broccoli/peas/beans."
    },
    {
      "name": "Lemon-Zucchini Orzo Salad",
      "difficulty": "easy",
      "food": "vegan",
      "base": "pasta",
      "origin": "Italy, Europe",
      "imageLink": "https://cdn.loveandlemons.com/wp-content/uploads/2017/08/IMG_2017_08_02_10745-cropped.jpg",
      "link": "https://www.loveandlemons.com/orzo-recipe/",
      "notes": ""
    },
    {
      "name": "Pasta with Ratatouille",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "pasta",
      "origin": "France, Europe",
      "imageLink": "https://www.kleinkuenstlerkueche.de/wp-content/uploads/2021/02/Ratatouille-Pasta-RB.jpg",
      "link": "",
      "notes": "Pasta with:\n\nOnions, Garlic, Zuccini, Aubergine, Tomatoes, Paprika & Belati."
    },
    {
      "name": "Tortellini with Cheese-Cream Sauce",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "pasta",
      "origin": "Italy, Europe",
      "imageLink": "https://www.thereciperebel.com/wp-content/uploads/2022/02/creamy-cheese-tortellini-TRR-1200-6-of-21.jpg",
      "link": "https://www.thereciperebel.com/creamy-cheese-tortellini/",
      "notes": ""
    },
    {
      "name": "Potato Pizza",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "bread",
      "origin": "Italy, Europe",
      "imageLink": "https://img.delicious.com.au/IPB4eND5/w759-h506-cfill/del/2020/07/taleggio-pizza-with-onion-potato-and-rosemary-136378-1.jpg",
      "link": "https://www.delicious.com.au/recipes/taleggio-pizza-onion-potato-rosemary-recipe/40afk4dr",
      "notes": ""
    },
    {
      "name": "Filled Zucchini",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "vegetables",
      "origin": "Europe",
      "imageLink": "https://www.bettybossi.ch/static/rezepte/x/bb_bbzh100915_0010a_x.jpg",
      "link": "https://www.bettybossi.ch/de/Rezept/ShowRezept/BB_BBZH100915_0010A-40-de",
      "notes": ""
    },
    {
      "name": "Homemade Burger",
      "difficulty": "easy",
      "food": "meat",
      "base": "bread",
      "origin": "United States, North America",
      "imageLink": "https://market.meridianfarmmarket.ca/wp-content/uploads/2017/03/bigstock-Hamburger-homemade-hamburger-107778380.jpg",
      "link": "",
      "notes": "Cut onions into rings and cook with patty. Cut tomatoes & salad. When the onions are caramelised take them out. When the patty is nearly done add cheese on top and a splay of water beside. Put the lid on to make the cheese melt. Slightly toast the buns in the same pan. Add sauce to the bunns and all ingrediants."
    },
    {
      "name": "Homemade Beyond Burger",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "bread",
      "origin": "United States, North America",
      "imageLink": "https://www.malteskitchen.de/wp-content/uploads/2019/06/beyond-meat-burger-7024.jpg",
      "link": "",
      "notes": "Cut onions into rings and cook with patty. Cut tomatoes & salad. When the onions are caramelised take them out. When the patty is nearly done add cheese on top and a splay of water beside. Put the lid on to make the cheese melt. Slightly toast the buns in the same pan. Add sauce to the bunns and all ingrediants."
    },
    {
      "name": "Vegetable Pizza",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "bread",
      "origin": "Italy",
      "imageLink": "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg",
      "link": "",
      "notes": "Just top the pizza with any vegetables"
    },
    {
      "name": "Bruschetta",
      "difficulty": "easy",
      "food": "vegan",
      "base": "bread",
      "origin": "Italy, Europe",
      "imageLink": "https://www.sanpellegrino.com/de/sites/g/files/xknfdk2266/files/styles/amp_1200x900_4_3/public/bruschetta_h_15.jpg.webp?itok=mlHABATB",
      "link": "https://www.thespruceeats.com/how-to-make-bruschetta-2020459",
      "notes": ""
    },
    {
      "name": "Greek Salad",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "vegetables",
      "origin": "Greece, Europe",
      "imageLink": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
      "link": "https://downshiftology.com/recipes/greek-salad/",
      "notes": ""
    },
    {
      "name": "Homemade Sun-Dried Tomato Pesto Pasta",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "pasta",
      "origin": "Italy, Europe",
      "imageLink": "https://www.platingsandpairings.com/wp-content/uploads/2020/10/sun-dried-tomato-pesto-18-scaled.jpg",
      "link": "https://www.platingsandpairings.com/sun-dried-tomato-pesto-pesto-rosso/",
      "notes": ""
    },
    {
      "name": "Steak Salad",
      "difficulty": "easy",
      "food": "meat",
      "base": "vegetables",
      "origin": "France, Europe",
      "imageLink": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/12/16/FN_Giada-De-Laurentiis_Steak-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1671459248306.jpeg",
      "link": "https://www.foodnetwork.com/recipes/giada-de-laurentiis/steak-salad-recipe-1942188",
      "notes": ""
    },
    {
      "name": "Tortilla Española",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "none",
      "origin": "Spain, Europe",
      "imageLink": "https://www.daskochrezept.de/sites/daskochrezept.de/files/styles/full_width_tablet_4_3/public/rezepte/2012/12/Tortilla-Espanola-Spanische-Tortilla-Omelett-50c66e2125a89.jpg?h=4b65041b&itok=L1sJGMDp",
      "link": "https://www.daskochrezept.de/rezepte/tortilla-espanola-spanische-tortillaomelett",
      "notes": ""
    },
    {
      "name": "Rice Noodle Salad",
      "difficulty": "medium",
      "food": "vegan",
      "base": "noodles",
      "origin": "China, Asia",
      "imageLink": "https://www.recipetineats.com/wp-content/uploads/2014/08/Vermicelli-Noodle-Salad_7.jpg?resize=650,910",
      "link": "https://www.recipetineats.com/asian-vermicelli-noodle-salad/",
      "notes": ""
    },
  // Add more recipes here
];