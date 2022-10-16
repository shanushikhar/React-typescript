// Passing Optional props

interface OptionalPropsVal {
  message1: string;
  message2?: string; // adding ? will make this props optional to pass from parent component
  message: number;
}

export default function OptionalProps(props: OptionalPropsVal) {
  const { message2 = "No val at this point" } = props; // Destructing in Tsx
  return (
    <div>
      <h1>{props.message1}</h1>
      <h1>{message2}</h1>
      <h1>{props.message}</h1>
    </div>
  );
}
