import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDY0ZTRlMy04MzNjLTRkZmMtYmFlMi05YTM5Yzk1OGUxZGUiLCJpYXQiOjE3NDc3NTQ4Nzl9.sF_REBj0vOSE9RKqYcdAAbqOtgF5ynqLHdZV1f_ti_w`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [])

    return {
        socket,
        loading
    }

}