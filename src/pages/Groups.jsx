import { useParams } from "react-router-dom";
import ItemsContainer from "../components/CategoryContainer";
import { getItems } from "../services/MockServices";

const Groups = () => {
  const { id } = useParams();
  return <ItemsContainer title={!id ? "Groups" : ""} items={getItems()} />;
};

export default Groups;
