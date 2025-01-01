import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

const UserAuth = ({ children }) => {
    const { setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const user = localStorage.getItem("user");
            setUser(JSON.parse(user).user);
            setLoading(false);
        } else {
            navigate("/login");
        }
    }, [token, navigate, setUser]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserAuth;
