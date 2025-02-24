import { NavigationMenu } from "radix-ui";

export const Navbar = () => {
  return (
    <NavigationMenu.Root className="bg-primary col-start-13 col-end-9 row-span-1 flex items-center justify-end rounded-tl-2xl rounded-bl-2xl shadow-lg">
      <NavigationMenu.List className="flex justify-center border-1 border-red-600 bg-white p-1">
        <NavigationMenu.Item className="border-1 border-amber-500">
          aidhasid
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
