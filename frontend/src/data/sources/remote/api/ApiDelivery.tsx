import axios from "axios";

const ApiDelivery = axios.create({
  baseURL: 'https://arc-supplied-exemption-self.trycloudflare.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export { ApiDelivery };


