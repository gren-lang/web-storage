# Web Storage

Web storage is a simple key-value store of strings, which can be used to store basic data in the browser.

Storage is usually limited to around 5Mb in most browsers, and can be cleared without warning in certain
cases, like if the user has requested it, is running out of disk space or simply hasn't used your application
in a long while.

Storage is further limited to a specific host origin. For instance, applications running on www.gren-lang.org
cannot access the local storage of other.gren-lang.org, or www.other-lang.org for that matter.

There are two different storage API's in the browser: session storage and local storage. They differ in
how long they retain data.

Data stored in session storage is deleted once the tab or browser closes. Data stored in local storage is
kept for as long as possible, given the previously mentioned limitations.

Web storage is useful in situations where you have a small amount of data that can either easily be replicated,
or where it isn't a problem if it is lost. This can be things like session keys, UI configuration or maybe
small amounts of JSON that you want other applications to have access to.
