
globalBoard = ""
globalMyPos = []
globalMyPos[0] = 0
globalMyPos[1] = 0

gGoalPos = []
gGoalPos[0] = 14
gGoalPos[1] = 0

godmode = false

p1Texture = "me"
goalTexture = "me"

createDisplayText = () ->
	tmp = "
	ButImustexpla*ntoyouhowallthismistakenideaofdenouncingpleasu" + "\n" + "
	reandpraisingpainwasbornandIwillgiveyouacompleteaccountofthe" + "\n" + "
	system,andexpoundtheactualteachingsofthegreatexplorerofthetr" + "\n" + "
	uth,themasterbuilderofhumanhappiness.Noonerejects,dislikes,o" + "\n" + "
	ravoidspleasureitself,becauseitispleasure,butbecausethosewho" + "\n" + "
	donotknowhowtopursuepleasurerationallyencounterconsequencest" + "\n" + "
	hatareextremelypainful.Noragainisthereanyonewholovesorpursue" + "\n" + "
	sordesirestoobtainpainofitself,becauseitispain,butbecauseocc" + "\n" + "
	asionallycircumstancesoccurinwhichtoilandpaincanprocurehimso" + "\n" + "
	megreatpleasure.Totakeatrivialexample,whichofuseverundertake" + "\n" + "
	slaboriousphysicalexercise,excepttoobtainsomeadvantagefromit" + "\n" + "
	Butwhohasanyrighttofindfaultwithamanwhochoosestoenjoyapleasu" + "\n" + "
	rethathasnoannoyingconsequences,oronewhoavoidsapainthatprodu" + "\n" + "
	cesnoresultantplea.pleasurerationally.encounterconsequencest" 
	tmp.toUpperCase()

createDisplayText = () ->
	tmp = "
	ButImustexpla*ntoyouhowallthismistakenideaofdenouncingpleasu" + "\n" + "
	reandpraisingpainwasbornandIwillgiveyouacompleteaccountofthe" + "\n" + "
	system,andexpoundtheactualteachingsofthegreatexplorerofthetr" + "\n" + "
	uth,themasterbuilderofhumanhappiness.Noonerejects,dislikes,o" + "\n" + "
	ravoidspleasureitself,becauseitispleasure,butbecausethosewho" + "\n" + "
	donotknowhowtopursuepleasurerationallyencounterconsequencest" + "\n" + "
	hatareextremelypainful.Noragainisthereanyonewholovesorpursue" + "\n" + "
	sordesirestoobtainpainofitself,becauseitispain,butbecauseocc" + "\n" + "
	asionallycircumstancesoccurinwhichtoilandpaincanprocurehimso" + "\n" + "
	megreatpleasure.Totakeatrivialexample,whichofuseverundertake" + "\n" + "
	slaboriousphysicalexercise,excepttoobtainsomeadvantagefromit" + "\n" + "
	Butwhohasanyrighttofindfaultwithamanwhochoosestoenjoyapleasu" + "\n" + "
	rethathasnoannoyingconsequences,oronewhoavoidsapainthatprodu" + "\n" + "
	cesnoresultantplea.pleasurerationally.encounterconsequencest" 
	tmp.toUpperCase()

createWinPicture = () ->
	tmp = "
	____________________________________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	__Congratulations___________________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	__You Won!__________________________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	__Thank you for playing,____________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	____________________________________________________________" + "\n" + "
	__________________________________________nils@thunki.com___" + "\n" + "
	____________________________________________________________" 
	tmp

createLosePicture = () ->
	tmp = "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + "\n" + "
	XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" 
	tmp

makeWinState = () ->
	globalBoard = createWinPicture()
	p1Texture = "ME"
	goalTexture = "__"
	gGoalPos[0] = 0
	gGoalPos[1] = 0
	setMyPos(globalMyPos[0], globalMyPos[1])
	

makeLoseState = () ->
	globalBoard = createLosePicture()
	p1Texture = "XX"
	goalTexture = "XX"
	drawBoard(globalBoard,389)

checkWin = () ->
	test1x = globalMyPos[0]
	test2x = gGoalPos[0]
	test1y = globalMyPos[1]
	test2y = gGoalPos[1]
	#alert "To be tested: " + test1 + " " + test2
	if test1x is test2x and test1y is test2y
		makeWinState()
	

setMyPos = (x, y) ->
	globalMyPos[0] = x
	globalMyPos[1] = y
	tmpString = "<p id=\"currentPos\">Current position: " + x + ", " + y + "</p>"
	$('#currentPos').replaceWith(tmpString)	
	checkWin()
	
	newPos = x + y*62
	drawBoard(globalBoard,newPos)
	

drawBoard = (gbStr, strPos) ->	
	#Insert player
	leftStr = gbStr[0..strPos--]
	rightStr = gbStr[strPos+4..gbStr.length]
	newBoard = leftStr + 
	p1Texture + rightStr 

	#Insert goal
	leftStr = newBoard[0..gGoalPos[0]]
	rightStr = newBoard[gGoalPos[0]+3..newBoard.length]
	newBoard = "<div id=\"gamediv\">" + leftStr + 
	goalTexture + rightStr + "</div>"

	$('#gamediv').replaceWith(newBoard)

$(document).ready ->
	globalBoard = createDisplayText()
	setMyPos(globalMyPos[0],globalMyPos[1])	

	#$('#gamediv').append(drawBoard(globalBoard, 5))	
	#alert globalMyPos[0]
	


#up-right-down-left -> 38, 39, 40, 37
document.onkeydown = (event)->
	switch event.keyCode
		when 37			
			$('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Left</p>")
			globalMyPos[0]--
			setMyPos(globalMyPos[0], globalMyPos[1])
			makeMonster()
			checkMonster()
		when 38
			$('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Up</p>")
			globalMyPos[1]--
			setMyPos(globalMyPos[0], globalMyPos[1])
			makeMonster()
			checkMonster()
		when 39
			$('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Right</p>")
			globalMyPos[0]++
			setMyPos(globalMyPos[0], globalMyPos[1])
			makeMonster()
			checkMonster()
		when 40
			$('#keydebug').replaceWith("<p id=\"keydebug\">Key pressed: Down</p>")
			globalMyPos[1]++
			setMyPos(globalMyPos[0], globalMyPos[1])
			makeMonster()
			checkMonster()

makeMonster = () ->
	#Randomly place monster on map
	monsterLoc = Math.floor(Math.random() * 780)
	#alert monsterLoc
	leftStr = globalBoard[0..monsterLoc-1]
	rightStr = globalBoard[monsterLoc+1..globalBoard.length-1]
	globalBoard = leftStr + 
	"*" + rightStr 


checkMonster =() ->
	#check if you made contact with a monster
	#what's underneath player?
	
	meLoc = globalMyPos[0] + globalMyPos[1]*62
	underLeftFoot = globalBoard[meLoc+1..meLoc+1]
	underRightFoot = globalBoard[meLoc+2..meLoc+2]	

	monster = "*"
	if underLeftFoot is monster or underRightFoot is monster
		if not godmode
			makeLoseState()
