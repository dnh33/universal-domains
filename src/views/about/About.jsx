import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircleFill } from "react-icons/bs";
import Navbar from "../../components/nav/Navbar";
export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <article className="mb-10 md:mb-16">
            <h2 className="text-white text-3xl lg:text-3xl font-bold text-center drop-shadow:lg mb-4 md:mb-6">
              About
            </h2>
            <p className="max-w-screen-md text-gray-100 md:text-lg text-center bg-gradient-to-tr from-fuchsia-500 via-conical-pink rounded-2xl mx-auto">
              The Domain Name System (DNS) is the hierarchical and{" "}
              <code>decentralized</code> naming system used to identify
              computers, services, and other resources reachable through the
              internet or other internet protocol networks.
            </p>
            <br />
            <p className="max-w-screen-md text-gray-100 md:text-lg text-center mx-auto">
              We are a team of developers who are passionate about building:{" "}
            </p>
            <br />
            <ul className="fle">
              <li className="text-gray-100 md:text-lg text-center mx-auto">
                <code>Hyper light</code> applications. MS counts. gZip counts.
              </li>
              <br />
              <li className="text-gray-100 md:text-lg text-center mx-auto">
                <code>Low hanging fruit</code> are easy to pick. Let's make easy
                to make and easily understandable apps.
              </li>
              <br />
              <li className="text-gray-100 md:text-lg text-center mx-auto"><code></code></li>
            </ul>
            <br />
            <p className="max-w-screen-md text-gray-100 md:text-lg text-center mx-auto">
              udns means instant domains for everyone it is the <code>d10e</code> version of
              existing free domain services allowing claimable subdomains,
              people can register subdomains for free turn domains into a dns
              paid services comes with tunneling and dns services
            </p>
            <br />
            <p className="max-w-screen-md text-gray-100 md:text-lg text-center mx-auto">
              udns is domains for the whole universe. Its API is heavily
              inspired by our dreams but it contains just the bare minimum to
              build your modern frontend project. It’s intuitive to use and it
              weighs almost nothing.
            </p>
            <br />
            <p className="max-w-screen-md text-gray-100 md:text-lg text-center mx-auto">
              udns is a free service that allows you to register domains for free. It works today. No reinventing the wheel, but rather taking the good parts of what’s there and making the simplest tool possible.
            </p>
            <br />
            <p className="max-w-screen-md text-gray-100 md:text-lg text-center mx-auto">
              It’s a tool that will make your life easier. That's our goal.
            </p>
          </article>
          {/* <!-- text - end --> */}
        </div>
      </div>
    </>
  );
}
