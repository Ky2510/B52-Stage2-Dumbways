import { useState } from "react";
import TypeDataPaslon from "../interface/dashboard";
import { ChangeEvent } from "react";

const useInsertPaslon = () => {
    const [paslon, setPaslon] = useState<TypeDataPaslon>({
        name: "",
        serial_number: "",
        vision_mission: ""
    });

    const handleSetPaslon = (event: ChangeEvent<HTMLInputElement>): void => {
        setPaslon({
            ...paslon,
            [event.target.name]: event.target.value
        });
    };

    const insertPaslon = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/v1/paslon", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(paslon)
            });
            if (response.ok) {
                const data = await response.json();
                setPaslon(data.message);
                console.log("insert paslon success");
            } else {
                const errorData = await response.json();
                setPaslon(errorData.error);
            }
        } catch (error) {
            console.error("Error insert paslon:", error);
        }
    };

    return { paslon, handleSetPaslon, insertPaslon };
};

export default useInsertPaslon;
