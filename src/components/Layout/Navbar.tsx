import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface NavigationItem {
  id: number;
  triggerLabel: string;
  content: string[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 1,
    triggerLabel: "Cadastros",
    content: ["Tags", "Públicos Alvos"],
  },
];

export const Navbar = () => {
  return (
    <NavigationMenu.Root className="bg-primary flex h-full w-full items-center justify-center shadow-lg">
      <NavigationMenu.List className="flex space-x-6">
        {navigationItems.map((item) => (
          <NavigationMenu.Item key={item.id} className="relative">
            <NavigationMenu.Trigger className="cursor-pointer px-4 py-2 font-bold tracking-wide text-white hover:text-neutral-200">
              {item.triggerLabel}
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-7 left-0 mt-2 w-40 rounded-md bg-white shadow-md">
              <ul className="p-2">
                {item.content.map((label) => (
                  <li key={label} className="cursor-pointer">
                    <NavigationMenu.Link className="block rounded-md p-2 hover:bg-gray-200">
                      {label}
                    </NavigationMenu.Link>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
