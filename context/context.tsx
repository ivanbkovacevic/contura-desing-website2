import React, { useEffect } from "react";

interface ContextState {
  scrollFromTop: number;
}

interface ContextProps {
  state: ContextState;
}

const Context = React.createContext<ContextProps>({
  state: { scrollFromTop: 0 },
});

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<ContextState>({
    scrollFromTop: 0,
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setState((prevState) => ({ ...prevState, scrollFromTop: scrollTop }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
