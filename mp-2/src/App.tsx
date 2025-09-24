import Breeds from "./components/Breeds.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { BreedInfo } from "./interfaces/BreedInfo";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px #AF9CCB solid;
`;


export default function App(){
    const [data, setData] = useState<BreedInfo[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch("https://dogapi.dog/api/v2/breeds");
            const json: { data: BreedInfo[] } = await resp.json();
            setData(json.data);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);



    return (
        <ParentDiv>
            <Breeds data={data} />
        </ParentDiv>
    );
}