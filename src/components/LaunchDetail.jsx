import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/launches";

export function LaunchDetail(){
    const [launch, setLaunch] = useState([])

    const { launchId } = useParams();

    useEffect(() => {

    }, {launchId});s
    return <div>Hola {launchId}</div>
}  