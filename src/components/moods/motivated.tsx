import Lottie from "lottie-react";
import happyAnimation from "@/assets/lottie/motivated.json"; // adjust path

export default function Motivated() {
  return (
    <Lottie
      animationData={happyAnimation}
      loop={true}
      style={{ height: 35, width: 35 }}
    />
  );
}
