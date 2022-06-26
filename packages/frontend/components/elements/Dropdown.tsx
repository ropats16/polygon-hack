import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export type DropdownProps = {
  options: string[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ options }: DropdownProps) => {
  const [selectOption, setSelectOption] = useState("select");

  return (
    <Menu as="div" className={"relative inline-block text-left"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={
              "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            }
          >
            {selectOption}
            <ChevronDownIcon
              className={"-mr-1 ml-2 h-5 w-5"}
              aria-hidden={"true"}
            />
          </Menu.Button>

          <Transition
            show={open}
            enter={"transition ease-out duration-100"}
            enterFrom={"transform opacity-0 scale-95"}
            enterTo={"transform opacity-100 scale-100"}
            leave={"transition ease-in duration-75"}
            leaveFrom={"transform opacity-100 scale-100"}
            leaveTo={"transform opacity-0 scale-95"}
          >
            <Menu.Items
              className={
                "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              }
            >
              <div className={"py-1"}>
                {options.map((option, id) => (
                  <Menu.Item key={id}>
                    {({ active }) => (
                      <div className={"py-1 pl-4"}>
                        <div
                          className={classNames(
                            active
                              ? "text-neutral-600 font-semibold"
                              : "text-neutral-400",
                            "flex my-1 items-center cursor-pointer border-r-4 border-transparent hover:border-neutral-500"
                          )}
                          onClick={() => setSelectOption(option)}
                        >
                          {option}
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
