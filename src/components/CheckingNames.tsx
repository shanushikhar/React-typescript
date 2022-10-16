type checkingNameprops = {
  status: "success" | "fail" | "processing"; // <union> it will make sure status value only comprises these only
};

export default function CheckingNames(props: checkingNameprops) {
  let message = "Success";

  if (props.status === "success") {
    message = "Success";
  } else if (props.status === "processing") {
    message = "Processing data";
  } else if (props.status === "fail") {
    message = "Message Failed";
  }

  return <div>{message}</div>;
}
