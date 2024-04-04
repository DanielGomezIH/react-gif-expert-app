import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;

    onNewCategory(newInputValue);

    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={onInputChange}
        placeholder='Buscar gifs'
      />
    </form>
  );
};

export default AddCategory;
