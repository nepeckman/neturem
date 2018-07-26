import {BehaviorSubject} from 'rxjs';

interface Resource<T, R = T> {
    url: string;
    collection?: boolean;
    clientParse?: (serverResource: R) => T;
    serverParse?: (clientResource: T) => R;
}

let store = new BehaviorSubject<any>({});

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface Action<T, R = T> {
    method: Method;
    resource: Resource<T, R>;
    value?: T;
}

class Create<T, R = T> implements Action<T, R> {
    method: Method = "POST";
    constructor(public resource: Resource<T, R>, public value: T){}
}

class Read<T, R = T> implements Action<T, R> {
    method: Method = "GET";
    constructor(public resource: Resource<T, R>){}
}

class Update<T, R = T> implements Action<T, R> {
    method: Method = "POST";
    constructor(public resource: Resource<T, R>, public value: T){}
}

class Delete<T, R = T>  implements Action<T, R> {
    method: Method = "DELETE";
    constructor(public resource: Resource<T, R>){}
}
