import React, { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  console.log(isOpen);
  return (
    <div class="flex lg:hidden" onClick={toggling}>
      <div class="space-y-2">
        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      </div>
    </div>
  );
}
