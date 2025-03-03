export interface PostType {
    _id: string,
    title: string,
    startTime: string,
    endTime: string,
    totalVoter: number,
    requireVoter: number,
    content: string,
    options: {option: string, selectNumber:number}[],
    writer: string,
    participation: string[]
}