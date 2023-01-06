<?php
    include_once "config.php";
    $frame = mysqli_real_escape_string($conn, $_POST['']);
    $lrame = mysqli_real_escape_string($conn, $_POST['']);
    $email = mysqli_real_escape_string($conn, $_POST['']);
    $password = mysqli_real_escape_string($conn, $_POST['']);

if(!empty($fname) && !empty($lname) && !empty($email)&& !empty($password)){
//let's check user email is valid or not
 
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //if email is valid
        //let's check that email already exist in the database or not
        $sql = mysql_query($conn, "SELECT email FROM users WHERE email = '{$email}'");
        if(mysqli_num_rows($sql) >0){//if email already exits
            echo "$email - already exist!!";

        }else{
            //let's check user upload file or not
            if(isset($_FILES['file'])){ //if file is uploadad
                
            }else{
                echo "Please select an Image file!";
            }
        }
        else{
            echo "$email - This is not a valid email !";
        }
    }
}else {
    echo "All input field are required!";
}
    
?>