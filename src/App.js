import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍐": "Pear",
  "🍒": "Cherries",
  "🍅": "Tomato",
  "🍆": "Eggplant",
  "🥕": "Carrot",
  "🥦": "Broccoli",
  "🍞": "Bread",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🥚": "Egg",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("That's a new one! We don't have it in our database");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <span role="img" aria-label="emoji with monocle" id="header-emoji">
        {" "}
        🧐{" "}
      </span>
      <h1>Know-moji</h1>
      <div
        style={{
          fontSize: "1.3rem",
          marginBottom: "2em"
        }}
      >
        An Interpreter for Food & Drink emojis
      </div>

      <input
        placeholder={"put an emoji here to know the meaning"}
        onChange={emojiInputHandler}
        style={{
          backgroundColor: "rgb(248, 238, 238)"
        }}
      ></input>

      <h2> {meaning} </h2>

      <div
        style={{
          fontSize: "1.4rem",
          marginTop: "2em",
          marginBottom: "1em"
        }}
      >
        Emojis We Know
      </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}{" "}
          </span>
        );
      })}

      <footer>
        <p style={{ paddingTop: "8.5rem" }}>Made with ❤ by Taran</p>
      </footer>
    </div>
  );
}
