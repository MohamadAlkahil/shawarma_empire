import Image from "next/image";
import styles from "./styles/page.module.css";
import Header from "./components/Header";
import ImageCarousel from './components/ImageCarousel';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import Hours from "./components/Hours";
import Location from "./components/location";
import Footer from "./components/Footer";

const images = [
  {
    src: image1,
    alt: 'Chicken Shawarma Sandwich',
    title: 'Delicious Shawarma Sandwich',
    description: 'Savor our mouthwatering chicken shawarma sandwich, packed with tender meat, fresh vegetables, and flavorful sauces, all wrapped in a soft pita.',
    buttonText: 'View Our Menu'
  },
  {
    src: image2,
    alt: 'Shawarma Plate with Rice',
    title: 'Hearty Shawarma Plate',
    description: 'Indulge in our generous shawarma plate, featuring succulent meat served over aromatic rice, accompanied by fresh salad and creamy hummus.',
    buttonText: 'View Our Menu'
  },
  {
    src: image4,
    alt: 'Chef Preparing Shawarma Meat',
    title: 'Expertly Crafted Shawarma',
    description: 'Watch our skilled chefs prepare our signature shawarma, carefully layering and seasoning the meat to ensure every bite is bursting with flavor.',
    buttonText: 'View Our Menu'
  },
  // Add more image objects as needed
];
export default function Home() {
  return (
    <div>
      <Header />
      <ImageCarousel images={images} autoPlayInterval={7000} />
      <Hours />
      <Location />
      <Footer />
    </div>
   );
}