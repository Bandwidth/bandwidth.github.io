{% method %}
# Unauthorized Error - 401

### Parameters
| Parameter   | Type     | Description                                      |
|:------------|:---------|:-------------------------------------------------|
| type        | `string` | Type of Error                                    |
| description | `string` | A detailed description of why the error occurred |

{% common %}

### Unauthorized
{% sample lang='http' %}


```http
Status: 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "type": "authentication-error",
    "description": "Invalid or missing credentials."
}
```

{% endmethod %}
