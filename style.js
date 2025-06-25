body {
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  width: 260px;
}

#display {
  width: 100%;
  height: 50px;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: right;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #555;
}
