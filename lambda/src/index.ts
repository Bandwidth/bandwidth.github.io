import {rules} from './p2prules'

interface Event {
    Records: LambdaRecord[]
}

interface LambdaRecord {
    cf: RecordCF
}

interface RecordCF {
    config: object
    request: CFRequest
}

interface CFRequest {
    body: object
    uri: string
    clientIp: string
    querystring: string
    method: string
    headers: object
    origin: object
}

export const handler = async (event: Event, context: object) => {
    // check the requested URL vs the url mapping object.
    const url = event.Records[0].cf.request.uri
    if (rules[url]) {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: rules[url],
                }],
            },
        };
        return response;
    }
    // if we didn't catch on one of the above, lets also see if they are trying to access a generalized faq page
    if (url.startsWith('/faq/')) {
        // statically redirect
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: 'https://support.bandwidth.com',
                }],
            },
        };
        return response;
    }
    //if it starts with ap-docs, we're going to forward _with_ the requested object.
    if (url.startsWith('/ap-docs')) {
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: `https://old.dev.bandwidth.com${url}`
                }],
            },
        };
        return response;
    }


    // didn't proc any redirects, let it continue unmolested.
    return;
    
}
