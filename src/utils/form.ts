import problemData from "./types/problem";

export const changeProblemTypes = (problemData: problemData) => {
    const data:any[] = [];
    for(let i = 0; i < Number(problemData.probelmType?.length); ++i){
        data[i] = {
            problemType: problemData.probelmType![i],
            problemText: problemData.problemText![i],
            point: problemData.point![i],
            data: problemData.data![i]
        }
    }

    return{
        setting: problemData.setting,
        data
    }
}