import { v4 as uuidv4 } from "uuid"; 
import Chance from "chance"; 

const chance = new Chance();

const materials = [
  "Cotton",
  "Polyester",
  "Wool",
  "Fur",
  "Nylon",
  "Viscose",
  "Acrylic",
  "Cashmere",
  "Denim",
  "Down"
];

const clothingItems = [
  "Bomber jacket",
  "Denim jacket",
  "Vest",
  "Coat",
  "Raincoat",
  "Trench coat",
  "Puffer jacket",
  "Fur coat",
  "Sheepskin coat",
  "Anorak",
  "Ski jacket",
  "Transitional jacket",
  "Jumpsuit",
  "Poncho"
];

const categories = [
  "Clothing",
  "Footwear",
  "Accessories",
  "Electronics",
  "Home",
  "Garden",
  "Toys",
  "Sports",
  "Health",
  "Books"
];

const productImages = {
  "Bomber jacket": "images/bomber.jpg",
  "Denim jacket": "images/denim.jpg",
  "Vest": "images/vest.jpg",
  "Coat": "images/Coat.jpg",
  "Raincoat": "images/raincoat.jpg",
  "Trench coat": "images/trench.jpg",
  "Puffer jacket": "images/puffer.jpg",
  "Fur coat": "images/fur-coat.jpg",
  "Sheepskin coat": "images/sheepskin.jpg",
  "Anorak": "images/anorak.jpg",
  "Ski jacket": "images/ski-jacket.jpg",
  "Transitional jacket": "images/transitional.jpg",
  "Jumpsuit": "images/jumpsuit.jpg",
  "Poncho": "images/poncho.jpg",
};

const getRandomItems = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const selectedClothingItems = getRandomItems(clothingItems, 10);

export const products = selectedClothingItems.map((name) => ({
  id: uuidv4(), 
  name,
  description: chance.sentence({ words: 10 }), 
  color: chance.pickone(["Red", "Blue", "Green", "Black", "White"]), 
  category: chance.pickone(categories), 
  price: chance.integer({ min: 10, max: 9999 }), 
  rating: chance.floating({ min: 0, max: 5, fixed: 1 }), 
  image: productImages[name] 
}));