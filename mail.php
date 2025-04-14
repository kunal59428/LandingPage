<?php
// Get form values
$name = $_POST['name'] ?? '';
$phone = $_POST['phone_number'] ?? '';
$email = $_POST['email'] ?? '';

// Basic validation
if (!$name || !$phone || !$email) {
    echo "All fields are required.";
    exit;
}

// Email setup
$to = "shaktiservotransformer@gmail.com"; // <-- Change this to your actual email
$subject = "New Contact Query from Website";
$message = "Name: $name\nPhone: $phone\nEmail: $email";
$headers = "From: $email\r\n";

// Send email
mail($to, $subject, $message, $headers);

// Redirect to Thank You page
header("Location: thankyou.html");
exit;
?>
