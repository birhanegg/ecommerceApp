import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { authenticationService } from "../../app/services/authentication.service";

@Injectable()

export class AuthenticationInterceptors implements HttpInterceptor {
    constructor(private authService: authenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const idToken = localStorage.getItem("token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization","Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }

    }
}