import styled from "styled-components";
// "import type" is required because TS config uses verbatimModuleSyntax, otherwise it shows me an errors
// interfaces need to use import type
import type { BreedInfo } from "../interfaces/BreedInfo.ts";

const AllBreedsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #E0DCF5;
`;

const OneBreedDiv = styled.div<{ hypoallergenic: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
  text-align: center;
  background-color: ${(props) => (props.hypoallergenic ? "#AF9CCB" : "#F5DDDC")};
  border: 3px solid ${(props) => (props.hypoallergenic ? "#7D5BA0" : "#F5F5DC")};
`;

export default function Breeds(props: { data: BreedInfo[] }) {
    return (
        <AllBreedsDiv>
            {
                props.data.map((breed: BreedInfo) =>

                    <OneBreedDiv key={breed.id} hypoallergenic={Boolean(breed.attributes?.hypoallergenic)}> {/* passes a true/false flag into the styled component */}
                        {/* because in the dogApi that I choose, actual details are nested inside an attributes object, soso I have to access everything through breed.attributes instead of directly (like in the Rick & Morty).  */}
                        <p>{/* if both min and max exist, show min to max years*/}
                            {breed.attributes.life.min && breed.attributes.life.max
                                ? `${breed.attributes.life.min} - ${breed.attributes.life.max} yrs`
                                : ""}
                        </p>

                        <p>{breed.attributes.description ? breed.attributes.description : ""}</p>
                        <p>{breed.attributes.hypoallergenic ? "(Hypoallergenic)" : ""}</p>
                    </OneBreedDiv>
                )
            }
        </AllBreedsDiv>
    );
}
