import { HttpService } from "./http.service";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL_DIGITALHOUSE || "";


class HttpProxyService extends HttpService {
  constructor() {
    super(BASE_URL);
  }
}
const httpProxyService = new HttpProxyService();
export default httpProxyService;
