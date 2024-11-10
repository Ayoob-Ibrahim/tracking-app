import { HttpInterceptorFn } from "@angular/common/http";
import { authservice } from "./auth.service";
import { inject } from "@angular/core";


export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authser: authservice = inject(authservice)
    const authToken = authser.user_token();

    const clonedRequest = authToken
        ? req.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`,
                "Access-Control-Allow-Origin": "localhost",
                "Content-Type": "application/json;charset=utf-8",
            }
        })
        : req;

    return next(clonedRequest);
};
