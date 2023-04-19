import React, { useEffect } from "react";

interface ContextState {
  scrollFromTop: number;
}

interface ContextProps {
  state: ContextState;
}

// Create the context
const Context = React.createContext<ContextProps>({
  state: { scrollFromTop: 0 },
});

// Define the context provider component
function ContextProvider(props: React.PropsWithChildren<{}>) {
  // Set the initial state for the context
  const [state, setState] = React.useState<ContextState>({
    scrollFromTop: 0,
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setState((prevState) => ({ ...prevState, scrollFromTop: scrollTop }));
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return the provider with the context value set
  return (
    <Context.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
