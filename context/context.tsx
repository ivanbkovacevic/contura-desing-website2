import React, { useEffect } from "react";

interface ContextState {
  scrollFromTop: number;
  footerReached: boolean;
  scrolledUp: boolean;
  windowWidth: number;
}

interface ContextProps {
  state: ContextState;
  handleFooterReached: () => void;
}

const Context = React.createContext<ContextProps>({
  state: {
    scrollFromTop: 0,
    footerReached: false,
    scrolledUp: true,
    windowWidth: 1,
  },
  handleFooterReached: () => {},
});

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<ContextState>({
    scrollFromTop: 0,
    footerReached: false,
    scrolledUp: true,
    windowWidth: 1,
  });

  let prevScrollPos = 0;
  if (typeof window !== "undefined") {
    prevScrollPos = window.pageYOffset;
  }
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setState((prevState) => ({ ...prevState, scrollFromTop: scrollTop }));
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setState((prevState) => ({ ...prevState, scrolledUp: true }));
    } else {
      setState((prevState) => ({ ...prevState, scrolledUp: false }));
    }
    prevScrollPos = currentScrollPos;
  };
  const handleFooterReached = () => {
    setState((prevState) => ({
      ...prevState,
      footerReached: !state.footerReached,
    }));
  };

  useEffect(() => {
    setState((prevState) => ({ ...prevState, windowWidth: window.innerWidth }));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        handleFooterReached,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
