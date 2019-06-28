{% method %}
# Unsupported Content Type - 415

### Parameters
| Parameter   | Type     | Description                                      |
|:------------|:---------|:-------------------------------------------------|
| type        | `string` | Type of Error                                    |
| description | `string` | A detailed description of why the error occurred |

{% common %}

### Unauthorized
{% sample lang='http' %}


```http
Status: 415 Unsupported Media Type
Content-Type: application/json; charset=utf-8

{
    "type": "unsupported-content-type",
    "description": "Content type 'text/plain;charset=UTF-8' not supported. Please use 'application/json'"
}
```

{% endmethod %}
