import type { ContactFormData } from "@/lib/schemas/contact";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<ContactFormData>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div
    style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      padding: "32px",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <h1 style={{ color: "#1a1a1a", fontSize: "24px", margin: "0" }}>
        Nuevo Mensaje de Contacto
      </h1>
      <div
        style={{
          height: "4px",
          width: "50px",
          backgroundColor: "#0066cc",
          margin: "16px auto",
        }}
      />
    </div>

    <div
      style={{
        marginBottom: "24px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <p style={{ margin: "8px 0", fontSize: "16px", color: "#333" }}>
        <strong>Nombre:</strong> {name}
      </p>
      <p style={{ margin: "8px 0", fontSize: "16px", color: "#333" }}>
        <strong>Correo:</strong> {email}
      </p>
      <p style={{ margin: "8px 0", fontSize: "16px", color: "#333" }}>
        <strong>Asunto:</strong> {subject}
      </p>
    </div>

    <div
      style={{
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e1e4e8",
        marginBottom: "24px",
      }}
    >
      <h2 style={{ color: "#1a1a1a", fontSize: "18px", marginTop: "0" }}>
        Mensaje:
      </h2>
      <p
        style={{
          whiteSpace: "pre-wrap",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#333",
          margin: "0",
        }}
      >
        {message}
      </p>
    </div>

    <div
      style={{
        borderTop: "1px solid #e1e4e8",
        paddingTop: "16px",
        fontSize: "14px",
        color: "#666",
        textAlign: "center",
      }}
    >
      <p style={{ margin: "0" }}>
        Este es un mensaje automático del formulario de contacto.
      </p>
    </div>
  </div>
);
