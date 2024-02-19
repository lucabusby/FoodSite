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
    "imageLink": "https://www.bio-suisse.ch/.imaging/mte/biosuisse-theme/medium/dam/konsumenten/rezepte/Bilder/BIO_BIOSUISSE_072012_04.jpg/jcr:content/BIO_BIOSUISSE_072012_04.jpg",
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
      "name": "Onigiri",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Japan, Asia",
      "imageLink": "https://www.eat-this.org/wp-content/uploads/2023/05/eat_this_vegane_onigiri_mit_kichererbsen-thunfisch_016.jpg",
      "link": "https://www.youtube.com/watch?v=t9zv-_5aOoo&ab_channel=YukainTokyo",
      "notes": ""
    },
    {
      "name": "Thai Red Curry",
      "difficulty": "medium",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Thailand, Asia",
      "imageLink": "https://eadn-wc05-5516459.nxedge.io/wp-content/uploads/2022/10/Thai-Red-Curry-by-Raya-70-Full-plate-square.jpg",
      "link": "https://www.thaicookbook.tv/thai-recipes/main-dishes/red-curry-with-bamboo-shoots-chicken-and-coconut/",
      "notes": ""
    },
    {
      "name": "Tikka Masala",
      "difficulty": "easy",
      "food": "meat",
      "base": "none",
      "origin": "India, Asia",
      "imageLink": "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.683xw:1.00xh;0.221xw,0&resize=1200:*",
      "link": "",
      "notes": ""
    },
    {
      "name": "Butter Chicken",
      "difficulty": "medium",
      "food": "meat",
      "base": "bread",
      "origin": "India, Asia",
      "imageLink": "https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg",
      "link": "",
      "notes": "no recipe yet, please send a good one"
    },
    {
      "name": "Bao Buns",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "bread",
      "origin": "China, Asia",
      "imageLink": "https://www.kitchensanctuary.com/wp-content/uploads/2019/07/Gua-Bao-Buns-Pork-Belly-tall-FS-7272.webp",
      "link": "https://redhousespice.com/bao/",
      "notes": ""
    },
    {
      "name": "Summer Rolls",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Vietnam, Asia",
      "imageLink": "https://www.aheadofthyme.com/wp-content/uploads/2021/07/vietnamese-summer-rolls-with-chicken-2.jpg",
      "link": "https://veggieanh.com/vegan-summer-rolls/",
      "notes": ""
    },
    {
      "name": "Sushi",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Japan, Asia",
      "imageLink": "https://www.tastingtable.com/img/gallery/the-ingredient-traditional-sushi-never-uses/l-intro-1663275947.jpg",
      "link": "https://www.youtube.com/watch?v=nIoOv6lWYnk&t=635s&ab_channel=Epicurious",
      "notes": ""
    },
    {
      "name": "Korean Fried Chicken",
      "difficulty": "easy",
      "food": "meat",
      "base": "none",
      "origin": "South Korea, Asia",
      "imageLink": "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg",
      "link": "https://mykoreankitchen.com/korean-fried-chicken/",
      "notes": ""
    },
    {
      "name": "Taco",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "bread",
      "origin": "Mexico, North America",
      "imageLink": "https://www.aheadofthyme.com/wp-content/uploads/2021/03/mexican-ground-beef-tacos-6.jpg",
      "link": "https://dayofthedead.holiday/recipes/5-amazing-mexican-taco-recipes-and-origins/",
      "notes": ""
    },
    {
      "name": "Fajitas",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "bread",
      "origin": "United States, North America",
      "imageLink": "https://burnhard-springlane-gmbh.stream.prepr.io/w_2304,format_jpg,q_70/https://burnhard-springlane-gmbh.stream.prepr.io/w_1280/qetfpda692c-5hvd9n98ovr3-steak-fajita-vom-skirt-05-titelbild.jpg",
      "link": "",
      "notes": "Just put in whatever you want dickhead"
    },
    {
      "name": "Glass Noodle Salad",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Thailand, Asia",
      "imageLink": "https://www.venturists.net/wp-content/uploads/2022/04/glass-noodle-salad-720x720.jpeg",
      "link": "",
      "notes": "•⁠ ⁠100g glasnudeln (mit kochendem wasser einweichen, mit schere verkleidern)\n• 250g hackfleisch (würzen, braten)\n• 20 cherrytomaten, 2 schallotten, 3 frühlingszwiebeln, 2 knoblauchzehen, chili, evtl. karotten, sellerie oder was sonst noch so rumliegt (klein schneiden)\n• dressing: limettensaft, fischsauce, palmzucker, wenig bouillon \n• anrichten mit koriandergrün und erdnüssen"
    },
    {
      "name": "Gyros",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "none",
      "origin": "Greece, Europe",
      "imageLink": "https://www.greekboston.com/wp-content/uploads/2018/07/Traditional-Gyro.jpg",
      "link": "https://realgreekrecipes.com/gyros-recipe/",
      "notes": "replace meat with haloumi"
    },
    {
      "name": "Porcini Risotto",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Italy, Europe",
      "imageLink": "https://playswellwithbutter.com/wp-content/uploads/2021/01/Mushroom-Risotto-11.jpg",
      "link": "https://www.michellemcglinn.com/recipes/porcini-risotto",
      "notes": ""
    },
    {
      "name": "Green Papaya Salad",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "vegetables",
      "origin": "Thailand, Asia",
      "imageLink": "https://www.recipetineats.com/wp-content/uploads/2021/08/Green-Papaya-Salad_54-SQ.jpg",
      "link": "https://www.youtube.com/watch?v=n761vBlhn7g&ab_channel=YeungManCooking",
      "notes": ""
    },
  // Add more recipes here
];