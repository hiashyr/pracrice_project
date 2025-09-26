import React, { useState } from 'react';
import '../Home.css';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, content: 'Слайд 1: Новые поступления' },
    { id: 2, content: 'Слайд 2: Популярные книги' },
    { id: 3, content: 'Слайд 3: Рекомендации' },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <h1>Добро пожаловать в "Книжный червь"</h1>
      <p>Ваш онлайн-магазин книг</p>
      <div className="slider">
        <button onClick={prevSlide}>Назад</button>
        <div className="slide">{slides[slideIndex].content}</div>
        <button onClick={nextSlide}>Вперед</button>
      </div>
    </div>
  );
};

export default Home;
