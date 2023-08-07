import { useState, ChangeEvent } from 'react';

interface InputState {
  value: string;
  base64Output: string;
}

type Inputs = Record<string, InputState>;

const useBase64Converter = (inputNames: string[]) => {
  const initialState: Inputs = inputNames.reduce((acc, name) => {
    acc[name] = { value: '', base64Output: '' };
    return acc;
  }, {} as Inputs);

  const [inputs, setInputs] = useState<Inputs>(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: { ...prevInputs[name], value },
    }));

    if (files && files.length > 0) {
      const file = files[0];
      const allowedFormats = ['image/jpeg', 'image/png', 'image/webp'];
      if (allowedFormats.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Value = reader.result?.toString().split(',')[1] || ''; // Get the base64 data after the comma
          setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: { ...prevInputs[name], value: file.name, base64Output: base64Value },
          }));
        };
        reader.readAsDataURL(file);
      } else {
        // Handle invalid file format here (e.g., show an error message)
        console.log('Invalid file format');
      }
    }
  };

  const resetInputAndOutput = (name: string) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: { ...prevInputs[name], value: '', base64Output: '' },
    }));
  };

  return {
    inputs,
    handleInputChange,
    resetInputAndOutput,
  };
};

export default useBase64Converter;
