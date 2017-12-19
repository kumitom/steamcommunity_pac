function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "steamcommunity.com") || dnsDomainIs(host, "ubisoft.com") || dnsDomainIs(host, "ubi.com") || dnsDomainIs(host, "amazonaws.com"))
    {
        return "SOCKS5 127.0.0.1:65500; SOCKS 127.0.0.1:65500; PROXY 127.0.0.1:65500";
    }
    return "DIRECT";
}
