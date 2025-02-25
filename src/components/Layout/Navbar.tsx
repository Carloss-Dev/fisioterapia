import { Icon } from "@iconify-icon/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router-dom";

interface INavigationItemContent {
  label: string;
  route?: string;
}
interface INavigationItem {
  id: number;
  itemLabel?: string;
  itemRoute?: string;
  triggerLabel?: string;
  content?: INavigationItemContent[];
}

const navigationItems: INavigationItem[] = [
  {
    id: 1,
    triggerLabel: "Cadastros",
    content: [
      {
        label: "Tags",
      },
      {
        label: "Publicos Alvos",
      },
    ],
  },
  {
    id: 2,
    itemLabel: "Github",
    itemRoute: "/",
  },
];

export const Navbar = () => {
  return (
    <NavigationMenu.Root className="bg-primary flex h-full w-full items-center justify-center shadow-lg">
      <NavigationMenu.List className="flex space-x-6">
        {navigationItems.map((item) => (
          <NavigationMenu.Item key={item.id} className="relative">
            {item.itemLabel ? (
              <NavLink to={item.itemRoute ?? ""}> {item.itemLabel}</NavLink>
            ) : (
              <>
                <NavigationMenu.Trigger className="inline-flex cursor-pointer px-4 py-2 font-bold tracking-wide text-white hover:text-neutral-200">
                  {item.triggerLabel}
                  <Icon icon="ri:arrow-down-s-line" className="self-center" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-7 left-0 mt-2 w-40 rounded-md bg-white shadow-md">
                  <ul className="p-2">
                    {item.content?.map((itemContent) => (
                      <li key={itemContent.label} className="cursor-pointer">
                        <NavigationMenu.Link className="block rounded-md p-2 hover:bg-gray-200">
                          {itemContent.label}
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
                itemContent
              </>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
