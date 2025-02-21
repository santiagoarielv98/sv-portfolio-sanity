import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h2 style={{ color: "#333" }}>New Contact Form Submission</h2>
    <div style={{ marginBottom: "20px" }}>
      <p>
        <strong>From:</strong> {name} ({email})
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
    </div>
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
      }}
    >
      <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
    </div>
  </div>
);
