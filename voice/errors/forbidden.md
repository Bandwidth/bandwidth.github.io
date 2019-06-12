{% method %}
# Forbidden Error - 403

### Parameters
| Parameter   | Type     | Description                                      |
|:------------|:---------|:-------------------------------------------------|
| type        | `string` | Type of Error                                    |
| description | `string` | A detailed description of why the error occurred |

{% common %}

### Forbidden
{% sample lang='http' %}


```http
Status: 403 Forbidden
Content-Type: application/json; charset=utf-8

{
    "type": "unauthorized",
    "description": "Access is denied."
}
```

{% endmethod %}
