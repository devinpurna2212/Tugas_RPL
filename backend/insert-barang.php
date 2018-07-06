<?php
  // Always include this line in php file
  include "config.php";
  $query_select=mysqli_query($connect, "SELECT id FROM insertbarang ORDER BY id DESC");
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
  // Getting data from POST with JSON format
  if (isset($postdata)) {
    $request = json_decode($postdata);
    $nim = $request->nim;
    $jumlahkaleng = $request->jumlahkaleng;
    $jumlahbotol1 = $request->jbotol500;
    $jumlahbotol2 = $request->jbotol500atas;
    $harga = $request->harga;
    $tanggalbeli = $request->currentdate;
    $tanggalbeli = $request->lastdate;
  }
        $harga = strval($jumlahkaleng * 500 + $jumlahbotol1* 1000 + $jumlahbotol2* 1500 );
         $query_insert = mysqli_query($connect, "INSERT INTO insertbarang (id, nim, jumlahkaleng, jbotol500, jbotol500atas, harga, currentdate, lastdate) VALUES ($id,'$nim',$jumlahkaleng,$jumlahbotol1,$jumlahbotol2,'$harga',NOW(),NOW())");
        // Check if query executed successfully if not send a 404 status code
        if($query_insert){
            $data_kirim = array(
            	'id' => $id,
                'nim' => $nim,
                'jumlahkaleng' => $jumlahkaleng,
                'jbotol500' => $jumlahbotol1,
            	'jbotol500atas' => $jumlahbotol2,
            	'harga' => $harga
            );
            
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
