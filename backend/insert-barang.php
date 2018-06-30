<?php
session_start();
include "config.php";

 $query_select=mysqli_query($connect, "SELECT id FROM user ORDER BY id DESC");
  $id=mysqli_fetch_assoc($query_select);
  $id= $id['userID']+1;
  $postdata = file_get_contents("php://input");
  $nim = "";
  $no_barang = "";
  $ukuran = "";
  $jumlah = "";
  $harga = "";
  $dt = "";
  
if (isset($postdata)) {
    $request = json_decode($postdata);
    $nim = $request->nim;
    $no_barang = $request->no_barang;
    $ukuran = $request->ukuran;
    $jumlah = $request->jumlah;
    $harga = $request->harga;
    $dt = $request->dt;
}
    
    $query_register = mysqli_query($connect, "INSERT INTO crud (nim, no_barang, ukuran, jumlah, harga, dt) VALUES ('$nim', '$no_barang', '$ukuran', '$jumlah', '$harga', '$dt')"); 
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
  
  echo json_encode($data);
?>