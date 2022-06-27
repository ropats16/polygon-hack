export const NETWORK_ID = 31337 as number;
export const NETWORK_NAME = "localhost" as string;

export const ENV_PROD = process.env.NODE_ENV === "production";
export const ENV_DEV = process.env.NODE_ENV === "development";

export const CURRENT_CHAIN_ID: number = ENV_PROD ? 137 : 80001;
export const CURRENT_CHAIN_NAME = ENV_PROD ? "Polygon" : "Polygon Mumbai";
