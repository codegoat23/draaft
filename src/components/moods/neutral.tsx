import Lottie from "lottie-react";
import happyAnimation from "@/assets/lottie/emoji-neutral.json"; // adjust path

export default function Neutral() {
  return (
    <Lottie
      animationData={happyAnimation}
      loop={true}
      style={{ height: 35, width: 35 }}
    />
  );
}
