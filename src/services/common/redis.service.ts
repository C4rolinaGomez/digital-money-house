import Redis from "ioredis";

class RedisService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis("redis://default:DigitalMoneyApp@localhost:6379");
  }

  get = async (key: string) => {
    return await this.redis.get(key);
  };

  set = async (key: string, value: any) => {
    return await this.redis.set(key, value);
  };

  setEx = async (key: string, value: any, time: number) => {
    return await this.redis.set(key, value, "EX", time);
  };

  delete = async (key: string) => {
    return await this.redis.del(key);
  };
}
const redisService = new RedisService();
export default redisService;
