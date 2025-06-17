"use client";

import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import api from "@/services/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function efetuarLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const resposta = await api.post("/usuario/login", {
        email,
        senha,
      });

      const { token } = resposta.data as { token: string };

      if (!token) {
        alert("Token JWT não retornado!");
        return;
      }

      localStorage.setItem("token", token);
      router.push("/produto/listar");
    } catch (erro: any) {
      console.error("Erro ao fazer login:", erro);
      alert("Usuário ou senha inválidos.");
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={efetuarLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
