import { Movable } from "./Movable";
import { Point } from "./Point";

export class Player extends Movable {
    protected id : string;
    protected rev : string;
    protected assigned : boolean;
    protected color : string;
    constructor(id:string,rev : string, assigned : boolean, color : string,x:number,y:number) {
        super(x,y)
        this.id= id;
        this.rev= rev;
        this.assigned= assigned;
        this.color= color;
    }
    
}