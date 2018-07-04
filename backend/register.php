<?php
  // Always include this line in php file
  include "config.php";
  $query_select=mysqli_query($connect, "SELECT userID FROM user ORDER BY userID DESC");
  $id=mysqli_fetch_assoc($query_select);
  $id= $id['userID']+1;
  $postdata = file_get_contents("php://input");
  $fullname = "";
  $email = "";
  $username = "";
  $password = "";
  // Getting data from POST with JSON format
  if (isset($postdata)) {
    $request = json_decode($postdata);
    $fullname = $request->fullname;
    $username = $request->username;
    $email = $request->email;
    $password = $request->password;
  }
      
  // Check if the users already registered
    $query_regis = mysqli_query($connect, "SELECT * FROM user WHERE email='$email' OR username='$username'");
    if(mysqli_num_rows($query_regis)){
      $data =array(
          'message' => "Email or Username Already Taken!",
          'status' => "409"
      );
    }
    else {
        $query_register = mysqli_query($connect, "INSERT INTO user (userID, fullname, email, username, password) VALUES ('$id', '$fullname','$email','$username','$password')");
        // Check if query executed successfully if not send a 404 status code
        if($query_register){
            $data =array(
                'message' => "Register Success",
                'status' => "200"
            );
        }
        else{
            $data =array(
                'message' => "Register Failed",
                'status' => "404"
            );
        }
    }
    echo json_encode($data);
?>
