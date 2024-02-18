import mockBody from './mock-body.js'
import axios from 'axios'
import config from './config.js'

export const makeRequest = async (payload) => {
  const reqConfig = {
    method: 'post',
    url: `${config.BASE_URL}/ship/generate/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.API_KEY}`
    },
    data: Object.keys(payload).length === 0 ? mockBody : payload
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
