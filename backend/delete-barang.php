<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  include 'config.php';
  $postdata = file_get_contents("php://input");
  $id = '';
  $request = json_decode($postdata);
  $id = $request->id;
    $query_posts = mysqli_query($connect,"DELETE FROM insertbarang WHERE id='$id'");
    if($query_posts){
         $data = array(
            'message' => "Delete Post Success",
            'status' => "200"
         );
     }
     else {
         $data =array(
             'message' => "Delete Post Failed!",
             'status' => "404"
         );
     }
     
    echo json_encode($data);
?>