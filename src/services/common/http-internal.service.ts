import { HttpService } from "./http.service";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL_DIGITALHOUSE || "";


class HttpInternalService extends HttpService {
  constructor() {
    super(BASE_URL);
  }
}
const httpInternalService = new HttpInternalService();
export default httpInternalService;
