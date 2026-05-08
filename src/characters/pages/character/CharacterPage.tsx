import { useParams } from "react-router";

export const CharacterPage = () => {
  const { idSlug = "" } = useParams();

  console.log(idSlug);

  return <div>CharacterPage</div>;
};
