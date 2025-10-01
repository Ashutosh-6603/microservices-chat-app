const getEnvVar = (key, defaultValue) => {
    const value = process.env[key];
    if (!value && !defaultValue) {
        throw new Error(`Environment variable ${key} is required`);
    }
    return value || defaultValue;
};
export const config = {
    redisUrl: getEnvVar("REDIS_URL"),
    port: parseInt(getEnvVar("PORT", "3000"), 10),
};
//# sourceMappingURL=env.js.map