type ProductProps = {
  title: string;
  price: number;
};
let Product: React.FC<ProductProps> = (props: ProductProps) => {
  return (
    <>
      <h2>{props.title}</h2>
      <strong>{props.price}</strong>
    </>
  );
};

export default Product;
