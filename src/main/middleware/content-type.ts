import { type Request, type Response, type NextFunction } from 'express'

export const contentType = (request: Request, response: Response, next: NextFunction): void => {
  response.type('json')
  next()
}
