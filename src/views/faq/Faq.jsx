import Navbar from "../../components/nav/Navbar";

export default function Faq() {
  return (
    <>
      <Navbar />
      <div class="bg-transparent py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-white text-2xl lg:text-3xl font-bold text-center drop-shadow:lg mb-4 md:mb-6">
              Frequently asked questions
            </h2>

            <p class="max-w-screen-md text-gray-100 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
            {/* <!-- question - start --> */}
            <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">
                What can I use uDNS for?
              </h3>
              <p class="text-gray-500">
                Domains can be used to host a game, a website, a chat server,
                and many other things. It can also help you expose any http
                service on any device with web relaying! It's as easy as going
                to the dashboard, claiming a name, connecting it to an IP
                address, and you're ready to go.
              </p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">
                What are the features?
              </h3>
              <p class="text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">
                What if I don't have a server?
              </h3>
              <p class="text-gray-500">
                We have instructions on how to get free servers! just look at
                the rest of our wiki. 😊
              </p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">
                What if my IP keeps changing?
              </h3>
              <p class="text-gray-500">
                You can set your domain to a public key generated by our special
                app, which will make the nameservers ask your computer for its
                IP now and then, giving you what is called dynamic dns (DDNS)
                when you run the CLI client.
              </p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">
                What if I'm behind a firewall?
              </h3>
              <p class="text-gray-500">
                There's a special case for users who want to expose http
                services from behind a firewall, a method used by developers to
                demonstrate their work in progress over the internet, you can
                easily do this with the uDNS CLI client, it has a mode that
                turns it into an
                introspective-reverse-ssl-proxy-over-universal-dns.
              </p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
              <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">
                Which payment methods are available?
              </h3>
              <p class="text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>
            </div>
            {/* <!-- question - end --> */}
          </div>
        </div>
      </div>
    </>
  );
}
