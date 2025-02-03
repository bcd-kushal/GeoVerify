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

                    $file1=fopen($_REQUEST["file11_1"],"r");
                    $len = filesize($_REQUEST["file11_1"]);

                    $extract_type = $_REQUEST["eleven_select"];
                
                    $str = file_get_contents($_REQUEST["file11_1"]);
                    $str = trim(preg_replace('!\s+!',' ',$str));
                    $str = trim($str);
                
                    $new_str="";
                    $flag=0;
                    for($i=0;$i<=strlen($str)-1;$i++){

                        
                        if(strcmp($extract_type,"text")==0){
                            if($str[$i]>=' ' && $str[$i]<='z'){
                                $new_str.=$str[$i];
                                if($flag==0){
                                    file_put_contents($_REQUEST["file11_2"],$str[$i],FILE_APPEND | LOCK_EX);    
                                    $flag=1;
                                }
                                else    file_put_contents($_REQUEST["file11_2"],",".$str[$i],FILE_APPEND | LOCK_EX);
                                ++$count;
                                continue;
                            }
                            if($str[$i]==' ')
                                $new_str.=$str[$i];
                        }



                        if(strcmp($extract_type,"alphas")==0){
                            if(($str[$i]>='a' && $str[$i]<='z')||($str[$i]>='A' && $str[$i]<='Z')){
                                $new_str.=$str[$i];
                                if($flag==0){
                                    file_put_contents($_REQUEST["file11_2"],$str[$i],FILE_APPEND | LOCK_EX);    
                                    $flag=1;
                                }
                                else    file_put_contents($_REQUEST["file11_2"],",".$str[$i],FILE_APPEND | LOCK_EX);
                                ++$count;
                                continue;
                            }
                            if($str[$i]==' ')
                                $new_str.=$str[$i];
                        }



                        if(strcmp($extract_type,"sText")==0){
                            if($str[$i]>='a' && $str[$i]<='z'){
                                $new_str.=$str[$i];
                                if($flag==0){
                                    file_put_contents($_REQUEST["file11_2"],$str[$i],FILE_APPEND | LOCK_EX);    
                                    $flag=1;
                                }
                                else    file_put_contents($_REQUEST["file11_2"],",".$str[$i],FILE_APPEND | LOCK_EX);
                                ++$count;
                                continue;
                            }
                            if($str[$i]==' ')
                                $new_str.=$str[$i];
                        }



                        if(strcmp($extract_type,"cText")==0){
                            if($str[$i]>='A' && $str[$i]<='Z'){
                                $new_str.=$str[$i];
                                if($flag==0){
                                    file_put_contents($_REQUEST["file11_2"],$str[$i],FILE_APPEND | LOCK_EX);    
                                    $flag=1;
                                }
                                else    file_put_contents($_REQUEST["file11_2"],",".$str[$i],FILE_APPEND | LOCK_EX);
                                ++$count;
                                continue;
                            }
                            if($str[$i]==' ')
                                $new_str.=$str[$i];
                        }



                        if(strcmp($extract_type,"digit")==0){
                            if($str[$i]>='0' && $str[$i]<='9'){
                                $new_str.=$str[$i];
                                if($flag==0){
                                    file_put_contents($_REQUEST["file11_2"],$str[$i],FILE_APPEND | LOCK_EX);    
                                    $flag=1;
                                }
                                else    file_put_contents($_REQUEST["file11_2"],",".$str[$i],FILE_APPEND | LOCK_EX);
                                ++$count;
                                continue;
                            }
                            if($str[$i]==' ')
                                $new_str.=$str[$i];
                        }



                        if(strcmp($extract_type,"splChar")==0){
                            if(($str[$i]>='a' && $str[$i]<='z')||($str[$i]>='A' && $str[$i]<='Z')||($str[$i]>='0' && $str[$i]<='9'))
                                continue;
                            else{
                                $new_str.=$str[$i];
                                if($flag==0){
                                    file_put_contents($_REQUEST["file11_2"],$str[$i],FILE_APPEND | LOCK_EX);    
                                    $flag=1;
                                }
                                else    file_put_contents($_REQUEST["file11_2"],",".$str[$i],FILE_APPEND | LOCK_EX);
                                ++$count;
                                continue;
                            }
                            if($str[$i]==' ')
                                $new_str.=$str[$i];
                        }
                    }

                    
                    echo "<b>Original string :</b><br>".$str."<br><b>Extracted characters :</b><br>".$new_str;

                    echo "<br><br>The same has been copied <br>to : <b>\"".$_REQUEST["file11_2"]."\"</b>";
                    
                    file_put_contents($_REQUEST["file11_2"],"\n",FILE_APPEND | LOCK_EX);
                    

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