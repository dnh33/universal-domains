import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircleFill } from "react-icons/bs";
import Navbar from "../../components/nav/Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex md:flex-row flex-col items-start justify-between">
            <div className="flex flex-1 justify-start flex-col md:mr-10">
              <h1>
                SHOW SOMETHING
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
