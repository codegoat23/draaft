import Lottie from "lottie-react";
import happyAnimation from "@/assets/lottie/anxious.json"; // adjust path

export default function Anxious() {
  return (
    <Lottie
      animationData={happyAnimation}
      loop={true}
      style={{ height: 18, width: 18 }}
    />
  );
}
