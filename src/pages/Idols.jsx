import { useParams } from "react-router-dom";
import ItemsContainer from "../components/ItemsContainer";
import { getItems } from "../services/MockServices";

const Idols = () => {
  const { id } = useParams();
  return (
    <ItemsContainer
      title={!id ? "Members" : ""}
      items={getItems()}
      img={id ? "idol image" : ""}
    />
  );
};

export default Idols;
