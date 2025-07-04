import Lottie from "lottie-react";
import happyAnimation from "@/assets/lottie/frustrated.json"; // adjust path

export default function Frustrated() {
  return (
    <Lottie
      animationData={happyAnimation}
      loop={true}
      style={{ height: 45, width: 45 }}
    />
  );
}
