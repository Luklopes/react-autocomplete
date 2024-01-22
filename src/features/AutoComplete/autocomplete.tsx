import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import {
  AutocompleteContainer,
  Input,
  SuggestionItem,
  SuggestionsList,
  Tag,
  TagsContainer,
} from "./styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AutocompleteProps {}

const Autocomplete: React.FC<AutocompleteProps> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const fakeSuggestions = [
      "React",
      "Angular",
      "Vue",
      "JavaScript",
      "HTML",
      "CSS",
    ];
    const filteredSuggestions = fakeSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setSelectedTags([...selectedTags, inputValue.trim()]);
      setInputValue("");
    } else if (
      event.key === "Backspace" &&
      inputValue === "" &&
      selectedTags.length > 0
    ) {
      const updatedTags = [...selectedTags];
      updatedTags.pop();
      setSelectedTags(updatedTags);
    }
  };

  const handleTagClick = (tag: string) => {
    console.log(inputRef);
    if (inputRef.current && inputRef.current === document.activeElement) {
      return;
    }

    const updatedTags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    setSelectedTags(updatedTags);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (!selectedTags.includes(suggestion)) {
      setSelectedTags([...selectedTags, suggestion]);
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <AutocompleteContainer data-testid="autocomplete-container">
      <TagsContainer>
        {selectedTags.map((tag, index) => (
          <Tag
            data-testid="tag"
            key={index}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Tag>
        ))}
      </TagsContainer>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder="Digite para adicionar tags"
      />
      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              data-testid={`suggestion-item`}
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </AutocompleteContainer>
  );
};

export default Autocomplete;
