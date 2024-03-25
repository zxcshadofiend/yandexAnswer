//import Image from "next/image";
import styles from "./page.module.css";
import Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from './components/Banner/Banner';
import Promo from "./components/Promo/Promo";
import { List } from './components/CardList/PopularCardsFragment';

export default function Home() {
  return (
    <div>
      <Header />
    <main className="main">
    <Banner />
      <section className="list-section">
        <h2 className="list-section__title" id="popular">
          Популярное
        </h2>
        <ul className="cards-list">
          
            < List />
            </ul>
      </section>
      <section className="list-section">
        <h2 className="list-section__title" id="new">
          Новинки
        </h2>
        <ul className="cards-list">
          
        </ul>
      </section>
      <Promo />
    </main>
    <Footer />
    </div>
  );
}
