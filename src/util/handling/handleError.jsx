import Alert from "@/src/components/Alert";

export const handleError = (err) => {
  Alert({ icon: "error", title: err });
};
