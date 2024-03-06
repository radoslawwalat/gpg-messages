enum HttpStatusCode {
    OK = 200,
    Created = 201,
    NoContent = 204,

    MovedPermanently = 301,
    Found = 302,

    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,

    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504
}
