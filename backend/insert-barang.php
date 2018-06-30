<?php
include "config.php";

 $query_select=mysqli_query($connect, "SELECT id FROM crud ORDER BY id DESC");
  $id=mysqli_fetch_assoc($query_select);
  $id= $id['id']+1;
  $postdata = file_get_contents("php://input");
  $nim = "";
  $jumlahkaleng = "";
  $jumlahbotol1 = "";
  $jumlahbotol2 = "";
  $harga = "";
  $tanggalbeli = "";
  $tanggalbalik = "";
  
if (isset($postdata)) {
    $request = json_decode($postdata);
    $nim = $request->nim;
    $jumlahkaleng = $request->jumlahkaleng;
    $jumlahbotol1 = $request->jbotol500;
    $jumlahbotol2 = $request->jbotol500atas;
    $harga = $request->harga;
    $tanggalbeli = $request->currentdate;
    $tanggalbalik = $request->lastdate;
}
    
    $query_register = mysqli_query($connect, "INSERT INTO crud (id, nim, jumlahkaleng, jbotol500, jbotol500atas, harga, currentdate, lastdate) VALUES ('$id', '$nim', '$jumlahkaleng', '$jumlahbotol1', '$jumlahbotol2', '$harga', NOW() , '$tanggalbalik')"); 
    if($query_register){
            $data =array(
                'message' => "Insert Barang Success",
                'status' => "200"
            );
        }
        else{
            $data =array(
                'message' => "Insert Failed",
                'status' => "404"
            );
        }  
  
  echo json_encode($data);
?>
