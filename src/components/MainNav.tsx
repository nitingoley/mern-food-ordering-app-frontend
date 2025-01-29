import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { UsernameMenu } from "./UsernameMenu";

export const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <span className="flex space-x-2 items-center">
      {isLoading ? (
        <span className="text-gray-500">Loading...</span>
      ) : isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          className="font-bold hover:text-orange-500 hover:bg-white"
          variant="ghost"
          onClick={handleLogin}
          aria-label="Log in to your account"
        >
          Log In
        </Button>
      )}
    </span>
  );
};

