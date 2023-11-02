import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;

  label {
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 568px) {
    align-items: flex-start;
    flex-direction: column;
    & > div {
      margin-bottom: 10px;
    }
    label {
      display: inline-block;
      min-width: 150px;
      text-align: right;
      margin-right: 10px;
    }

    select {
      padding: 5px;
    }
  }
`;
export const SortContainer = styled.div``;

export const SortSelect = styled.select`
  cursor: pointer;
  height: 30px;
`;
export const FilterSelect = styled.select`
  cursor: pointer;
  height: 30px;
`;
