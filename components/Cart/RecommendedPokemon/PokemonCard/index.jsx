import Image from "next/image";
import Link from "next/link";
import {
  AddToCartButton, FavoritesHeart,
  TypeFlairBox
} from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import * as S from "./Styles";

const PokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  return (
    <S.PokemonCard>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <div style={{ cursor: "pointer" }}>
          <S.HeartContainer>
            <FavoritesHeart pokemon={pokemon} />
          </S.HeartContainer>
          <Image quality={100} width={190} height={190} src={image_url} />
          <h3>{name}</h3>
          <TypeFlairBox types={types} />
        </div>
      </Link>
      <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
      <AddToCartButton
        width="80%"
        height="30px"
        pokemon={pokemon}
        activateCartDropdown={false}
      />
    </S.PokemonCard>
  );
};

export default PokemonCard;
