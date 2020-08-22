export class Quotes {
  constructor(
    public id:number,
    public name:string,
    public author:string,
    public quote:string,
    public entryDate: Date,
    public upvote: number,
    public downvote: number
  ){}
}
