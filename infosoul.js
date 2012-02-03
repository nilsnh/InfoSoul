(function() {
  var checkMonster, checkWin, createDisplayText, createLosePicture, createStartText, createWinPicture, dead, drawBoard, gGoalPos, globalBoard, globalMyPos, goalTexture, godmode, init, makeLoseState, makeMonster, makeWinState, p1Texture, setMyPos, started;

  globalBoard = "";

  globalMyPos = [];

  globalMyPos[0] = 15;

  globalMyPos[1] = 5;

  gGoalPos = [];

  gGoalPos[0] = 0;

  gGoalPos[1] = 0;

  godmode = false;

  started = false;

  dead = false;

  p1Texture = "me";

  goalTexture = "me";

  createDisplayText = function() {
    var tmp;
    tmp = "	ButImustexplaintoyouhowallthismistakenideaofdenouncingpleasu" + "\n" + "	reandpraisingpainwasbornandIwillgiveyouacompleteaccountofthe" + "\n" + "	system,andexpoundtheactualteachingsofthegreatexplorerofthetr" + "\n" + "	uth,themasterbuilderofhumanhappiness.Noonerejects,dislikes,o" + "\n" + "	ravoidspleasureitself,becauseitispleasure,butbecausethosewho" + "\n" + "	donotknowhowtopursuepleasurerationallyencounterconsequencest" + "\n" + "	hatareextremelypainful.Noragainisthereanyonewholovesorpursue" + "\n" + "	sordesirestoobtainpainofitself,becauseitispain,butbecauseocc" + "\n" + "	asionallycircumstancesoccurinwhichtoilandpaincanprocurehimso" + "\n" + "	megreatpleasure.Totakeatrivialexample,whichofuseverundertake" + "\n" + "	slaboriousphysicalexercise,excepttoobtainsomeadvantagefromit" + "\n" + "	Butwhohasanyrighttofindfaultwithamanwhochoosestoenjoyapleasu" + "\n" + "	rethathasnoannoyingconsequences,oronewhoavoidsapainthatprodu" + "\n" + "	cesnoresultantplea.pleasurerationally.encounterconsequencest";
    return tmp.toUpperCase();
  };

  createStartText = function() {
    var tmp;
    tmp = "	ButImustexplaintoyouhowallthismistakenideaofdenouncingpleasu" + "\n" + "	reandpraisingpainwasbornandIwillgiveyouacompleteaccountofthe" + "\n" + "	syst________________________achingsofthegreatexplorerofthetr" + "\n" + "	uth,__use the arrowkeys_____appiness.Noonerejects,dislikes,o" + "\n" + "	ravo________________________eitispleasure,butbecausethosewho" + "\n" + "	dono__find yourself_________rationallyencounterconsequencest" + "\n" + "	hata________________________ainisthereanyonewholovesorpursue" + "\n" + "	sord__press 1 to start______lf,becauseitispain,butbecauseocc" + "\n" + "	asio________________________nwhichtoilandpaincanprocurehimso" + "\n" + "	megreatpleasure.Totakeatrivialexample,whichofuseverundertake" + "\n" + "	slaboriousphysicalexercise,excepttoobtainsomeadvantagefromit" + "\n" + "	Butwhohasanyrighttofindfaultwithamanwhochoosestoenjoyapleasu" + "\n" + "	rethathasnoannoyingconsequences,oronewhoavoidsapainthatprodu" + "\n" + "	cesnoresultantplea.pleasurerationally.encounterconsequencest";
    return tmp.toLowerCase();
  };

  createWinPicture = function() {
    var tmp;
    tmp = "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__Congratulations___________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__You Won!__________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__Thank you for playing,____________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	____________________________________________________________" + "\n" + "	__________________________________________nils@thunki.com___" + "\n" + "	____________________________________________________________";
    return tmp;
  };

  createLosePicture = function() {
    var tmp;
    tmp = "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXX________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXX__Lost in interwebs x_X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXX________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXX__Press 1 to restart____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXX________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    return tmp;
  };

  makeWinState = function() {
    globalBoard = createWinPicture();
    godmode = true;
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
    dead = true;
    started = false;
    return drawBoard(globalBoard, 440);
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

  drawBoard = function(InpGbBoard, strPos) {
    var leftStr, newBoard, newGoalPos, rightStr, tmpString;
    leftStr = InpGbBoard.slice(0, strPos-- + 1 || 9e9);
    rightStr = InpGbBoard.slice(strPos + 4, InpGbBoard.length + 1 || 9e9);
    newBoard = leftStr + p1Texture + rightStr;
    newGoalPos = gGoalPos[0] + gGoalPos[1] * 62;
    leftStr = newBoard.slice(0, newGoalPos-- + 1 || 9e9);
    rightStr = newBoard.slice(newGoalPos + 4, newBoard.length + 1 || 9e9);
    newBoard = "<div id=\"gamediv\">" + leftStr + goalTexture + rightStr + "</div>";
    $('#gamediv').replaceWith(newBoard);
    tmpString = "<p id=\"winPos\">Where to I need to get to: " + gGoalPos[0] + ", " + gGoalPos[1] + "</p>";
    return $('#winPos').replaceWith(tmpString);
  };

  init = function() {
    var newBoard;
    globalBoard = createStartText();
    godmode = false;
    p1Texture = "me";
    goalTexture = "me";
    newBoard = "<div id=\"gamediv\">" + globalBoard + "</div>";
    return $('#gamediv').replaceWith(newBoard);
  };

  $(document).ready(function() {
    return init();
  });

  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Left</p>");
        if (started) {
          globalMyPos[0]--;
          setMyPos(globalMyPos[0], globalMyPos[1]);
          makeMonster();
          return checkMonster();
        }
        break;
      case 38:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Up</p>");
        if (started) {
          globalMyPos[1]--;
          setMyPos(globalMyPos[0], globalMyPos[1]);
          makeMonster();
          return checkMonster();
        }
        break;
      case 39:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Right</p>");
        if (started) {
          globalMyPos[0]++;
          setMyPos(globalMyPos[0], globalMyPos[1]);
          makeMonster();
          return checkMonster();
        }
        break;
      case 40:
        $('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Down</p>");
        if (started) {
          globalMyPos[1]++;
          setMyPos(globalMyPos[0], globalMyPos[1]);
          makeMonster();
          return checkMonster();
        }
        break;
      case 49:
        if (dead) {
          init();
          dead = false;
          started = false;
        }
        if (!started) {
          started = true;
          globalBoard = createDisplayText();
          gGoalPos[0] = Math.floor(Math.random() * 50);
          gGoalPos[1] = Math.floor(Math.random() * 11);
          return setMyPos(globalMyPos[0], globalMyPos[1]);
        }
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
      if (!godmode) {
        started = false;
        return makeLoseState();
      }
    }
  };

}).call(this);
