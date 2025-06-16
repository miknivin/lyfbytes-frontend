import { useEffect, useRef, useState } from 'react';

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  options: Option[];
  selectValue: string; // Changed from number to string
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === selectValue) || null
  );

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update selectedOption when selectValue or options change
    const newSelectedOption = options.find((option) => option.value === selectValue) || null;
    setSelectedOption(newSelectedOption);
  }, [selectValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef}>
      <div className={`nice-select orderby ${isOpen ? 'open' : ''}`} onClick={toggleSelect}>
        <span className="current">{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <ul className={`list ${isOpen ? 'open' : ''}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`option ${selectedOption?.value === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;