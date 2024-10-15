import Image from "next/image";
import styles from "./styles/page.module.css";
import Header from "./components/Header";
import ImageCarousel from './components/ImageCarousel';
import sandwich_image from './assets/sandwich.jpg';
import plate_image from './assets/plate.jpg';
import prep_image from './assets/preping.jpg';
import Hours from "./components/Hours";
import Location from "./components/location";
import Footer from "./components/Footer";

const images = [
  {
    src: sandwich_image,
    alt: 'Beef Shawarma Sandwich',
    title: 'Delicious Shawarma Sandwich',
    description: 'Savor our mouthwatering beef shawarma sandwich, packed with tender meat, fresh vegetables, and flavorful sauce, all stuffed into a soft pita.',
    buttonText: 'View Our Menu'
  },
  {
    src: plate_image,
    alt: 'Shawarma Plate with Rice',
    title: 'Hearty Shawarma Plate',
    description: 'Indulge in our generous shawarma plate, featuring succulent meat served over aromatic rice, accompanied by fresh salad and creamy hummus.',
    buttonText: 'View Our Menu'
  },
  {
    src: prep_image,
    alt: 'Crafting Perfect Shawarma',
    title: 'Authentic Shawarma Preparation',
    description: 'Experience the art of authentic shawarma! Each slice promises a mouthwatering blend of juicy flavors and aromatic spices. Come taste the difference that passion and tradition makes.',
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