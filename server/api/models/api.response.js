/**
 * MWA Project  
 * Online shopping application 
 * Since june 10
 * Team-6 
 */

module.exports = class ApiResponse {
    status;
    message;
    result;

    constructor(status, message, result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }

}