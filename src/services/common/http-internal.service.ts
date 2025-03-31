import { HttpService } from "./http.service";
const BASE_URL = "http://localhost:3000/api";

class HttpInternalService extends HttpService {
  constructor() {
    super(BASE_URL);
  }
}
const httpInternalService = new HttpInternalService();
export default httpInternalService;
