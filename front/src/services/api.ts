import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5003/",
});

api.interceptors.response.use(
  (resposta) => resposta,
  (erro) => {
    if (erro.response && erro.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/usuario/login";
    } else {
      console.error("Erro na requisição:", erro.message);
    }

    return Promise.reject(erro);
  }
);

export default api;
