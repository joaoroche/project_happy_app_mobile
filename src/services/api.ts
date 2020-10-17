import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.2:3333', //ip da maquina da sua rede, localizado no expo. "192.168.2.1". Deve ser alterado no backend tambem
});

export default api;