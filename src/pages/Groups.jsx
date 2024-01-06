import { useParams } from "react-router-dom";
import ItemsContainer from "../components/ItemsContainer";
import { getItems } from "../services/MockServices";

const Groups = () => {
  const { id } = useParams();
  // It's gonna be necessary to fetch the groups data so that LOGO can be sent
  return (
    <ItemsContainer
      title={!id ? "Groups" : ""}
      items={getItems()}
      logo={
        id ? "src/assets/images/groupLogos/2560px-(G)I-dle_logo.svg.png" : ""
      }
    />
  );
};

export default Groups;
