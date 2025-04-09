import React, { useState } from "react";
import { Card } from "@/styles/StyledComponents";
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h2`
  color: #ff4757;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "white")};
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  resize: none;
  height: 120px;
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "white")};
`;

const Button = styled.button`
  margin-top: auto;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? "#443838" : "#ff4757")};
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#443838" : "#e84150")};
  }
`;


export const ContactCard = () => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    async function sendMessage(t: string) {
      return await fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t}`
        },
        body: JSON.stringify(body)
      })
        .catch(console.error);
    }

    const token = await getToken();
    const body = { author, message };
    let res = await sendMessage(token);


    if (!res) throw new Error("HandleSubmit error");
    if (res.status === 403) { // todo should be '401'
      const newToken = await refreshToken();
      res = await sendMessage(newToken);
    } 

    if (!res) throw new Error("HandleSubmit error");
    if (res.ok) {
      setSubmitted(true);
    } else {
      throw new Error("Erreur lors de l'envoi.");
    }

    setAuthor("");
    setMessage("");
    setSubmitted(true);
  };

  async function getToken(): Promise<string> {
    const token = localStorage.getItem("jwtToken");
    return token || (await refreshToken());
  };

  async function refreshToken(): Promise<string> {
    const res = await fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "martin",
        password: "martin",
      }),
    })
      .catch(console.error);

    if (!res || !res.ok) throw new Error("Login error");

    const data = await res.json();
    const newToken = data.token;

    localStorage.setItem("jwtToken", newToken);
    return newToken;

  };

  return (
    <Card>
      <Container>
        <Title>Me contacter 📬</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder={submitted ? "" : "Votre nom"}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            disabled={submitted}
          />
          <Textarea
            placeholder={submitted ? "" : "Votre message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={submitted}
          />
          <Button type="submit" disabled={submitted}>
            {submitted ? "Message envoyé ✅" : "Envoyer ✉️"}
          </Button>
        </Form>
      </Container>
    </Card>
  );
};
