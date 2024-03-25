import styles from '/app/styles/List.module.css';
export const PopularCardsFragment= () => {
return ( 
    <>
    
      <li className="cards-list__item">
      <a href="/game-id.html" className={style.card-list__link}>
              <article className={style.card}>
                <img
                  src="/images/cover1.png"
                  alt=""
                  className={style.card__image}
                />
                <div className={style.card__content-block}>
                  <h3 className={style.card__title}>Crystal Kepper</h3>
                  <p className={style.card__description}>
                    Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.
                  </p>
                  <div className={style.card__info-container}>
                    <p className={style.card__author}>
                      Автор: <span className={style.card__accent}>Lonely Baobab</span>
                    </p>
                    <p className={style.card__votes}>
                      Голосов на сайте: <span className={style.card__accent}>20</span>
                    </p>
                  </div>
                </div>
              <article>
            </a>
            </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="/images/cover2.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Dangeons'n'Caves. Prologue</h3>
                  <p className="card__description">
                    Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">F-Style</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="/images/cover3.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Defence of Crystal</h3>
                  <p className="card__description">
                    Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">MastWe</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          </>;
          )
};