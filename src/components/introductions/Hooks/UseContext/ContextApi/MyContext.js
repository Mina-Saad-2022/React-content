import React, { createContext, useState } from "react";

// إنشاء الـ Context
const newContext = createContext();

// الـ Provider بتاعنا
const ContextApi = ({ children }) => {
  // const [userdata, usersetdata] = useState({
  //   name: "mina",
  //   age: 33,
  // });
  return <newContext.Provider value='remon'>{children}</newContext.Provider>;
};

export { newContext, ContextApi };
