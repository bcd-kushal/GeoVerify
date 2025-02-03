<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="design.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        .submitForm1 input[type="button"]:hover{
            background-color: rgb(211, 201, 65);
        }
    </style>
<script> 
$(document).ready(function(){
  $('.submitForm1').click(function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
    setTimeout(function(){
        window.location.href="index.html";
    },1000);
  });
});
</script> 
</head>
<body onload="scroll_headers()">

    <!-- header page -->
        <div class="header" id="side_L" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>
        <div class="header" id="side_R" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>
        <div class="header" id="side_L1" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>
        <div class="header" id="side_R1" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>






    <!-- main content -->
    <div class="main_body">
        <section>
        <div class="submitForm1" style="z-index: 1000;position: absolute;bottom: 3vh;left: 50%;width:30vw;height:8vh;font-size:2vh; transform:translateX(-50%);" >
                <input type="button" value="Back">
            </div>
            <div class="card" style="min-height: 70vh;">
            <div class="result" style="overflow: scroll;">

<?php
    error_reporting(E_ERROR | E_PARSE);
    $file1=fopen($_REQUEST["file6_1"],"r");
    
    $str = file_get_contents($_REQUEST["file6_1"]);
    $str = trim(preg_replace('!\s+!',' ',$str));
    $str = str_replace('\n',' ',$str);
    $str = str_replace('\r',' ',$str);
    $str = trim($str);

    function goCheck($x){

        for($i=0;$i<=strlen($x);$i++){
            if(($x[$i]>='a' && $x[$i]<='z')||($x[$i]>='A' && $x[$i]<='Z'))
                return 1;
        }
        return 0;
    }

    $new_str="";
    $substr="";
    $count=0;

    for($i=0;$i<=strlen($str)-1;$i++){

        if($str[$i]!=' ')
            $substr.=$str[$i];
        
        if($str[$i]==' ' || $str[$i]==',' || $i==strlen($str)-1){
            if(goCheck($substr)==1){
                
                $new_str.=$substr;
                if($i!=strlen($str)-1)
                    $new_str.=" , ";
                $count++;
            }
            $substr="";
        }
        
    }

    echo "<b>Original string :</b><br>".$str."<br><b>Words in string :</b><br>".$new_str."<br><b>Total words :</b><br>".$count."<br>";

                    echo "<br>The same has been copied <br>to : <b>\"".$_REQUEST["file6_2"]."\"</b>";
                    

                    file_put_contents($_REQUEST["file6_2"],$new_str);
                    file_put_contents($_REQUEST["file6_2"],"\nWords = ".$count,FILE_APPEND | LOCK_EX);

?>

                </div>
            </div>
        </section>
    </div>





    <script>
        let LSide = document.getElementById('side_L');
        let RSide = document.getElementById('side_R');
        let LSide1 = document.getElementById('side_L1');
        let RSide1 = document.getElementById('side_R1');
        window.addEventListener('scroll',function(){
            LSide1.style.left = -window.pageYOffset*1.5+'px';
            RSide1.style.left = -window.pageYOffset*1.5+'px';
            LSide.style.left = -window.pageYOffset*1.5+'px';
            RSide.style.left = window.pageYOffset*1.5+'px';
        })
        
        
        function scroll_headers(){
            var x=setTimeout(abc,100);
            function abc(){
    window.scrollTo({
        top:window.innerHeight,
        behavior:"smooth"
    })
        }
        }
         
    </script>
</body>
</html>