class Quiz{
    constructor(){}
    getState(){
        var gs_ref = database.ref('gameState');
        gs_ref.on("value",function(data){
            gameState = data.val();
        })

    }

update(state){
    database.ref('/').update({
        gameState:state})
}
 async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCount_ref = await database.ref('contestantCount').once("value");
        if(contestantCount_ref.exists()){
 contestantCount = contestantCount_ref.val();
 contestant.getCount();
        }

     question = new Question();
     question.display();
    }
    

}
play(){
    question.hide();
    
    Contestant.getContestantInfo();


       

 




drawSprites();
}
}
    