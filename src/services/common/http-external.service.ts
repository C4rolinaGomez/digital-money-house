import { HttpService } from "./http.service";
const BASE_URL = process.env.API_URL_DIGITALHOUSE || "";

class HttpExternalService extends HttpService {
  constructor() {
    super(BASE_URL);
  }
}
const httpExternalService = new HttpExternalService();
export default httpExternalService;
