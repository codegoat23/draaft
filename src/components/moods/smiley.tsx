import Lottie from "lottie-react";
import happyAnimation from "@/assets/lottie/emoji-smiley.json"; // adjust path

export default function Smiley() {
  return (
    <Lottie
      animationData={happyAnimation}
      loop={true}
      style={{ height: 25, width: 25 }}
    />
  );
}
