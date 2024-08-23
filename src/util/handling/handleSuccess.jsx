import Alert from "@/src/components/Alert";
export default handleSuccess = (res) => {
  Alert({ icon: "success", title: res });
};
