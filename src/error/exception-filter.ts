import {IExceptionFilter} from "./exception-filter.interface";
import {HTTPError} from "./http-error";
import {Request, Response, NextFunction} from "express";
import {ILogger} from "../logger/logger.interface";

export class ExceptionFilter implements IExceptionFilter {

    logger: ILogger

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
        if (err instanceof HTTPError) {
            this.logger.error(`[${err.context}] ${err.message}`)
            res.status(res.statusCode).send({err: err.message})
        } else {
            this.logger.error(`${err.message}`)
            res.status(res.statusCode).send({err: err.message})
        }
    }

}