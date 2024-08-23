"use client"
import Alert from "@/src/components/Alert";
export const handleSuccess = (res) => {
  Alert({ icon: "success", title: res });
};
