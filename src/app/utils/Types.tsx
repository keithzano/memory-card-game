export interface Card {
    id: number,
    rank:string,
    suit:string,
    color: 'red' | 'black',
    matched?:boolean
}

export interface Player{
    name:string,
    score:number
}