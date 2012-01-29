(function() {
  var checkMonster, checkWin, createDisplayText, createLosePicture, createWinPicture, drawBoard, gGoalPos, globalBoard, globalMyPos, goalTexture, godmode, makeLoseState, makeMonster, makeWinState, p1Texture, setMyPos;

  globalBoard = "";

  globalMyPos = [];

  globalMyPos[0] = 0;

  globalMyPos[1] = 0;

  gGoalPos = [];

  gGoalPos[0] = 14;

  gGoalPos[1] = 0;

  godmode = false;

  p1Texture = "me";

  goalTexture = "me";

  createDisplayText = function() {
    var tmp;
    tmp = "	ButImustexpla*ntoyouhowallthismistakenideaofdenouncingpleasu" + "\n" + "	reandpraisingpainwasbornandIwillgiveyouacompleteaccountofthe" + "\n" + "	system,andexpoundtheactualteachingsofthegreatexplorerofthetr" + "\n" + "	uth,themasterbuilderofhumanhappiness.Noonerejects,dislikes,o" + "\n" + "	ravoidspleasureitself,becauseitispleasure,butbecausethosewho" + "\n" + "	donotknowhowtopursuepleasurerationallyencounterconsequencest" + "\n" + "	hatareextremelypainful.Noragainisthereanyonewholovesorpursue" + "\n" + "	sordesirestoobtainpainofitself,becauseitispain,butbecauseocc" + "\n" + "	asionallycircumstancesoccurinwhichtoilandpaincanprocurehimso" + "\n" + "	megreatpleasure.Totakeatrivialexample,whichofuseverundertake" + "\n" + "	slaboriousphysicalexercise,excepttoobtainsomeadvantagefromit" + "\n" + "	Butwhohasanyrighttofindfaultwithamanwhochoosestoenjoyapleasu" + "\n" + "	rethathasnoannoyingconsequences,oronewhoavoidsapainthatprodu" + "\n" + "	cesnoresultantplea.pleasurerationally.encounterconsequencest";
    return tmp.toUpperCase();
  };

  createWinPicture = function() {
    var tmp;
    tmp = "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__Congratulations___________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__You Won!__________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__Thank you for playing,____________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__________________________________________nils@thunki.com___" + "\n" + "	____________________________________________________________";
    return tmp;
  };

  createLosePicture = function() {
    var tmp;
    tmp = "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    return tmp;
  };

  makeWinState = function() {
    globalBoard = createWinPicture();
    p1Texture = "ME";
    goalTexture = "__";
    gGoalPos[0] = 0;
    gGoalPos[1] = 0;
    return setMyPos(globalMyPos[0], globalMyPos[1]);
  };

  makeLoseState = function() {
    globalBoard = createLosePicture();
    p1Texture = "XX";
    goalTexture = "XX";
    return drawBoard(globalBoard, 389);
  };

  checkWin = function() {
    var test1x, test1y, test2x, test2y;
    test1x = globalMyPos[0];
    test2x = gGoalPos[0];
    test1y = globalMyPos[1];
    test2y = gGoalPos[1];
    if (test1x === test2x && test1y === test2y) return makeWinState();
  };

  setMyPos = function(x, y) {
    var newPos, tmpString;
    globalMyPos[0] = x;
    globalMyPos[1] = y;
    tmpString = "<p id=\"currentPos\">Current position: " + x + ", " + y + "</p>";
    $('#currentPos').replaceWith(tmpString);
    checkWin();
    newPos = x + y * 62;
    return drawBoard(globalBoard, newPos);
  };

  drawBoard = function(gbStr, strPos) {
    var leftStr, newBoard, rightStr;
    leftStr = gbStr.slice(0, strPos-- + 1 || 9e9);
    rightStr = gbStr.slice(strPos + 4, gbStr.length + 1 || 9e9);
    newBoard = leftStr + p1Texture + rightStr;
    leftStr = newBoard.slice(0, gGoalPos[0] + 1 || 9e9);
    rightStr = newBoard.slice(gGoalPos[0] + 3, newBoard.length + 1 || 9e9);
    newBoard = "<div id=\"gamediv\">" + leftStr + goalTexture + rightStr + "</div>";
    return $('#gamediv').replaceWith(newBoard);
  };

  $(document).ready(function() {
    globalBoard = createDisplayText();
    return setMyPos(globalMyPos[0], globalMyPos[1]);
  });

  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Left</p>");
        globalMyPos[0]--;
        setMyPos(globalMyPos[0], globalMyPos[1]);
        makeMonster();
        return checkMonster();
      case 38:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Up</p>");
        globalMyPos[1]--;
        setMyPos(globalMyPos[0], globalMyPos[1]);
        makeMonster();
        return checkMonster();
      case 39:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Right</p>");
        globalMyPos[0]++;
        setMyPos(globalMyPos[0], globalMyPos[1]);
        makeMonster();
        return checkMonster();
      case 40:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Down</p>");
        globalMyPos[1]++;
        setMyPos(globalMyPos[0], globalMyPos[1]);
        makeMonster();
        return checkMonster();
    }
  };

  makeMonster = function() {
    var leftStr, monsterLoc, rightStr;
    monsterLoc = Math.floor(Math.random() * 780);
    leftStr = globalBoard.slice(0, (monsterLoc - 1) + 1 || 9e9);
    rightStr = globalBoard.slice(monsterLoc + 1, (globalBoard.length - 1) + 1 || 9e9);
    return globalBoard = leftStr + "*" + rightStr;
  };

  checkMonster = function() {
    var meLoc, monster, underLeftFoot, underRightFoot;
    meLoc = globalMyPos[0] + globalMyPos[1] * 62;
    underLeftFoot = globalBoard.slice(meLoc + 1, (meLoc + 1) + 1 || 9e9);
    underRightFoot = globalBoard.slice(meLoc + 2, (meLoc + 2) + 1 || 9e9);
    monster = "*";
    if (underLeftFoot === monster || underRightFoot === monster) {
      if (!godmode) return makeLoseState();
    }
  };

}).call(this);
