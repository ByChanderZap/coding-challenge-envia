import axios from 'axios'
import config from './config.js'

export const makeRequest = async (body) => {
  const reqConfig = {
    method: 'post',
    url: `${config.BASE_URL}/ship/generate/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.API_KEY}`
    },
    data: body
  }
  return await axios(reqConfig)
}

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: 'Resource not found.'
  })
}

export const formatErrorRequest = (err) => {
  return {
    code: err.code,
    description: err.description,
    message: err.message
  }
}
