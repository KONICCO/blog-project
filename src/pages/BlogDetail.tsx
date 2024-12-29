import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  return <div>BlogDetail - {id}</div>;
}

export default BlogDetail;
