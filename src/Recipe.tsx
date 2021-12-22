interface Props {
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
}

export default function Recipe(props: Props) {
  const { name, servings, cookTime, instructions } = props;
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
    </div>
  );
}
