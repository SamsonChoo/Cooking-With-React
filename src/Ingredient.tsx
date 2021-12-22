interface Props {
  name: string;
  amount: string;
}
export default function Ingredient(props: Props) {
  const { name, amount } = props;
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
}
