<?php


// if (isset($_POST['city'])) {

//     include("database.php");

 
//     $city = mysqli_real_escape_string($conn, $_POST['city']);

//     echo $city;

//     $sql = "SELECT * FROM $city";

// $result = mysqli_query($conn, $sql);


// if ($result) {
    
//     if (mysqli_num_rows($result) > 0) {
//         // Output data of each row
//         while ($row = mysqli_fetch_assoc($result)) {
//             echo "ID: " . $row["id"]. " - Name: " . $row["name"]. "  - City: " . $row["city"]. "<br>";
//         }
//         // header("Location: result.php");
//     } else {
//         echo "0 results";
//     }
// } else {
//     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }


// mysqli_close($conn);
// }else{
//     echo "city is not selected";
// }
if (isset($_POST['city'])) {
    include("database.php");

    $city = mysqli_real_escape_string($conn, $_POST['city']);

    $sql = "SELECT * FROM $city";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            $rows = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            // Encode the data to JSON and pass it via session
            session_start();
            $_SESSION['rows'] = json_encode($rows);
            header("Location: result.php");
            exit();
        } else {
            echo "0 results";
        }
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
} else {
    echo "city is not selected";
}
?>