interface stylePropsdefine {
  styleOfH1: React.CSSProperties;
}

export default function StyleProps({ styleOfH1 }: stylePropsdefine) {
  return (
    <div>
      <h1 style={styleOfH1}>Well hello folky</h1>
    </div>
  );
}
