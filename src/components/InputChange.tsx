type inputEvent = {
  ChangeVal?: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputChange(props: inputEvent) {
  return (
    <div>
      <section>
        <h2>Input text area</h2>
        <input
          type="text"
          //   value={props.ChangeVal}
          onChange={props.onChangeHandler}
        />
      </section>
    </div>
  );
}
