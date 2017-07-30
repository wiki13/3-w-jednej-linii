
var tab_helper = [];
var same =[];

function start(leng,random) {
  var tab = [];
//  var tab_1=[[3,3,3,1,2,3],[3,2,1,3,2,3],[2,3,2,3,2,2],[3,1,1,1,2,1],[1,1,1,3,1,2],[2,1,2,3,1,2]];
  for(var i =0; i<leng;i++){
    tab[i]=[];
    tab_helper[i]=[]
    var row =""
    for(var j=0; j<leng;j++){
      var val = Math.floor(Math.random() * random) +1;
      tab[i][j]=val;
      tab_helper[i][j]={val: val,same:false};
      row+=tab[i][j]+", ";
    }
    console.log(row+"\n");
  }
  console.log("\n");

  check_tab();

  for(var i =0; i<tab.length;i++){
    var row =""
    for(var j=0; j<tab[i].length;j++){
      if(tab_helper[i][j].same==true){
        tab[i][j]=0;
      }
      row+=tab[i][j]+", ";
    }
    console.log(row+"\n");
  }

}

function check_tab (){
  for(var x =0; x<tab_helper.length;x++){
    for(var y=0; y<tab_helper[x].length;y++){
      if(tab_helper[x][y].val!=0){
        check(x,y);
      }
    }
  }
}

function check(x,y){
  if(tab_helper[x][y].val!=0){
    var value = tab_helper[x][y].val;
    tab_helper[x][y].val=0;
    console.log("x="+x+" y="+y);
  //  console.log(value);
    if(x==0&&y==0){
      if(value==tab_helper[x+1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x+1][y].same=true;
        console.log("1");
        check(x+1,y);
      }
      if(value==tab_helper[x][y+1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y+1].same=true;
        console.log("2");
        check(x,y+1);
      }
    }else if(x==0&&y<tab_helper[x].length-1){
      if(value==tab_helper[x+1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x+1][y].same=true;
        console.log("3");
        check(x+1,y);
      }
      if(value==tab_helper[x][y+1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y+1].same=true;
        console.log("4");
        check(x,y+1);

      }
      if(value==tab_helper[x][y-1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y-1].same=true;
        console.log("5");
        check(x,y-1);

      }
    }else if(x==0&&y==tab_helper[x].length-1){
      if(value==tab_helper[x+1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x+1][y].same=true;
        console.log("6");
        check(x+1,y);

      }
      if(value==tab_helper[x][y-1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y-1].same=true;
        console.log("7");
        check(x,y-1);
      }
    }else if (x<tab_helper.length-1&&y==tab_helper[x].length-1) {
      if(value==tab_helper[x-1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x-1][y].same=true;
        console.log("9");
        check(x-1,y);
      }
      if(value==tab_helper[x+1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x+1][y].same=true;
        console.log("9");
        check(x+1,y);
      }
      if(value==tab_helper[x][y-1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y-1].same=true;
        console.log("10");
        check(x,y-1);
      }
    }else if(x<tab_helper.length-1&&y==0) {
      if(value==tab_helper[x+1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x+1][y].same=true;
        console.log("8");
        check(x+1,y);
      }
      if(value==tab_helper[x-1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x-1][y].same=true;
        console.log("9");
        check(x-1,y);
      }
      if(value==tab_helper[x][y+1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y+1].same=true;
        console.log("10");
        check(x,y+1);
      }
    }else if(x==tab_helper.length-1&&y==0) {
      if(value==tab_helper[x-1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x-1][y].same=true;
        console.log("11");
        check(x-1,y);
      }
      if(value==tab_helper[x][y+1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y+1].same=true;
        console.log("12");
        check(x,y+1);
      }
    }else if(x==tab_helper.length-1&&y<tab_helper[x].length-1) {
      if(value==tab_helper[x-1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x-1][y].same=true;
        console.log("13");
        check(x-1,y);
      }
      if(value==tab_helper[x][y+1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y+1].same=true;
        console.log("14");
        check(x,y+1);
      }
      if(value==tab_helper[x][y-1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y-1].same=true;
        console.log("15");
        check(x,y-1);
      }
    }else if(x==tab_helper.length-1&&y==tab_helper[x].length-1) {
      if(value==tab_helper[x-1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x-1][y].same=true;
        console.log("16");
        check(x-1,y);
      }
      if(value==tab_helper[x][y-1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y-1].same=true;
        console.log("17");
        check(x,y-1);
      }
    }else{
      if(value==tab_helper[x+1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x+1][y].same=true;
        console.log("18");
        check(x+1,y);
      }
      if(value==tab_helper[x-1][y].val){
        tab_helper[x][y].same=true;
        tab_helper[x-1][y].same=true;
        console.log("19");
        check(x-1,y);
      }
      if(value==tab_helper[x][y+1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y+1].same=true;
        console.log("20");
        check(x,y+1);
      }
      if(value==tab_helper[x][y-1].val){
        tab_helper[x][y].same=true;
        tab_helper[x][y-1].same=true;
        console.log("21");
        check(x,y-1);
      }
    }
  }
  return;
}
start(6,3);
