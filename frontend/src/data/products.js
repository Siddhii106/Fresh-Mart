import ApplesImg from "../assets/Apples.jpg";
import BananasImg from "../assets/Bananas.jpg";
import KiwisImg from "../assets/Kiwis.jpg";
import OrangeImg from "../assets/Orange.jpg";
import SalmonImg from "../assets/Salmon.jpg";
import ButterImg from "../assets/Butter.jpg";
import EggsImg from "../assets/Eggs.jpg";
import MushroomImg from "../assets/Mushroom.jpg";
import AvocadoImg from "../assets/Avocado.jpg";
import VegetablesImg from "../assets/VegetablesImg.jpg";
import BottleguardImg from "../assets/BottleguardImg.jpg";
import ChesseImg from "../assets/ChesseImg.jpg";
import FerreroImg from "../assets/FerreroImg.jpg";
import Lays1Img from "../assets/Lays1Img.jpg";
import Lays2Img from "../assets/Lays2Img.jpg";
import MilkImg from "../assets/MilkImg.jpg";
import MilkybarImg from "../assets/MilkybarImg.jpg";
import SilkoreoImg from "../assets/SilkoreoImg.jpg";
import PaneerImg from "../assets/PaneerImg.jpg";
import FruitsImg from "../assets/FruitsImg.jpg";
 import DairyImg from "../assets/DairyImg.jpg";
import SnacksImg from "../assets/SnacksImg.jpg";
import SeafoodImg from "../assets/Seafood.jpg";

export const products = [
  { id: 1, name: "Apples", price: "₹110/kg", image: ApplesImg, category: "Fruits", rating: 4.7, weight: "1 kg", tag: "Organic" },
  { id: 2, name: "Bananas", price: "₹60/dozen", image: BananasImg, category: "Fruits", rating: 4.8, weight: "1 dozen", tag: "" },
  { id: 3, name: "Kiwis", price: "₹120/kg", image: KiwisImg, category: "Fruits", rating: 4.6, weight: "500 g", tag: "New" },
  { id: 4, name: "Oranges", price: "₹80/kg", image: OrangeImg, category: "Fruits", rating: 4.5, weight: "1 kg", tag: "" },
  { id: 5, name: "Salmon", price: "₹130/kg", image: SalmonImg, category: "Sea Food", rating: 4.9, weight: "1 kg", tag: "Fresh" },
  { id: 6, name: "Butter", price: "₹150/500gm", image: ButterImg, category: "Dairy & Eggs", rating: 4.4, weight: "500 g", tag: "" },
  { id: 7, name: "Eggs", price: "₹84/dozen", image: EggsImg, category: "Dairy & Eggs", rating: 4.7, weight: "12 pcs", tag: "" },
  { id: 8, name: "Mushroom", price: "₹160/250gm", image: MushroomImg, category: "Vegetables", rating: 4.6, weight: "250 g", tag: "Organic" },
  { id: 9, name: "Avocado", price: "₹170/kg", image: AvocadoImg, category: "Vegetables", rating: 4.8, weight: "1 kg", tag: "" },
  { id: 10, name: "Bottle Gourd", price: "₹40/kg", image: BottleguardImg, category: "Vegetables", rating: 4.5, weight: "1 kg", tag: "Fresh" },
  { id: 11, name: "Cheese Block", price: "₹120/200g", image: ChesseImg, category: "Dairy & Eggs", rating: 4.6, weight: "200 g", tag: "" },
  { id: 12, name: "Ferrero Rocher", price: "₹699/300g", image: FerreroImg, category: "Snacks", rating: 4.8, weight: "300 g", tag: "Gift" },
  { id: 13, name: "Lay's Cream & Onion", price: "₹20/pack", image: Lays1Img, category: "Snacks", rating: 4.4, weight: "52 g", tag: "25% More" },
  { id: 14, name: "Lay's Chile Limón", price: "₹20/pack", image: Lays2Img, category: "Snacks", rating: 4.5, weight: "52 g", tag: "" },
  { id: 15, name: "Amul Taaza Milk", price: "₹30/500ml", image: MilkImg, category: "Dairy & Eggs", rating: 4.7, weight: "500 ml", tag: "" },
  { id: 16, name: "Milkybar Moosha", price: "₹20/bar", image: MilkybarImg, category: "Snacks", rating: 4.3, weight: "38 g", tag: "" },
  { id: 17, name: "Dairy Milk Silk Oreo", price: "₹180/160g", image: SilkoreoImg, category: "Snacks", rating: 4.9, weight: "160 g", tag: "Bestseller" },
  { id: 18, name: "Paneer", price: "₹90/200g", image: PaneerImg, category: "Dairy & Eggs", rating: 4.6, weight: "200 g", tag: "Fresh" },
];

export const categories = [
    { id: 1, label: "Vegetables", image: VegetablesImg },
    { id: 2, label: "Fruits", image: FruitsImg },
    { id: 3, label: "Dairy & Eggs", image: DairyImg },
    { id: 4, label: "Sea Food", image: SeafoodImg },
    { id: 5, label: "Snacks", image: SnacksImg }
];

export default categories;