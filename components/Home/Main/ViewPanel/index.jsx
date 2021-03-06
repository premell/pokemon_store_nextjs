//import { Dropdown, ViewPanelContainer, DropdownBox } from "./Styles";
import { numberOfMatchedPokemon as numberOfMatchedPokemonAtoms, pokemonPerPage as pokemonPerPageAtoms, sortingMethod as sortingMethodAtoms } from "atoms.js";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SORTING_METHODS } from "shared/constants";
import Dropdown from "./Dropdown";
import * as S from "./Styles";



const sorting_list = [
  { value: SORTING_METHODS.PRICE_LOWEST_FIRST, label: "price, lowest first" },
  { value: SORTING_METHODS.PRICE_HIGHEST_FIRST, label: "price, highest first" },
  { value: SORTING_METHODS.ALPHABETICALLY_A_FIRST, label: "name, a-z" },
  { value: SORTING_METHODS.ALPHABETICALLY_Z_FIRST, label: "name, z-a" },
  { value: SORTING_METHODS.RELEASE_NEWEST_FIRST, label: "newest" },
  { value: SORTING_METHODS.RELEASE_OLDEST_FIRST, label: "oldest" },
];

const pokemon_per_page_list = [
  { value: 20, label: 20 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
];
const getSortingItem = (sortingMethod) => {
  let sortingMethodObject = {
    value: SORTING_METHODS.RELEASE_OLDEST_FIRST,
    label: "oldest",
  };
  sorting_list.forEach((item) => {
    if (item.value === sortingMethod) {
      sortingMethodObject = item;
    }
  });
  return sortingMethodObject;
};
const getPokemonPerPageItem = (pokemonPerPage) => {
  let pokemonPerPageObject = { value: 20, label: 20 };
  pokemon_per_page_list.forEach((item) => {
    if (item.value === pokemonPerPage) {
      pokemonPerPageObject = item;
    }
  });
  return pokemonPerPageObject;
};

const formatNumberOfMatchedPokemon = (number) => {
  if (number >= 1000) return "1000+";
  else if (number >= 900) return "900+";
  else if (number >= 800) return "800+";
  else if (number >= 700) return "700+";
  else if (number >= 600) return "600+";
  else if (number >= 500) return "500+";
  else if (number >= 400) return "400+";
  else if (number >= 300) return "300+";
  else if (number >= 200) return "200+";
  else if (number >= 100) return "100+";
  else return number;
};

const ViewPanel = () => {
  const [sortingMethod, setSortingMethod] = useRecoilState(sortingMethodAtoms);
  const [pokemonPerPage, setPokemonPerPage] =
    useRecoilState(pokemonPerPageAtoms);
  const [numberOfMatchedPokemon, setNumberOfMatchedPokemon] = useRecoilState(
    numberOfMatchedPokemonAtoms
  );

  const [defaultPokemonPerPage, setDefaultPokemonPerPage] = useState({});
  const [defaultSortingMethod, setDefaultSortingMethod] = useState({});

  const sortingMethodChange = (newMethod) => {
    setSortingMethod(newMethod);
  };

  const pokemonPerPageChange = (newPokemonPerPage) => {
    setPokemonPerPage(newPokemonPerPage);
  };

  useEffect(() => {
    setDefaultSortingMethod(getSortingItem(sortingMethod));
  }, []);

  useEffect(() => {
    setDefaultPokemonPerPage(getPokemonPerPageItem(pokemonPerPage));
  }, []);

  return (
    <S.ViewPanel>
      <h3>
        {`${formatNumberOfMatchedPokemon(numberOfMatchedPokemon)} pokemon`}
      </h3>
      <S.DropdownBox>
        <Dropdown
          width="134px"
          labelPrefix="sort by "
          defaultSelected={defaultSortingMethod}
          list={sorting_list}
          handleChange={sortingMethodChange}
        />
        <Dropdown
          width="176px"
          labelPrefix="pokemon per page "
          defaultSelected={defaultPokemonPerPage}
          list={pokemon_per_page_list}
          handleChange={pokemonPerPageChange}
        />
      </S.DropdownBox>
    </S.ViewPanel>
  );
};

export default ViewPanel;
