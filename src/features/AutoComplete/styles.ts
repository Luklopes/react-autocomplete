import styled from "styled-components";

export const AutocompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
`;

export const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #f0f0f0;
  }
`;
