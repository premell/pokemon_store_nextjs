import {
  FavoritesHeart,
  TypeFlairBox,
  AddToCartButton,
} from "shared/components";
import * as S from "./Styles";
import Link from "next/link";
import Image from "next/image";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

const PokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  return (
    <S.PokemonCardContainer>
      <div style={{ cursor: "pointer" }}>
        <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
          <a>
            <Image quality={100} width={200} height={200} src={image_url} />
          </a>
        </Link>
      </div>
      <S.InformationContainer>
        <h3>{name}</h3>
        <TypeFlairBox types={types} />
        <S.ButtonContainer>
          <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
          <AddToCartButton width="120px" height="30px" pokemon={pokemon} />
        </S.ButtonContainer>
      </S.InformationContainer>
      <S.HeartContainer>
        <FavoritesHeart pokemon={pokemon} />
      </S.HeartContainer>
    </S.PokemonCardContainer>
  );
};

export default PokemonCard;
