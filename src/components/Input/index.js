import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";

const InputContainer = ({
  addItemHandler,
  filterItemsHandler,
  clearTextFilter
}) => {
  const [text, setText] = useState("");

  const clearInput = () => {
    setText("");
    clearTextFilter();
  };

  const addItem = () => {
    addItemHandler(text);
    clearInput();
  };

  const handleChange = event => {
    const newText = event.target.value;
    setText(newText);
    filterItemsHandler(newText);
  };

  const handleKeyPress = event => {
    if (text && event.charCode === 13) {
      addItemHandler(text);
    }
  };

  return (
    <Input
      value={text}
      onKeyPress={handleKeyPress}
      handleChange={handleChange}
      addItemHandler={addItem}
      clearInputHandler={clearInput}
    />
  );
};

InputContainer.propTypes = {
  addItemHandler: PropTypes.func.isRequired,
  filterItemsHandler: PropTypes.func.isRequired,
  clearTextFilter: PropTypes.func.isRequired
};

export default InputContainer;
