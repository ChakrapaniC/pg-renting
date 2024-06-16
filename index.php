<?php
   include("database.php");

  
$name ="Settl Delvin";
$location = "Kadubeesanahalli, Bengaluru";
$startingPrice = "₹16,000";
$imgSrc ="images/gur4.jpg";
$mapEmbedSrc =  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758.3842085244933!2d77.04578481509722!3d28.42387259468598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19259fb540d7%3A0x71ae5cdddfb99e18!2sSector%2051%2C%20Gurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1654676909351!5m2!1sen!2sin";

$sql = "INSERT INTO bangalore (name, location, startingPrice, imgSrc, mapEmbedSrc) 
        VALUES ('$name', '$location', '$startingPrice', '$imgSrc', '$mapEmbedSrc')";

if (mysqli_query($conn, $sql)) {
    echo "Data is inserted";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);
?>