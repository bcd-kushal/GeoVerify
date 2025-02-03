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
        window.location.href="index_3b.html";
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

                    $file1=fopen($_REQUEST["file13_1"],"r");
                    $len = filesize($_REQUEST["file13_1"]);


                    $str = file_get_contents($_REQUEST["file13_1"]);
                    $str = trim(preg_replace('!\s+!',' ',$str));
                    $str = trim($str);
                    $bin_str = "";

                    for($i=0;$i<=strlen($str)-1;$i++){

                        $bin = decbin(ord($str[$i]));
                        $bin_str.=$bin;
                    }
                    
                    $dna = "";
                    for($i=0;$i<=strlen($bin_str)-1;$i+=2){

                        if(strcmp($bin_str[$i],'0')==0)
                            if(strcmp($bin_str[$i+1],'0')==0)   $dna.='A';
                            else    $dna.='T';
                        else
                            if(strcmp($bin_str[$i+1],'1')==0)   $dna.='G';
                            else    $dna.='C';
                    }
                    if(strlen($bin_str)%2==1)
                        $dna.=$bin_str[strlen($bin_str)-1];

                    echo "<b>Original string :</b><br>".$str."<br><b>Binary converted :</b><br>".$bin_str."<br><b>DNA sequence :</b><br>".$dna."<br>";

                    echo "<br>The same has been copied <br>to : <b>\"".$_REQUEST["file13_2"]."\"</b>";
                    

                    file_put_contents($_REQUEST["file13_2"],file_get_contents($_REQUEST["file13_1"]));
                    file_put_contents($_REQUEST["file13_2"],"\nBinary sequence = \n".$bin_str,FILE_APPEND | LOCK_EX);
                    file_put_contents($_REQUEST["file13_2"],"\nDNA sequence = \n".$dna,FILE_APPEND | LOCK_EX);
                
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