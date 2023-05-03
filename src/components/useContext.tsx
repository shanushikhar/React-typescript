import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type INITIAL_TYPE = {
  count: number;
  text: string;
};

export const initial_State: INITIAL_TYPE = {
  count: 0,
  text: "",
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INPUT_VALUE,
}

type REDUCER_ACTION = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: INITIAL_TYPE, action: REDUCER_ACTION): INITIAL_TYPE => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.INPUT_VALUE:
      return { ...state, text: action.payload ?? "" };
    default:
      return state;
  }
};

const useContextHook = (init_State: INITIAL_TYPE) => {
  const [state, dispatch] = useReducer(reducer, init_State);

  const incrementCounter = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INCREMENT,
    });
  };
  const decrementCounter = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.DECREMENT,
    });
  };
  const inputHander = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INPUT_VALUE,
      payload: e.target.value,
    });
  };

  return { state, incrementCounter, decrementCounter, inputHander };
};

type ContextProviderType = ReturnType<typeof useContextHook>;

const initCounter: ContextProviderType = {
  state: initial_State,
  incrementCounter: () => {},
  decrementCounter: () => {},
  inputHander: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext = createContext<ContextProviderType>(initCounter);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initstate
}: ChildrenType & INITIAL_TYPE): ReactElement => {
  return (
    <CounterContext.Provider value={useContextHook(initstate)}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterHook = () => {
  const {
    state: { count },
    incrementCounter,
    decrementCounter,
  } = useContext(CounterContext);
  return { count, incrementCounter, decrementCounter };
};

export const useTextHook = () => {
  const {
    state: { text },
    inputHander,
  } = useContext(CounterContext);
  return { text, inputHander };
};
