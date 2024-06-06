// import React, { createContext, useState } from "react";
// type providerType={
//     counter:Number,
//     setCounter:React.Dispatch<React.SetStateAction<number>>;

// }
// const CounterContext = createContext<providerType>({
//     counter:0,
//     setCounter:()=>null
// });
// const CounterContextProvider = ({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) => {
//     const [counter, setCounter] = useState(0)
//   return(
//     <CounterContext.Provider value={{counter,setCounter}}>
//         {children}
//     </CounterContext.Provider>
//   )
// };
// export {CounterContextProvider,CounterContext}

import { createContext, useState } from "react";
type expenseTrackerType = {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
};

type providerType = {
  transaction: expenseTrackerType[];
  addTransaction: (data: expenseTrackerType) => void;
  deleteTransaction:(id:string)=>void
};
const CounterContext = createContext<providerType>({
  transaction: [],
  addTransaction: (data) => null,
  deleteTransaction:(id)=>null
});
const CounterContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [transaction, setTransaction] = useState<expenseTrackerType[]>([]);
  const addTransaction = (data: expenseTrackerType) => {
    setTransaction([...transaction, data]);
  };
  const deleteTransaction = (id: string) => {
    const updated=transaction?.filter((item)=>item?.id!==id)
    setTransaction(updated);
  };
  return (
    <CounterContext.Provider value={{ transaction, addTransaction,deleteTransaction }}>
      {children}
    </CounterContext.Provider>
  );
};
export { CounterContextProvider, CounterContext };
