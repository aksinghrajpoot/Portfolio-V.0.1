import { FaBeer } from "react-icons/fa";
import {
  AiOutlineFacebook,
  AiOutlineCodepen,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container py-10">
          <hr className="text-white-30 border-white/20 py-6" />
          <div className="flex justify-between">
            <div className="text-lg">©️2022 Ashok.</div>
            <div className="flex items-center gap-4">
              <AiOutlineFacebook className="text-2xl" />
              <AiOutlineCodepen className="text-2xl" />
              <AiOutlineYoutube className="text-2xl" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
