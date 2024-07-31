import React from "react";

function Navbar() {
  return (
    <div className="w-full h-10 p-2 mb-5">
      <div class="relative flex items-center py-[2.125rem]">
        <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>

        <pre class="ml-10 font-bold font-serif text-4xl flex-none text-slate-900">
          Kishan Jain
        </pre>

        <div class="ml-auto hidden lg:flex lg:items-center mr-28 text-xl">
          <a href="/MainInfo">Home</a>
          <a class="ml-8" href="/AboutMe">
            About Me
          </a>
          <a class="ml-8" href="/MyProject">
            My projects
          </a>
          <a class="ml-8" href="/ContactDetails">
            Contact Me
          </a>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
