/*

import Maybe exposing (Just, Nothing)
import Basics exposing (Unit)
import Gren.Kernel.Scheduler exposing (binding, succeed)

*/

function _LocalStorage_clear() {
    return __Scheduler_binding(function (callback) {
        localStorage.clear();

        callback(__Scheduler_succeed(__Basics_Unit));
    })
}

function _LocalStorage_get(key) {
    return __Scheduler_binding(function (callback) {
        var item = localStorage.getItem(key);

        if (item === null) {
            return callback(__Scheduler_succeed(__Maybe_Nothing));
        } else {
            return callback(__Scheduler_succeed(__Maybe_Just(item)));
        }
    });
}

var _LocalStorage_set = F2(function (key, value) {
    return __Scheduler_binding(function (callback) {
        localStorage.setItem(key, value);

        return callback(__Scheduler_succeed(__Basics_Unit));
    })
});

function _LocalStorage_remove(key) {
    return __Scheduler_binding(function (callback) {
        localStorage.removeItem(key);

        return callback(__Scheduler_succeed(__Basics_Unit));
    })
}