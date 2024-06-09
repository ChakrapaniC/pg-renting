<?php
   include("database.php");

  
$name = "Ashray Living COVIE East of Kailash 52";
$location = "Nehru Place, Delhi";
$startingPrice = "₹25,000";
$imgSrc = "images/delhi2.jpg";
$mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.8604420566!2d77.25332445!3d28.5554561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39c526d4dd9%3A0xf0b835ed5a3a5732!2sAshray%20Living%20COVIE%20East%20of%20Kailash%2052!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin";

$sql = "INSERT INTO delhi (name, location, startingPrice, imgSrc, mapEmbedSrc) 
        VALUES ('$name', '$location', '$startingPrice', '$imgSrc', '$mapEmbedSrc')";

if (mysqli_query($conn, $sql)) {
    echo "Data is inserted";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);
?>