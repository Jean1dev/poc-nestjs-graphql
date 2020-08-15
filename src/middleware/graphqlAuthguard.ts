import { CanActivate, ExecutionContext } from "@nestjs/common";

export default class GraphQLAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}