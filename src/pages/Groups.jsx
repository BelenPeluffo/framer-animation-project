import ItemsContainer from "../components/CategoryContainer";
import { getItems } from "../services/MockServices";

const Groups = () => {
  return <ItemsContainer title="Groups" items={getItems()} />;
};

export default Groups;
