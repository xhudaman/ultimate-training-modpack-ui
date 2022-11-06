import _ from "lodash";
import { isSerializable } from "../utils/serializable";

const isNxAvailable = typeof window.nx !== "undefined";
class DevTools {
  constructor(config) {
    const { enableInProduction, enableConsoleOverrides } = config || {};

    if (
      process.env.REACT_APP_BUILD_ENV !== "development" &&
      !enableInProduction
    ) {
      alert("To use dev tools please run in development mode");
      return;
    }

    this.client = this.getClient();
    this.config = config || {};

    this.logger = {
      log: (message, data) => {
        this.sendMessage("log", {
          message,
          data,
        });
      },
      info: (message, data) =>
        this.sendMessage("info", {
          message,
          data,
        }),
      debug: (message, data) =>
        this.sendMessage("debug", {
          message,
          data,
        }),
      error: (error) =>
        this.sendMessage("error", {
          message: error.message,
          data: { error },
        }),
      trace: (error) =>
        this.sendMessage("trace", {
          message: error.message,
          data: { error },
        }),
    };

    if (enableConsoleOverrides && this.client) {
      this.initConsoleOverrides();
    }

    this.instance = this;
  }

  static getInstance(config) {
    if (!this.instance) {
      this.instance = new DevTools(config);
    }

    return this.instance;
  }

  getClient() {
    try {
      const client = new WebSocket(process.env.REACT_APP_DEBUG_SERVER_URL);

      client.onopen = () => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "init",
              data: { relation: "client" },
            })
          );
        }
      };

      client.onerror = (error) => {
        console.error(error);
      };

      client.onmessage = (event) => {
        const parsedMessage = JSON.parse(event.data);
        const { type, data } = parsedMessage;

        if (type === "init") {
          this.client.id = data.id;
        }
      };

      return client;
    } catch (error) {
      alert(error);
      return;
    }
  }

  sendMessage(type, object) {
    if (this.client.readyState !== WebSocket.OPEN) return;
    const { message, data } = object;

    if (type === "error" || type === "trace") {
      const { error } = data;

      data.error = {
        errorString: error.toString(),
        message: error.message,
        stack: error.stack,
      };
    }

    let messageToSend = {
      type,
      message,
      data: {
        ...data,
        id: this.client.id,
      },
    };

    this.client.send(JSON.stringify(messageToSend));
  }

  disconnect() {
    this.sendMessage("disconnect", {});
  }

  initConsoleOverrides() {
    const {
      log: _log,
      info: _info,
      debug: _debug,
      error: _error,
      trace: _trace,
    } = console;

    console.log = (...args) => {
      const [message, data] = args;

      if (_.isString(message) && isSerializable(data)) {
        this.logger.log(message, data);
      }

      if (!isNxAvailable) {
        _log(message, data);
      }
    };

    console.info = (...args) => {
      const [message, data] = args;

      if (_.isString(message) && isSerializable(data)) {
        this.logger.info(message, data);
      }

      if (!isNxAvailable) {
        _info(message, data);
      }
    };

    console.debug = (...args) => {
      const [message, data] = args;

      if (_.isString(message) && isSerializable(data)) {
        this.logger.debug(message, data);
      }

      if (!isNxAvailable) {
        _debug(message, data);
      }
    };

    console.error = (error) => {
      if (error instanceof Error) {
        this.logger.error(error);
      }
      if (!isNxAvailable) {
        _error(error);
      }
    };

    console.trace = (error) => {
      if (error instanceof Error) {
        this.logger.trace(error);
      }
      if (!isNxAvailable) {
        _trace(error);
      }
    };
  }
}

const devTools = (config) => DevTools.getInstance(config);

export default devTools;
