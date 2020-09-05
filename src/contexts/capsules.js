import React, { useState, useContext, useEffect } from "react";
import CapsulesApi from "services/CapsulesApi";

const CapsulesStateContext = React.createContext();
const CapsulesDispatchContext = React.createContext();

export function CapsulesProvider({ children }) {
  const [capsules, setCapsules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    async function fetchCapsules() {
      try {
        const data = await CapsulesApi.getAll();
        setCapsules(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchCapsules();
  }, []);

  async function addCapsule() {
    setIsAdding(true);

    try {
      const capsule = await CapsulesApi.addCapsule();
      setIsAdding(false);
      setCapsules([...capsules, capsule]);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <CapsulesStateContext.Provider value={{ isLoading, isAdding, capsules }}>
      <CapsulesDispatchContext.Provider value={addCapsule}>
        {children}
      </CapsulesDispatchContext.Provider>
    </CapsulesStateContext.Provider>
  );
}

export function useCapsules() {
  const state = useContext(CapsulesStateContext);
  const addCapsule = useContext(CapsulesDispatchContext);

  if (state === undefined || addCapsule === undefined) {
    throw new Error("useCapsules must be used inside a CapsuleProvider");
  }

  return [state, addCapsule];
}
