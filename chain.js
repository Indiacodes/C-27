class chain{
    constructor(objectA, objectB){
        var chainoptions = {
            stiffness : 0.5,
            bodyA : objectA,
            bodyB : objectB,
            legnth : 10
        }

        this.chain = Matter.Constraint.create(chainoptions);
        World.add(world, this.chain);
    }

    showChain(){
        strokeWeight(5);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}