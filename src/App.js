import React, { useState } from 'react';
import './App.css';
import telegramIcon from './icons/telegram.png';
import instagramIcon from './icons/instagram.png';
import githubIcon from './icons/github.png';
import Background from './Background';

function App() {
  // Состояние для отслеживания открытых разделов
  const [openSections, setOpenSections] = useState([]);

  // Данные разделов и подарков
  const sections = {
    спорт: [
      { id: 1, name: 'Ракетка от Wilson', link: 'https://www.wilson.com/en-us/product/shift-99-v1-wr14530#covertype=52592', size: '4-1/4" (2)'},
      { id: 2, name: 'Сумка от Wilson', link: 'https://www.wilson.com/en-us/product/team-3pk-heather-grey-wr8022800#colors=93584' },
      { id: 3, name: 'Кроссовки для бега'},
      { id: 4, name: 'Топ от lululemon', link: 'https://shop.lululemon.com/p/women-sports-bras/Like-a-Cloud-Bra-Long-Line/_/prod10190199?color=67913', size: '6, Pink Tide' },
    ],
    образование: [
      { id: 5, name: 'Учебник по Calculus 3', link: 'https://www.amazon.com/Calculus-3-Gilbert-Strang/dp/1938168070/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=' },
      { id: 6, name: 'Любой хороший Bootcamp\nMachine learning'},
    ],
    одежда: [
      { id: 7, name: 'Свитер с американским флагом от Ralph Lauren', link: 'https://www.ralphlauren.com/women-clothing-sweaters/flag-cotton-crewneck-sweater/0073874182.html?utm_source=CSE&utm_medium=GooglePLA_2376163339637_21121101245_160495426295&utm_source=CSE&utm_medium=GooglePLA_2376163339637_21121101245_160495426295&gad_source=1&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoC2JNrD83VX4-YmYbwQu4J8TS7g7NU51m1VRfQE4Mnr3dww80EBL1BoCwZsQAvD_BwE&gclsrc=aw.ds', size: 'S' },
      { id: 8, name: 'Новогодние свитера'},
      { id: 9, name: 'Милые носочки'},
      { id: 10, name: 'Новогодняя пижама'},
      { id: 11, name: 'Халатик'},
      { id: 12, name: 'Джинсы багги'},
    ],
    дом: [
      { id: 13, name: 'Миленький ковер'},
      { id: 14, name: 'Телевизор от 50 инчей'},
      { id: 15, name: 'Playstation 5'},
      { id: 16, name: 'Новогодняя посуда'},
    ],
    аксессуары: [
      { id: 17, name: 'Что угодно от Vivienne Westwood'},
      { id: 18, name: 'Миленький чехол на телефон'},
      { id: 19, name: 'Сумка в университет олд мани'},
    ],
    другое: [
      { id: 20, name: 'Подписка на тг премиум или зарядить мой тгк'},
      { id: 21, name: 'Домен на 10 лет'},
      { id: 22, name: 'Nintendo Switch с енимал кросинг'},
    ],
  };  

  // Обработчик клика по разделу
  const handleSectionClick = (section) => {
    if (openSections.includes(section)) {
      // Если раздел уже открыт, закрыть его
      setOpenSections(openSections.filter((s) => s !== section));
    } else {
      // Если раздел закрыт, открыть его
      setOpenSections([...openSections, section]);
    }
  };

  return (
    <div className="App">
      {/* Фоновое сердечко */}
      <Background />

      {/* Шапка с иконками ссылок */}
      <header>
        <a href="https://t.me/s1upeee" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://instagram.com/s1upee" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://github.com/s1upee" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </header>

      {/* Основной контент */}
      <main>
        <h1>My Wishlist</h1>
        <p className="greeting">
          привет!<br />
          это мой вишлист – я собрала всё,<br />
          что мне очень нравится, чтобы вам было проще выбрать подарок,<br />
          если вдруг не знаете, чем меня порадовать.<br />
          я старалась сделать его красивым и понятным.<br />
          спасибо вам за внимание и заботу, мяу-мяу ♡
        </p>

        {/* Разделы и подарки */}
        <div className="sections">
          {Object.keys(sections).map((section) => (
            <div key={section}>
              <h2 onClick={() => handleSectionClick(section)}>{section}</h2>
              {openSections.includes(section) && (
                <ul>
                  {sections[section].map((item) => (
                    <li key={item.name}>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.name}
                        </a>
                    ) : (
                      item.name
                    )}
                    {item.size && <p className="size-text">{item.size}</p>}
                  </li>
                ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Футер */}
      <footer>
        <p>December 2024</p>
      </footer>
    </div>
  );
}

export default App;