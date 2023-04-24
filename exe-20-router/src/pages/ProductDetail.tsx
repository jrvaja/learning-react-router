import { Link, useParams } from "react-router-dom";

type TProductParam = {
  id: string;
};
const ProductDetail = () => {
  const params = useParams<TProductParam>();

  return (
    <>
      <h1>product details page</h1>
      <p>Product #{params.id}</p>
      <Link to={".."} relative="path">
        Back
      </Link>
    </>
  );
};
export default ProductDetail;
