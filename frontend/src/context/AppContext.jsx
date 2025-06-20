import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {

    // const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [backendUrl] = useState('http://localhost:3000');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showVerifyEmail, setShowVerifyEmail] = useState(false);
    const [showAddThread, setShowAddThread] = useState(false);

    return <AppContext.Provider value={{ backendUrl, showForgotPassword, setShowForgotPassword, showVerifyEmail, setShowVerifyEmail, showAddThread, setShowAddThread }}>{children}</AppContext.Provider>;
};