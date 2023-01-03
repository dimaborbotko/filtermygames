import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import user from "../../assets/user.png";

export default function UserDropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <img class="mt-1" src={user} alt="finish" width="45" />
          <p class="text-black font-semibold">User</p>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-24 top-6 z-10 mt-2 w-56 origin-top-right rounded-md bg-main-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <p className="bg-main-white text-gray-900 cursor-pointer">
                  Logout
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p className="bg-main-white text-gray-900 cursor-pointer">
                  Logout
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
