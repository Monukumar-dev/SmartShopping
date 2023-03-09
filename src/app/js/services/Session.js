import jwt from "jwt-simple";
import { empty } from "../utils/Validation";

export function getSessionKey() {
    return "qedatlas";
}

/**
 * Creates a new session of a user, this session is not an HTTP based session object, rather a simple token in localStorage.
 * This should not be used to put values in localStorage as it puts value against a specific key.
 *
 * Putting value other than the user login token will lead in session logout.
 *
 * @export
 * @param {*} token
 */
export function createSession(token) {
    localStorage.qedatlas = token;
}

/**
 * Get the session (token) from the localStorage. If there is no session, returns null/undefined.
 * 
 * If the decoded token is needed, refer to @getDecodedToken() method
 * @export
 * @returns token
 */
export function getSession() {
    var session = localStorage.qedatlas;
    return !empty(session) ? session : null;
}

/**
 * Delete the session of a signed user from the localStorage
 *
 * @export
 */
export function clearSession() {
    localStorage.removeItem("qedatlas");
}

export function getRole() {
    let session = getSession();
    if (!empty(session)) {
        let roles = session.authentication.roles;

        if (roles.length > 0) {
            return roles[0];
        }
    }
}

export function getToken() {
    return getSession()
}

export function getDecodedToken() {
    let token = getToken();
    return jwt.decode(token, '', true)
}