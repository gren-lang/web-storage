/*

import Maybe exposing (Just, Nothing)
import Basics exposing (Unit)
import Gren.Kernel.Scheduler exposing (binding, succeed)

*/

var _WebStorage_length = function (useLocalStorage) {
    return __Scheduler_binding(function (callback) {
        var length = _WebStorage_getStore(useLocalStorage).length;

        return callback(__Scheduler_succeed(length));
    });
};

var _WebStorage_key = F2(function(useLocalStorage, index) {
    return __Scheduler_binding(function (callback) {
        var key = _WebStorage_getStore(useLocalStorage).key(index);

        if (key === null) {
            return callback(__Scheduler_succeed(__Maybe_Nothing));
        } else {
            return callback(__Scheduler_succeed(__Maybe_Just(key)));
        }
    });
});

var _WebStorage_get = F2(function(useLocalStorage, key) {
    return __Scheduler_binding(function (callback) {
        var item = _WebStorage_getStore(useLocalStorage).getItem(key);

        if (item === null) {
            return callback(__Scheduler_succeed(__Maybe_Nothing));
        } else {
            return callback(__Scheduler_succeed(__Maybe_Just(item)));
        }
    });
});

var _WebStorage_set = F3(function (useLocalStorage, key, value) {
    return __Scheduler_binding(function (callback) {
        _WebStorage_getStore(useLocalStorage).setItem(key, value);

        return callback(__Scheduler_succeed(__Basics_Unit));
    })
});

var _WebStorage_remove = F2(function (useLocalStorage, key) {
    return __Scheduler_binding(function (callback) {
        _WebStorage_getStore(useLocalStorage).removeItem(key);

        return callback(__Scheduler_succeed(__Basics_Unit));
    })
});

var _WebStorage_clear = function (useLocalStorage) {
    return __Scheduler_binding(function (callback) {
        _WebStorage_getStore(useLocalStorage).clear();

        return callback(__Scheduler_succeed(__Basics_Unit));
    });
};


// Private functions

var _WebStorage_getStore = function(persist) {
    return persist ? window.localStorage : window.sessionStorage;
}
