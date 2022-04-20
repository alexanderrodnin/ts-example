import { Request, Response, NextFunction } from 'express'
import { HTTPError } from './http-error' 

export interface IExceptionFilter {
    catch: (err: Error | HTTPError, req: Request, res: Response, next: NextFunction) => void
}