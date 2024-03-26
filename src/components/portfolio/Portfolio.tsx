import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { portfolioData } from "../../constants/portfolioData";
import { Navigation, A11y, EffectCube } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/effect-cube";

// DO NOT USE THE IMAGES IN PRODUCTION

interface PortfolioProps {
  name: string;
  html_url: string;
  id: number;
  svn_url: string;
  has_pages: boolean;
}

const Portfolio = () => {
  const [sizeWindow, setSizeWindow] = useState(3);
  const { preTitle, title } = portfolioData;
  const [repositories, setRepositories] = useState([]);
  const resizeWindow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setSizeWindow(1);
    } else if (windowWidth < 992) {
      setSizeWindow(2);
    } else {
      setSizeWindow(3);
    }
  };

  useEffect(() => {
    async function getRepositories() {
      const response = await fetch(
        "https://api.github.com/users/betaniasilva/repos"
      );
      const data = await response.json();
      setRepositories(data);
    }
    getRepositories();
    resizeWindow();
  }, []);

  return (
    <section id="portfolio">
      <h5>{preTitle}</h5>
      <h2>{title}</h2>
      <Swiper
        className="container portfolio__container"
        modules={[Navigation, A11y, EffectCube]}
        spaceBetween={20}
        slidesPerView={sizeWindow}
      >
        {repositories.map((repository: PortfolioProps) => (
          <SwiperSlide key={repository.id} className="portfolio__item">
            <h3 className="portfolio__name">{repository.name}</h3>
            <div className="portfolio__item-cta">
              <a
                href={repository.html_url}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              {!repository.has_pages ? null : (
                <a
                  href={`https://betaniasilva.github.io/${repository.name}/`}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Page
                </a>
              )}
            </div>
            <div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
