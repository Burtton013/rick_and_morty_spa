import { useParams } from "react-router";

export const CharacterPage = () => {
  const { idSlug = "" } = useParams();

  return <div>CharacterPage</div>;
};
