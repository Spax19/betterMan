import { useState } from "react";
//import './App.css';
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#26A7A7",
  grey: "#a9a9a9"
};

function feedback() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Send us some feedback</h1>
      <textarea placeholder="Please enter your feedback" style={styles.textarea} />

      <button style={styles.button}>Send Feedback</button>
        <h2 style={styles.h2}> Rating </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          );
        })}
      </div>
      <p>
          Email at <a href="mailto:bettermansquery@gmail.com">bettermansquery@gmail.com</a> for specific issues.
        </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:"#FFFFFFDE",
  },
  stars: {
    display: "flex",
    flexDirection: "row"
  },
  h1:{
   color:"#26A7A7",
  },
  h2:{
    color:"#26A7A7",
   },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  footer : {
    color: "#ffc107",
    background:"#26A7A7",
    padding: "20px",
    position: "fixed",
    bottom: 0,
    left: 0,
    justifycontent: "center",
    width: "100%"
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    color:"white",
    width: 300,
    padding: 10,
    background:"#077171",
  }
};

export default  feedback;