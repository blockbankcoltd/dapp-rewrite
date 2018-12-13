import React from 'react';

export default (head) => {
    return (
        <React.Fragment>
            <meta charSet="UTF-8" />
            <title>{head.title || "비트나루"}</title>
            <meta name="description" content={head.metaDescription} />
            <meta name="keywords" content={head.metaKeywords} />
            <meta property="og:title" content={head.metaOgTitle} />
            <meta property="og:image" content="https://static.bitnaru.com/v3_web/images/bitnaruLogo.png" />
            <meta property="og:description" content={head.metaOgDescription} />
            <meta property="og:url" content="https://www.bitnaru.com" />
            <meta property="og:site_name" content={head.title} />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:url" content="https://www.bitnaru.com"/>
            <meta name="twitter:site_name" content={head.title}/>
            <meta name="twitter:title" content={head.metaOgTitle}/>
            <meta name="twitter:image" content="https://static.bitnaru.com/v3_web/images/bitnaruLogo.png"/>
            <meta name="twitter:description" content={head.metaOgDescription} />
            <meta name="twitter:locale" content="ko_kr"/>
            <meta name="twitter:type" content="website"/>
        </React.Fragment>
    )
}

