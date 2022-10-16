// rendering in Component
interface oscarProps {
  children: React.ReactNode; // ReactNode is a Component's type provided by "@types/react": "^18.0.21",
}

export default function OscarInComponent(props: oscarProps) {
  return <div>{props.children}</div>;
}
