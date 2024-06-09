<?php

// try {
//     // Check if the request method is GET
//     if ($_SERVER['REQUEST_METHOD'] == 'GET') {
//         // Check if the 'city' field is set and not empty
//         if (isset($_GET['city']) && !empty($_GET['city'])) {
//             $selectedCity = 'delhi';
    
//             include("database.php");
            
//             // Validate the city name to prevent SQL injection
//             $validCities = ['noida', 'mumbai', 'bangalore', 'gurugram', 'delhi', 'pune'];
//             if (!in_array(strtolower($selectedCity), $validCities)) {
//                 throw new Exception("Invalid city selected.");
//             }
            
//             // Create the SQL query
//             $table = strtolower($selectedCity);
//             $sql = "SELECT * FROM `$table`";
//             $result = mysqli_query($conn, $sql);

//             // Check if the query was successful
//             if (!$result) {
//                 throw new Exception("Database Query Error: " . mysqli_error($conn));
//             }

//             $data = array();
//             if (mysqli_num_rows($result) > 0) {
//                 while ($row = mysqli_fetch_assoc($result)) {
//                     $data[] = $row;
//                 }
//             } else {
//                 // No records found
//                 header('Content-Type: application/json');
//                 echo json_encode(array("message" => "No records found."));
//                 exit;
//             }

//             mysqli_close($conn);

//             // Output the data as JSON
//             header('Content-Type: application/json');
//             echo json_encode($data);
//         } else {
//             throw new Exception("No city selected.");

//             $selectedCity = $_GET['city'];
//             echo $selectedCity;

//         }
//     } else {
//         throw new Exception("Invalid request method.");
//     }
// } catch (Exception $e) {
//     // Catch any exceptions and return the error message as JSON
//     header('Content-Type: application/json');
//     echo json_encode(array("error" => $e->getMessage()));
// }

if (isset($_POST['city'])) {

    include("database.php");

 
    $city = mysqli_real_escape_string($conn, $_POST['city']);

    echo $city;

    $sql = "SELECT * FROM $city";

$result = mysqli_query($conn, $sql);


if ($result) {
    
    if (mysqli_num_rows($result) > 0) {
        // Output data of each row
        while ($row = mysqli_fetch_assoc($result)) {
            echo "ID: " . $row["id"]. " - Name: " . $row["name"]. "  - City: " . $row["city"]. "<br>";
        }
        // header("Location: result.php");
    } else {
        echo "0 results";
    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);
}else{
    echo "city is not selected";
}
?>