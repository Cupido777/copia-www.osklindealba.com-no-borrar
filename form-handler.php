<?php
// form-handler.php - Manejador de formulario para ODAM
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.osklindealba.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener datos JSON
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos inválidos']);
    exit;
}

// Validar campos requeridos
$required = ['name', 'email', 'phone', 'service-type', 'message'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "El campo $field es requerido"]);
        exit;
    }
}

// Validar email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

// Sanitizar datos
$name = htmlspecialchars(trim($input['name']));
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($input['phone']));
$serviceType = htmlspecialchars(trim($input['service-type']));
$projectType = htmlspecialchars(trim($input['project-type'] ?? 'No especificado'));
$budget = htmlspecialchars(trim($input['budget'] ?? 'No especificado'));
$deadline = htmlspecialchars(trim($input['deadline'] ?? 'No especificado'));
$message = htmlspecialchars(trim($input['message']));

// Configurar email
$to = 'odeam@osklindealba.com';
$subject = "Nueva solicitud de servicio: $serviceType";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Construir cuerpo del mensaje
$emailBody = "SOLICITUD DE COTIZACIÓN - ODAM PRODUCCIÓN MUSICAL\n\n";
$emailBody .= "INFORMACIÓN DEL CLIENTE:\n";
$emailBody .= "Nombre: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Teléfono/WhatsApp: $phone\n\n";
$emailBody .= "DETALLES DEL SERVICIO:\n";
$emailBody .= "Servicio solicitado: $serviceType\n";
$emailBody .= "Tipo de proyecto: $projectType\n";
$emailBody .= "Presupuesto estimado: $budget\n";
$emailBody .= "Fecha límite: $deadline\n\n";
$emailBody .= "DESCRIPCIÓN DEL PROYECTO:\n$message\n\n";
$emailBody .= "---\n";
$emailBody .= "Este mensaje fue enviado desde el formulario de contacto del sitio web ODAM.";

// Intentar enviar email
if (mail($to, $subject, $emailBody, $headers)) {
    // También guardar en archivo de log
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'name' => $name,
        'email' => $email,
        'service' => $serviceType,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Desconocida'
    ];
    
    file_put_contents('form-submissions.log', json_encode($logEntry) . "\n", FILE_APPEND | LOCK_EX);
    
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje']);
}
?>
