type namesArrayProps = {
  names: {
    firstname: string;
    lastname: string;
  }[];
};

export const PersonList = (props: namesArrayProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.firstname}>
            {name.firstname} {name.lastname}
          </h2>
        );
      })}
    </div>
  );
};
