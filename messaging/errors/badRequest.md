{% method %}
# Bad Request Error - 400

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| type                    | `string` | The Type of error.                               |
| description             | `string` | A detailed description of why the error occurred |
| fieldErrors             | `array`  | List of errors in fields                         |
| fieldErrors.fieldName   | `string` | Name of field with error                         |
| fieldErrors.description | `string` | Description of the error                         |

{% common %}

### Bad Request
{% sample lang='http' %}


```http
Status: 400 Bad Request
Content-Type: application/json; charset=utf-8

{
  "type": "request-validation",
  "description": "Your request could not be accepted",
  "fieldErrors": [
    {
      "fieldName": "from",
      "description": "'from' must contain exactly one telephone number"
    },
    {
      "fieldName": "text",
      "description": "'text' is required unless media is included"
    },
    {
      "fieldName": "to",
      "description": "'to' must contain at least one telephone number"
    }
  ]
}
```

{% endmethod %}