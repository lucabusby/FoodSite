const hmmm = [
  {
    name: "Name",
    difficulty: "Difficulty",
    food: "Food",
    base: "Base",
    origin: "Country, Continent",
    imageLink: "imgLink",
    link: "recipeLink",
  },
  ];
  
  function setup() {
    sliderX = createSlider(0, windowWidth, windowWidth/2);
    sliderX.position(10, 100);
    sliderX.style('width', '80px');

    sliderY = createSlider(0, windowHeight, windowHeight/2);
    sliderY.position(10, 150);
    sliderY.style('height', '80px');

    scale = createSlider(0, 100, 0);
    scale.position(10, 200);
    scale.style('scale', '80px');

    rotation = createSlider(0, 360, 0);
    rotation.position(10, 250);
    rotation.style('roation', '80px');
  }

  function moveImage (buttonvalue) {
    buttonvalue.position(sliderX, sliderY);
    buttonvalue.scale(size);
    buttonvalue.rotateZ(rotation);
  }
