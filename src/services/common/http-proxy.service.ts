import { HttpService } from "./http.service";
const BASE_URL = "http://localhost:3000/api/proxy";

class HttpProxyService extends HttpService {
  constructor() {
    super(BASE_URL);
  }
}
const httpProxyService = new HttpProxyService();
export default httpProxyService;
