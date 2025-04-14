<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Mail recipient
$mailTo     = 'info@letsdigitalmarketing.com';
$successMsg = 'Thank you, Your Message Sent Successfully!';
$fillMsg    = 'Please fill all fields!';
$errorMsg   = 'Hm.. seems there is a problem, sorry!';

// Sanitize function
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Check if required fields are present
if (
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['phone_number'])
) {
    echo json_encode(["type" => "error", "msg" => $fillMsg]);
    exit;
}

// Sanitize inputs
$name  = sanitize($_POST['name']);
$email = sanitize($_POST['email']);
$phone = sanitize($_POST['phone_number']);

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["type" => "error", "msg" => "Please enter a valid email address!"]);
    exit;
}

// Construct the email message
$msg = "Customer Name: $name\r\n";
$msg .= "Email: $email\r\n";
$msg .= "Phone Number: $phone\r\n";

// Subject and headers
$subject = "New Query from $name";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";

// Send email
$success = mail($mailTo, $subject, $msg, $headers);

// Return success or error message
if ($success) {
    echo json_encode(["type" => "success", "msg" => $successMsg]);
} else {
    echo json_encode(["type" => "error", "msg" => $errorMsg]);
}
?>
