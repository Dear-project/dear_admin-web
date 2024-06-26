import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./style";
import { SearchBarProps } from "@/types/searchBar/searchBar.types";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({
    onChange = () => {},
    onSubmit = () => {},
    value,
  }: SearchBarProps) => {
    return (
      <SearchBarContainer
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <SearchBarIcon>
          <AiOutlineSearch />
        </SearchBarIcon>
        <SearchBarInput
          placeholder="검색어 입력 후 Enter key를 누르세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </SearchBarContainer>
    );
  };