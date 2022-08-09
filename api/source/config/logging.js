const getTimeStamp = () => {
    return new Date().toISOString();
};

const info = (namespace, message, object) => {
    if (object) {
        console.log(
            `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
            object
        );
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const warn = (namespace, message, object) => {
    if (object) {
        console.warn(
            `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
            object
        );
    } else {
        console.warn(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const error = (namespace, message, object) => {
    if (object) {
        console.error(
            `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
            object
        );
    } else {
        console.error(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const debug = (namespace, message, object) => {
    if (object) {
        console.debug(
            `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
            object
        );
    } else {
        console.debug(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

module.exports = {
    info: info,
    warn: warn,
    error: error,
    debug: debug,
};
