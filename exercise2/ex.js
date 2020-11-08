var num=1;

function prev()
{
  var theImgTag = document.getElementById("myImgId");

  if (num==5)
  {
    num--;
    theImgTag.src = '4.png';
  }
  else if (num==1)
  {
    num=5;
    theImgTag.src = '5.png';
  }
    else if (num==2)
    {
      num--;
      theImgTag.src = '1.jpg';
    }
      else if (num==3)
      {
        num--;
        theImgTag.src = '2.png';
      }
        else if (num==4)
        {
          num--;
          theImgTag.src = '3.jpg';
        }
}



function next()
{
  var theImgTag = document.getElementById("myImgId");

  if (num==5)
  {
    num=1;
    theImgTag.src = '1.jpg';
  }
  else if (num==1)
  {
    num++;
    theImgTag.src = '2.png';
  }
    else if (num==2)
    {
      num++;
      theImgTag.src = '3.jpg';
    }
      else if (num==3)
      {
        num++;
        theImgTag.src = '4.png';
      }
        else if (num==4)
        {
          num++;
          theImgTag.src = '5.png';
        }
}


/**
function zoomIn()
{
var theImgTag = document.getElementById("myImgId"); theImgTag.width = 1000;
theImgTag.height = 2000;
}
**/
