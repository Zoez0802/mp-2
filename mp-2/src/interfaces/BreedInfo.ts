export interface BreedInfo {
    id: string;
    type: string;
    //I need to have a extra attributes{} because in the dogApi that I choose, actual details are nested inside an attributes object.
    attributes: {
        name: string;
        description: string;
        life: { min: number; max: number; };
        hypoallergenic: boolean;
    };
}
