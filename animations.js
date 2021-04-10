
setInterval(change,7000);
var d = 1;
var stuff = true;
function doStuff(){
    snakeProject(document.getElementById('projectDiv'))
}


function showMenu(){
    if(parseFloat(window.innerWidth)<600 && stuff == true){
        // var stuff = 
        document.getElementById("bar1").className = "bars2"
        document.getElementById("bar2").className = "bars2"
        document.getElementById("bar3").className = "bars2"
        document.getElementById("bar4").className = "bars2"
        stuff = false;
    }
    else if(parseFloat(window.innerWidth)<600 && stuff == false){
        // var stuff = 
        document.getElementById("bar1").className = "bars"
        document.getElementById("bar2").className = "bars"
        document.getElementById("bar3").className = "bars"
        document.getElementById("bar4").className = "bars"
        stuff = true;
    }
}
function change(){
    // window.alert(window.innerWidth);

    if(parseFloat(window.innerWidth)>1100){
        if(document.getElementById("slide3").className == "appear slides" || document.getElementById("slide3").className == "slides"){
            document.getElementById("slide3").className = "disappear slides";
            document.getElementById("slide1").className = "appear slides";
            document.getElementById("slide2").className = "nothing slides";
    
        }else if(document.getElementById("slide2").className == "appear slides"){
            document.getElementById("slide2").className = "disappear slides";
            document.getElementById("slide3").className = "appear slides";
            document.getElementById("slide1").className = "nothing slides";
    
        }else if(document.getElementById("slide1").className == "appear slides"){
            document.getElementById("slide1").className = "disappear slides";
            document.getElementById("slide2").className = "appear slides";
            document.getElementById("slide3").className = "nothing slides";
    
        }
    }
    
}

function showProject(x){
    var div = document.getElementById("projectDiv");

    while (div.hasChildNodes()) {  
        div.removeChild(div.firstChild);
    }
    if(x=="sudoku"){
        this.sudokuProject(div);
    }
    if(x=="snake"){
        this.snakeProject(div);
        
    }
    
    if(x=="java"){
        this.javaProject(div);
    }
}



function Up(x){
    console.log(document.getElementById(x+"1").className);
    if(document.getElementById(x+"3").className == "fadeIn "+"Slide" || document.getElementById(x+"3").className == "Slide"){
        document.getElementById(x+"3").className = "fadeOut "+"Slide";
        document.getElementById(x+"1").className = "fadeIn "+"Slide";
        document.getElementById(x+"2").className = "fadeOut "+"Slide";

    }else if(document.getElementById(x+"2").className == "fadeIn "+"Slide"){
        document.getElementById(x+"2").className = "fadeOut "+"Slide";
        document.getElementById(x+"3").className = "fadeIn "+"Slide";
    }else if(document.getElementById(x+"1").className == "fadeIn "+"Slide"){
        document.getElementById(x+"1").className = "fadeOut "+"Slide";
        document.getElementById(x+"2").className = "fadeIn "+"Slide";
    }
}
function Down(x){
    console.log(document.getElementById(x+"1").className);
    if(document.getElementById(x+"3").className == "fadeIn "+"Slide" || document.getElementById(x+"3").className == "Slide"){
        document.getElementById(x+"3").className = "fadeOut "+"Slide";
        document.getElementById(x+"2").className = "fadeIn "+"Slide";
        document.getElementById(x+"1").className = "fadeOut "+"Slide";

    }else if(document.getElementById(x+"2").className == "fadeIn "+"Slide"){
        document.getElementById(x+"2").className = "fadeOut "+"Slide";
        document.getElementById(x+"1").className = "fadeIn "+"Slide";
    }else if(document.getElementById(x+"1").className == "fadeIn "+"Slide"){
        document.getElementById(x+"1").className = "fadeOut "+"Slide";
        document.getElementById(x+"3").className = "fadeIn "+"Slide";
    }
}



function javaProject(div){
    document.getElementById("javaButton").style.backgroundColor = "rgb(220,220,220)";
        document.getElementById("snakeButton").style.backgroundColor = "rgb(103, 169, 172)";
        document.getElementById("sudokuButton").style.backgroundColor = "rgb(103, 169, 172)";

        var header = document.createElement("h1");
        header.style.textAlign="center";
        header.innerHTML = "Running Java"
        div.appendChild(header);

        var text = document.createElement("ul");
        var list1 = document.createElement("li");
        var list2 = document.createElement("li");
        var list3 = document.createElement("li");
        var list4 = document.createElement("li");
        var list5 = document.createElement("li");
        list1.innerHTML = "Download the selected project";
        list2.innerHTML = "Unzip the zipped folder (by opening or by right clicking)";
        list3.innerHTML = "Open up Terminal (MacOS) or the Command Prompt (Windows)";
        list4.innerHTML = "Navigate to the position of the downloaded folder (ex. cd Downloads, cd SudokuSolver)";
        list5.innerHTML = "Type java Runner, then press enter";
        list1.className = "listProject";
        list2.className = "listProject";
        list3.className = "listProject";
        list4.className = "listProject";
        list5.className = "listProject";
        text.appendChild(list1);
        text.appendChild(list2);
        text.appendChild(list3);
        text.appendChild(list4);
        text.appendChild(list5);
        div.appendChild(text)

        var helper = document.createElement("p");
        helper.innerHTML = "Need Help? "
        var link = document.createElement("a");
        link.href = "#contact";
        link.innerHTML = "Contact Me";
        link.style.color = "rgb(30,130,180)";
        link.style.textDecoration = "none";
        helper.appendChild(link);
        helper.style.textAlign = "center";
        helper.style.fontSize = 25+"px";
        div.appendChild(helper);
}

function sudokuProject(div){
    document.getElementById("sudokuButton").style.backgroundColor = "rgb(220,220,220)";
        document.getElementById("snakeButton").style.backgroundColor = "rgb(103, 169, 172)";
        document.getElementById("javaButton").style.backgroundColor = "rgb(103, 169, 172)";

        
        var img1 = document.createElement("img");
        img1.src = "Images/sudoku1.png";
        img1.className = "sudokuImg";
        var img2 = document.createElement("img");
        img2.src = "Images/sudoku2.png";
        img2.className = "sudokuImg";

        var header = document.createElement("h1");
        header.innerHTML = "Sudoku Solver";
        header.style.textAlign = "center";

        var list = document.createElement("ul");
        list.style.clear = "left";
        var item1 = document.createElement("li");
        item1.className = "listProject";
        item1.innerHTML = "Uses java arrays and logic to find the solution to a sudoku";
        var item2 = document.createElement("li");
        item2.className = "listProject";
        item2.innerHTML = "See the README.TXT file for a more indepth explanation";
        item2.style.marginBottom = 5+"%";
        div.appendChild(header);
        div.appendChild(img1);
        div.appendChild(img2);
        div.appendChild(document.createElement("br"));
        list.appendChild(item1);
        list.appendChild(item2);
        div.appendChild(list);

        var button = document.createElement("a");
        button.href = "Projects/Sudoku.zip";
        button.innerHTML = "Get Code Here";
        button.className = "project2Button";
        button.style.marginLeft = 35+"%";

        div.appendChild(button);
        var x = document.createElement("div");
        x.style.marginTop = 5+"%";

        div.appendChild(x);
}
function snakeProject(div){
    document.getElementById("snakeButton").style.backgroundColor = "rgb(220,220,220)";
        document.getElementById("sudokuButton").style.backgroundColor = "rgb(103, 169, 172)";
        document.getElementById("javaButton").style.backgroundColor = "rgb(103, 169, 172)";
        var header = document.createElement("h1");
        header.innerHTML = "Snake (against AIs)"
        header.style.textAlign = "center";

        var img = document.createElement("img");
        img.src = "Images/snake.png"
        style = img.style;
        style.width = 50+"%";
        style.marginLeft = 25+"%";

        var list = document.createElement("ul");
        var item1 = document.createElement("li");
        item1.className = "listProject";
        item1.innerHTML = "One playable snake vs. AIs";
        var item2 = document.createElement("li");
        item2.className = "listProject";
        item2.innerHTML = "AIs use ArrayLists in order to predict position and avoid death";
        var item3 = document.createElement("li");
        item3.className = "listProject";
        item3.innerHTML = "See the README.TXT file for a more indepth explanation";
        item3.style.marginBottom = 5+"%";
        list.appendChild(item1);
        list.appendChild(item2);
        list.appendChild(item3);

        div.appendChild(header);
        div.appendChild(img);
        div.appendChild(list);

        var button = document.createElement("a");
        button.href = "Projects/Snake.zip";
        button.innerHTML = "Get Code Here";
        button.className = "project2Button";
        button.style.marginLeft = 35+"%";

        div.appendChild(button);
        var x = document.createElement("div");
        x.style.marginTop = 5+"%";

        div.appendChild(x);
}