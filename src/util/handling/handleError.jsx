import Alert from "@/src/components/Alert";
export default handleError = (err) => {
  Alert({ icon: "error", title: err });
};
