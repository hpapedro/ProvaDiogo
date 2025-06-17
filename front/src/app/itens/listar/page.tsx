"use client";

import api from "@/services/api";
import Itens from "@/types/itens";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function ListarItens() {
  const [itens, setItens] = useState<Itens[]>([]);

  useEffect(() => {
    api
      .get<Itens[]>("api/itens") // Certifique-se que esse é o endpoint certo
      .then((resposta) => {
        setItens(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar itens:", erro);
      });
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Lista de Itens
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Criado em</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.categoria?.nome || "Sem categoria"}</TableCell>
                <TableCell>{new Date(item.criadoEm).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ListarItens;
