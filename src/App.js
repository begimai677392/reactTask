import React, { useState } from "react";
import "./App.css"; // Импортируем файл стилей

function App() {
  const [text, setText] = useState("Welcome to football team!");
  const isTrue = true;

  return (
    <div className="app-container">
      <p>{text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-style"
      />

      {isTrue ? (
        <div className="true-container">
          <h2>Are you sure to join our football team?</h2>
          <p>
            Football (or soccer) is serving as the king sport all over the
            world. Each football match is waited and watched by billions of
            exciting fans. Here are some fantastic facts about football that you
            may not know. Interesting facts about football: the last
            international match of the Netherlands in which the team had no
            ‘van’ in their starting XI was against France on the occasion of
            Euro 2000. The goal was 3–2 for the Netherlands. Pelé is the
            youngest player to earn the gold of the World Cup in 1958 at the age
            of only 17 years 249 days. On the other hand, the oldest one is
            former Italian goalkeeper Dino Zoff, who was 40 years and 133 days
            old as lifting the trophy. Incredible facts about football: besides
            Messi, Fernando Peyroteo is the brightest name for a goalscorer. His
            goal to game ratio was 1.77 with 331 times within only 187 games for
            Sporting Lisbon over the span of 12 years from 1937–1949 in the
            comparison with Messi’s 0.82 for Barcelona. Reportedly, he possesses
            over 30 occasions scoring more than 3 goals during a single game,
            including time with nine goals.
          </p>
        </div>
      ) : (
        <div className="false-container">
          <h2>Some facts </h2>
          <p>
            There is one among cool facts about football is that the only
            Premier League player whose last name is made up by roman numerals
            is Manchester United defender Nemanja Vidic with V for 5, I for 1, D
            for 500 and C for 100. His gladiatorial name is very suitable for
            his playing style. Related to England, there is an incredible fact
            that this country has not ever defeated Algeria, Ghana, South Korea,
            and Saudi Arabia. During the season of 2009–2010, Barcelona’s Pedro
            became the first player who scored in 6 different official club
            competitions including La Liga, the Supercopa de España, the Copa
            del Rey, the Champions League, the UEFA Super Cup, and the FIFA Club
            World Cup. Yet this record was broken by Chelsea’s Spanish striker
            Fernando Torres who scored in 7 ones in the 2012–2013 season, namely
            the Premier League, Champions League, Europa League, FIFA Club World
            Cup, FA Community Shield, FA Cup, and League Cup. Fun facts about
            football: Chelsea legend Gianfranco Zola was the only player who was
            kicked out of the playground in a World Cup final on his birthday!
            That day was his 28th birthday while he received a red in their
            second-round victory against Nigeria. Are you shocked? Just kidding!
            He only earned a card from the referee! Jari Litmanen, claimed to be
            Finland’s greatest player, is the sole one who has taken part in
            international football in four continuous decades. He first debuted
            in 1989, played throughout the 90s and 00s before retiring in 2010.
            He is the most capped player of Finland, representing the nation for
            137 times.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
