import { handler } from '../src/index';
import { rules } from '../src/p2prules'

const generateRecord = (url: string) => ({
  "Records": [
    {
      "cf": {
        "config": {
          "distributionDomainName": "d123.cloudfront.net",
          "distributionId": "EDFDVBD6EXAMPLE",
          "eventType": "viewer-request",
          "requestId": "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
        },
        "request": {
          "body": {
            "action": "read-only",
            "data": "eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=",
            "encoding": "base64",
            "inputTruncated": false
          },
          "clientIp": "2001:0db8:85a3:0:0:8a2e:0370:7334",
          "querystring": "size=large",
          "uri": url,
          "method": "GET",
          "headers": {
            "host": [
              {
                "key": "Host",
                "value": "d111111abcdef8.cloudfront.net"
              }
            ],
            "user-agent": [
              {
                "key": "User-Agent",
                "value": "curl/7.51.0"
              }
            ]
          },
          "origin": {
            "custom": {
              "customHeaders": {
                "my-origin-custom-header": [
                  {
                    "key": "My-Origin-Custom-Header",
                    "value": "Test"
                  }
                ]
              },
              "domainName": "example.com",
              "keepaliveTimeout": 5,
              "path": "/custom_path",
              "port": 443,
              "protocol": "https",
              "readTimeout": 5,
              "sslProtocols": [
                "TLSv1",
                "TLSv1.1"
              ]
            },
            "s3": {
              "authMethod": "origin-access-identity",
              "customHeaders": {
                "my-origin-custom-header": [
                  {
                    "key": "My-Origin-Custom-Header",
                    "value": "Test"
                  }
                ]
              },
              "domainName": "my-bucket.s3.amazonaws.com",
              "path": "/s3_path",
              "region": "us-east-1"
            }
          }
        }
      }
    }
  ]
})

test('Generic request preserved', async () => {
  let res = await handler(generateRecord('/test.jpg'), {})
  // if no remapping is proced, this function does not return.
  expect(res).toStrictEqual(generateRecord('/test.jpg').Records[0].cf.request);
})

test('Redirect known URL', async () => {
  let res = await handler(generateRecord('/v2-messaging/uisetup.html'), {});

  expect(res).toStrictEqual({
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{
        key: 'Location',
        value: 'https://support.bandwidth.com/hc/en-us/articles/360033658613-Messaging-V2-API-Account-Setup-UI-'
      }]
    }
  })
})

test('Redirect FAQ Generic', async () => {
  let res = await handler(generateRecord('/faq/mycoolpage'), {});

  expect(res).toStrictEqual({
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{
        key: 'Location',
        value: 'https://support.bandwidth.com'
      }]
    }
  })
})

test('Redirect AP-docs', async () => {
  let res = await handler(generateRecord('/ap-docs/potato'), {});

  expect(res).toStrictEqual({
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{
        key: 'Location',
        value: 'https://old.dev.bandwidth.com/ap-docs/potato'
      }]
    }
  })
})

test('No Uppercase keys in forwarding rules', async () => {
  let keys = Object.keys(rules);
  let allLower = true;
  for (let i = 0; i < keys.length; i += 1) {
    let key = keys[i];
    if (key.toLowerCase() !== key) {
      console.log(key, "FAILED")
      allLower = false;
    }
  }
  expect(allLower).toStrictEqual(true);
})