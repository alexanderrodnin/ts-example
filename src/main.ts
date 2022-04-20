import {App} from "./app";
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./users/users.controller";
import {ExceptionFilter} from "./error/exception-filter";

async function bootsrap() {
    const logger = new LoggerService()
    const app = new App(
        logger,
        new UserController(logger),
        new ExceptionFilter(logger)
    );
    await app.init()
}

bootsrap();