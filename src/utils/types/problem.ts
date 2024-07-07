export type probelm = 'choice' | 'choiceList' | 'short text' | 'text' | 'linking' | 'yesorno' | '';

export interface  ProblemChoice{
    incorrect: boolean,
    text: string
}

export interface  ProblemText{
    text: string
}

export interface  ProblemLink{
    link: number | null,
    text: string,
    word: boolean
}


export interface coordinate{
    x: number,
    y: number,
    idx: number
}

export interface ProblemYseOrNo{
    yes: boolean,
    no: boolean
}


export interface ProblemSetting{
    name: string,
    description: string,
    primaryTag: string,
    tag: string[],
    image: File | null
}

export interface ProblemTimes{
    hh: number,
    mm: number,
    ss: number
}
export default interface problemData{
    setting: ProblemSetting,
    time: ProblemTimes,
    probelmType?: probelm[] | null,
    problemText?: string[],
    point?: number[],
    data?: any[]
}

