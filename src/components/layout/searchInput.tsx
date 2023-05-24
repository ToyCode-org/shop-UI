import styled from "styled-components";
import { TbSearch } from "react-icons/tb";

export const HeaderSearchInput = () => {
  return (
    <SearchWrap>
      <SearchForm>
        <SearchInput type="text" placeholder="검색어를 입력하세요" />
        <SearchBtn type="submit">
          <TbSearch />
        </SearchBtn>
      </SearchForm>
    </SearchWrap>
  );
};
const SearchWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 420px;
  height: 31px;
  border-bottom: 1px solid lightgray;
  transition: 0.2s;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const SearchInput = styled.input`
  width: 362px;
  height: 24px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  & svg {
    font-size: 24px;
    color: gray;
    &:hover {
      color: black;
    }
  }
`;
