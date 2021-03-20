class Slingshot{
constructor(A,B){
var options={
bodyA:A,
pointB:B,
length:10,
stiffness:0.3
}
this.chain=Constraint.create(options);
World.add(world,this.chain);
}
display(){
if(this.chain.bodyA){
var pointA=this.chain.bodyA.position
var pointB=this.chain.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)
}


}
attach(body){
    this.chain.bodyA=body;
    
    }
fly(){
this.chain.bodyA=null;

}


}