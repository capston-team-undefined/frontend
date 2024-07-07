import { probelm, ProblemChoice, ProblemText, ProblemYseOrNo } from "./problem";


export interface ProblemTypes {
    question: string,
    type: probelm,
    point: number,
    optionText: string[] | string | ProblemChoice[] | ProblemText | ProblemYseOrNo
}
export type ProblemDatas = ProblemTypes[]