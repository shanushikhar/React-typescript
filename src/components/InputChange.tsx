type inputEvent = {
  ChangeVal?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputChange(props: inputEvent) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <section>
        <h2>Input text area</h2>
        <input
          type="text"
          //   value={props.ChangeVal}
          // onChange={props.onChangeHandler} => passed from props
          // passed in component itself
          onChange={onChangeHandler}
        />
      </section>
    </div>
  );
}
