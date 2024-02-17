import dotenv from 'dotenv'

dotenv.config()

const getConfig = () => {
  return {
    DEV: process.env.NODE_ENV !== 'production',
    PORT: process.env.PORT || 3000,
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL
  }
}

const getSanitizedConfig = (config) => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env file`)
    }
  }
  return config
}

const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
