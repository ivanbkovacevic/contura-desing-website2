import React, { useEffect } from "react";

interface ContextState {
  scrollFromTop: number;
  footerReached: boolean;
}

interface ContextProps {
  state: ContextState;
  handleFooterReached : () => void;

}

const Context = React.createContext<ContextProps>({
  state: { scrollFromTop: 0, footerReached: false },
  handleFooterReached : () => {},

});

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<ContextState>({
    scrollFromTop: 0,
    footerReached:false,
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setState((prevState) => ({ ...prevState, scrollFromTop: scrollTop }));
  };
  const handleFooterReached = () => {
    setState((prevState) => ({ ...prevState, footerReached: !state.footerReached }));
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
        handleFooterReached,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
