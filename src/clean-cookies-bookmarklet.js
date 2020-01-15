(function() {
    function clearCookies() {
        document.cookie.split(';').forEach(function(c) {
            document.cookie = c
                .replace(/^ +/, '')
                .replace(
                    /=.*/,
                    '=;expires=' + new Date().toUTCString() + ';path=/'
                );
        });
    }
    var target_domain = ['medium.com'];

    target_domain.forEach(function(domain) {
        if (location.href.indexOf(domain) !== -1) {
            clearCookies();
            location.reload();
        }
    });
})();
