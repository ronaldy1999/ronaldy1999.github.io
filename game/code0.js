gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDplayerObjects1_1final = [];

gdjs.New_32sceneCode.GDplatformObjects1= [];
gdjs.New_32sceneCode.GDplatformObjects2= [];
gdjs.New_32sceneCode.GDplatformObjects3= [];
gdjs.New_32sceneCode.GDplayerObjects1= [];
gdjs.New_32sceneCode.GDplayerObjects2= [];
gdjs.New_32sceneCode.GDplayerObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDstart_95textObjects1= [];
gdjs.New_32sceneCode.GDstart_95textObjects2= [];
gdjs.New_32sceneCode.GDstart_95textObjects3= [];
gdjs.New_32sceneCode.GDfinishObjects1= [];
gdjs.New_32sceneCode.GDfinishObjects2= [];
gdjs.New_32sceneCode.GDfinishObjects3= [];
gdjs.New_32sceneCode.GDfinish_95textObjects1= [];
gdjs.New_32sceneCode.GDfinish_95textObjects2= [];
gdjs.New_32sceneCode.GDfinish_95textObjects3= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects3= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects3= [];
gdjs.New_32sceneCode.GDbackgroundObjects1= [];
gdjs.New_32sceneCode.GDbackgroundObjects2= [];
gdjs.New_32sceneCode.GDbackgroundObjects3= [];
gdjs.New_32sceneCode.GDplatform2Objects1= [];
gdjs.New_32sceneCode.GDplatform2Objects2= [];
gdjs.New_32sceneCode.GDplatform2Objects3= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects3= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects3= [];
gdjs.New_32sceneCode.GDNewObject6Objects1= [];
gdjs.New_32sceneCode.GDNewObject6Objects2= [];
gdjs.New_32sceneCode.GDNewObject6Objects3= [];
gdjs.New_32sceneCode.GDcircleObjects1= [];
gdjs.New_32sceneCode.GDcircleObjects2= [];
gdjs.New_32sceneCode.GDcircleObjects3= [];
gdjs.New_32sceneCode.GDrotateObjects1= [];
gdjs.New_32sceneCode.GDrotateObjects2= [];
gdjs.New_32sceneCode.GDrotateObjects3= [];
gdjs.New_32sceneCode.GDbalanceObjects1= [];
gdjs.New_32sceneCode.GDbalanceObjects2= [];
gdjs.New_32sceneCode.GDbalanceObjects3= [];
gdjs.New_32sceneCode.GDNewObject7Objects1= [];
gdjs.New_32sceneCode.GDNewObject7Objects2= [];
gdjs.New_32sceneCode.GDNewObject7Objects3= [];
gdjs.New_32sceneCode.GDNewObject8Objects1= [];
gdjs.New_32sceneCode.GDNewObject8Objects2= [];
gdjs.New_32sceneCode.GDNewObject8Objects3= [];
gdjs.New_32sceneCode.GDscoreObjects1= [];
gdjs.New_32sceneCode.GDscoreObjects2= [];
gdjs.New_32sceneCode.GDscoreObjects3= [];
gdjs.New_32sceneCode.GDminionObjects1= [];
gdjs.New_32sceneCode.GDminionObjects2= [];
gdjs.New_32sceneCode.GDminionObjects3= [];
gdjs.New_32sceneCode.GDcheeseObjects1= [];
gdjs.New_32sceneCode.GDcheeseObjects2= [];
gdjs.New_32sceneCode.GDcheeseObjects3= [];
gdjs.New_32sceneCode.GDrightObjects1= [];
gdjs.New_32sceneCode.GDrightObjects2= [];
gdjs.New_32sceneCode.GDrightObjects3= [];
gdjs.New_32sceneCode.GDleftObjects1= [];
gdjs.New_32sceneCode.GDleftObjects2= [];
gdjs.New_32sceneCode.GDleftObjects3= [];
gdjs.New_32sceneCode.GDNewObject9Objects1= [];
gdjs.New_32sceneCode.GDNewObject9Objects2= [];
gdjs.New_32sceneCode.GDNewObject9Objects3= [];
gdjs.New_32sceneCode.GDhitboxObjects1= [];
gdjs.New_32sceneCode.GDhitboxObjects2= [];
gdjs.New_32sceneCode.GDhitboxObjects3= [];
gdjs.New_32sceneCode.GDBossObjects1= [];
gdjs.New_32sceneCode.GDBossObjects2= [];
gdjs.New_32sceneCode.GDBossObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition4IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition4IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDplayerObjects2.createFrom(gdjs.New_32sceneCode.GDplayerObjects1);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects2[k] = gdjs.New_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects2[i].setAnimationName("walking");
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("idle");
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.New_32sceneCode.GDfinishObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects = Hashtable.newFrom({"minion": gdjs.New_32sceneCode.GDminionObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcheeseObjects1Objects = Hashtable.newFrom({"cheese": gdjs.New_32sceneCode.GDcheeseObjects1});gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects = Hashtable.newFrom({"minion": gdjs.New_32sceneCode.GDminionObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.New_32sceneCode.GDrightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects = Hashtable.newFrom({"minion": gdjs.New_32sceneCode.GDminionObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.New_32sceneCode.GDleftObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects = Hashtable.newFrom({"minion": gdjs.New_32sceneCode.GDminionObjects1});gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDplayerObjects1[i].getVariables().get("attack")) == 1 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimation(4);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDhitboxObjects1Objects = Hashtable.newFrom({"hitbox": gdjs.New_32sceneCode.GDhitboxObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects = Hashtable.newFrom({"minion": gdjs.New_32sceneCode.GDminionObjects1});gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDminionObjects2.createFrom(gdjs.New_32sceneCode.GDminionObjects1);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDminionObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDminionObjects2[i].getAnimationFrame() == 1 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDminionObjects2[k] = gdjs.New_32sceneCode.GDminionObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDminionObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


{

/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDminionObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDminionObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDminionObjects1[k] = gdjs.New_32sceneCode.GDminionObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDminionObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.New_32sceneCode.GDBossObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.New_32sceneCode.GDrightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.New_32sceneCode.GDBossObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.New_32sceneCode.GDleftObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.New_32sceneCode.GDBossObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].returnVariable(gdjs.New_32sceneCode.GDplayerObjects1[i].getVariables().get("direction")).setString("left");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].returnVariable(gdjs.New_32sceneCode.GDplayerObjects1[i].getVariables().get("direction")).setString("right");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("jumping");
}
}}

}


{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("landing");
}
}}

}


{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDfinishObjects1.createFrom(runtimeScene.getObjects("finish"));
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDfinishObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDfinish_95textObjects1.createFrom(runtimeScene.getObjects("finish_text"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDfinish_95textObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfinish_95textObjects1[i].setLayer("");
}
}{gdjs.evtTools.window.openURL("http://google.com", runtimeScene);
}}

}


{


{
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDplayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDplayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].setAnimationName("moving");
}
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.movesTowardTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, 0, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{}}

}


{

gdjs.New_32sceneCode.GDcheeseObjects1.createFrom(runtimeScene.getObjects("cheese"));
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcheeseObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDcheeseObjects1 */
gdjs.New_32sceneCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDcheeseObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDcheeseObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("score").add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDscoreObjects1[i].setString("score:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.New_32sceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDleftObjects1[i].hide();
}
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));
gdjs.New_32sceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].returnVariable(gdjs.New_32sceneCode.GDminionObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.New_32sceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].returnVariable(gdjs.New_32sceneCode.GDminionObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDminionObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDminionObjects1[i].getVariableString(gdjs.New_32sceneCode.GDminionObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDminionObjects1[k] = gdjs.New_32sceneCode.GDminionObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDminionObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].flipX(false);
}
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDminionObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDminionObjects1[i].getVariableString(gdjs.New_32sceneCode.GDminionObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDminionObjects1[k] = gdjs.New_32sceneCode.GDminionObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDminionObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].flipX(true);
}
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
gdjs.New_32sceneCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDscoreObjects1[i].setString("score:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}{runtimeScene.getGame().getVariables().get("score").add(50);
}}

}


{



}


{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDplayerObjects1[i].getAnimation() == 1) ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val;
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].returnVariable(gdjs.New_32sceneCode.GDplayerObjects1[i].getVariables().get("attack")).setNumber(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.New_32sceneCode.GDplayerObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDplayerObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.New_32sceneCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects2[i].getAnimation() == 2 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDplayerObjects2[k] = gdjs.New_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDplayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDplayerObjects1_1final.push(gdjs.New_32sceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects2[i].getAnimation() == 3 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDplayerObjects2[k] = gdjs.New_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDplayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDplayerObjects1_1final.push(gdjs.New_32sceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects2[i].getAnimation() == 4 ) {
        gdjs.New_32sceneCode.condition2IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDplayerObjects2[k] = gdjs.New_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects2.length = k;if( gdjs.New_32sceneCode.condition2IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDplayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDplayerObjects1_1final.push(gdjs.New_32sceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(gdjs.New_32sceneCode.GDplayerObjects1_1final);
}
}
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].returnVariable(gdjs.New_32sceneCode.GDplayerObjects1[i].getVariables().get("attack")).setNumber(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(170);
}
}}

}


{

gdjs.New_32sceneCode.GDhitboxObjects1.createFrom(runtimeScene.getObjects("hitbox"));
gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));
gdjs.New_32sceneCode.GDplayerObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
gdjs.New_32sceneCode.condition3IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDhitboxObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDminionObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.GDplayerObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
{
gdjs.New_32sceneCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects2[i].getAnimation() == 7 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDplayerObjects2[k] = gdjs.New_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDplayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDplayerObjects1_1final.push(gdjs.New_32sceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(gdjs.New_32sceneCode.GDplayerObjects1_1final);
}
}
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDminionObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDminionObjects1[i].getAnimation() == 1) ) {
        gdjs.New_32sceneCode.condition2IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDminionObjects1[k] = gdjs.New_32sceneCode.GDminionObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDminionObjects1.length = k;}if ( gdjs.New_32sceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getAnimationFrame() == 4 ) {
        gdjs.New_32sceneCode.condition3IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}}
}
}
if (gdjs.New_32sceneCode.condition3IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDhitboxObjects1 */
/* Reuse gdjs.New_32sceneCode.GDminionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDhitboxObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDhitboxObjects1[i].hide();
}
}}

}


{

gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDminionObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDminionObjects1[i].getAnimation() == 1 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDminionObjects1[k] = gdjs.New_32sceneCode.GDminionObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDminionObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.New_32sceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBossObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBossObjects1[i].returnVariable(gdjs.New_32sceneCode.GDBossObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.New_32sceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.New_32sceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBossObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBossObjects1[i].returnVariable(gdjs.New_32sceneCode.GDBossObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.New_32sceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDBossObjects1[i].getVariableString(gdjs.New_32sceneCode.GDBossObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDBossObjects1[k] = gdjs.New_32sceneCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBossObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBossObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBossObjects1[i].flipX(false);
}
}}

}


{

gdjs.New_32sceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDBossObjects1[i].getVariableString(gdjs.New_32sceneCode.GDBossObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDBossObjects1[k] = gdjs.New_32sceneCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBossObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBossObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBossObjects1[i].flipX(true);
}
}}

}


{

gdjs.New_32sceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDminionObjects1.createFrom(runtimeScene.getObjects("minion"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDminionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDminionObjects1[i].setAnimationName("moving");
}
}}

}


{

gdjs.New_32sceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.movesTowardTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBossObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, 0, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBossObjects1 */
{}}

}


{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDplatformObjects1.length = 0;
gdjs.New_32sceneCode.GDplatformObjects2.length = 0;
gdjs.New_32sceneCode.GDplatformObjects3.length = 0;
gdjs.New_32sceneCode.GDplayerObjects1.length = 0;
gdjs.New_32sceneCode.GDplayerObjects2.length = 0;
gdjs.New_32sceneCode.GDplayerObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDstart_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDstart_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDstart_95textObjects3.length = 0;
gdjs.New_32sceneCode.GDfinishObjects1.length = 0;
gdjs.New_32sceneCode.GDfinishObjects2.length = 0;
gdjs.New_32sceneCode.GDfinishObjects3.length = 0;
gdjs.New_32sceneCode.GDfinish_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDfinish_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDfinish_95textObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects3.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDplatform2Objects1.length = 0;
gdjs.New_32sceneCode.GDplatform2Objects2.length = 0;
gdjs.New_32sceneCode.GDplatform2Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects3.length = 0;
gdjs.New_32sceneCode.GDcircleObjects1.length = 0;
gdjs.New_32sceneCode.GDcircleObjects2.length = 0;
gdjs.New_32sceneCode.GDcircleObjects3.length = 0;
gdjs.New_32sceneCode.GDrotateObjects1.length = 0;
gdjs.New_32sceneCode.GDrotateObjects2.length = 0;
gdjs.New_32sceneCode.GDrotateObjects3.length = 0;
gdjs.New_32sceneCode.GDbalanceObjects1.length = 0;
gdjs.New_32sceneCode.GDbalanceObjects2.length = 0;
gdjs.New_32sceneCode.GDbalanceObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects3.length = 0;
gdjs.New_32sceneCode.GDscoreObjects1.length = 0;
gdjs.New_32sceneCode.GDscoreObjects2.length = 0;
gdjs.New_32sceneCode.GDscoreObjects3.length = 0;
gdjs.New_32sceneCode.GDminionObjects1.length = 0;
gdjs.New_32sceneCode.GDminionObjects2.length = 0;
gdjs.New_32sceneCode.GDminionObjects3.length = 0;
gdjs.New_32sceneCode.GDcheeseObjects1.length = 0;
gdjs.New_32sceneCode.GDcheeseObjects2.length = 0;
gdjs.New_32sceneCode.GDcheeseObjects3.length = 0;
gdjs.New_32sceneCode.GDrightObjects1.length = 0;
gdjs.New_32sceneCode.GDrightObjects2.length = 0;
gdjs.New_32sceneCode.GDrightObjects3.length = 0;
gdjs.New_32sceneCode.GDleftObjects1.length = 0;
gdjs.New_32sceneCode.GDleftObjects2.length = 0;
gdjs.New_32sceneCode.GDleftObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects3.length = 0;
gdjs.New_32sceneCode.GDhitboxObjects1.length = 0;
gdjs.New_32sceneCode.GDhitboxObjects2.length = 0;
gdjs.New_32sceneCode.GDhitboxObjects3.length = 0;
gdjs.New_32sceneCode.GDBossObjects1.length = 0;
gdjs.New_32sceneCode.GDBossObjects2.length = 0;
gdjs.New_32sceneCode.GDBossObjects3.length = 0;

gdjs.New_32sceneCode.eventsList4(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
