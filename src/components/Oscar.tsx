// rendering children

type oscarProps = {
  children: string;
};

export default function Oscar(props: oscarProps) {
  return <div>{props.children}</div>;
}
