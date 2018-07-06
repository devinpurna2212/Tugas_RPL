<?php
  include 'config.php';
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  $data = array();

    $query_posts = mysqli_query($connect,"SELECT * FROM insertbarang ORDER BY currentdate DESC");
    if(mysqli_num_rows($query_posts)){
         while($result=mysqli_fetch_assoc($query_posts)){
            $results_set[]=$result;
         }
         $data = $results_set;
     }
     else {
         $data =array(
             'message' => "Data Query Failed!",
             'status' => "404"
         );
     }
     
    echo json_encode($data);
?>