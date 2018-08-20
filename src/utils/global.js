const legacy = {
  host: '192.168.199.107',
  port: 9080,
  get urlbase() { return `http://${legacy.host}:${legacy.port}`; }
};

export default {
  /**
   * legacy 用于存放与过时系统相对接的一些策略
   */
  legacy
};
