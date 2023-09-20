import { useParams } from "react-router-dom";

function Content() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Content;
