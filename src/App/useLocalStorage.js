import React from "react"

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }) );
  const { 
    error,
    loading,
    item,
    sincronizedItem,
  } = state;

  //actions creators
  const onError = (error) => {
    dispatch({type: actionsTypes.error, payload: error})
  }
  const onSuccess = (item) => {
    dispatch({type: actionsTypes.success, payload: item})
  }
  const onSave = (item) => {
    dispatch({type: actionsTypes.save, payload: item})
  }
  const onSincronize = () => {
    dispatch({ type: actionsTypes.sincronize })
  }

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItem = initialValue
        } else {
          parseItem = JSON.parse(localStorageItem)
        }
        onSuccess(parseItem);
      } catch (error) {
        onError(error);
      }
    }, 4000)
  }, [sincronizedItem])
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      onSave(newItem)
    } catch (error) {
      onError(error)
    };
  };

  const sincronizeItem = () => {
    onSincronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
};

const initialState = ({initialValue}) => {
  return{
    error: false,
    loading: true,
    item: initialValue,
    sincronizedItem: true,
  };
};

const actionsTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionsTypes.error]: {
    ...state,
    error: true,
  },
  [actionsTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionsTypes.save]: {
    ...state,
    item: payload,
  },
  [actionsTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage }