# gitbook-plugin-expo-snack

A gitbook plugin to include expo snack to your documentations/books

### Instructions

In your `book.json`

```
{
  "plugins": ["expo-snack"]
}
```

### Usage:
To use the snack viewer
1. Generate a snack url in expo.io
2. Then use it as follows

```
{% exposnack %}
snack url
{% endexposnack %}
```

**For example:**

```
{% exposnack %}
@master-atul/test
{% endexposnack %}
```

### Screenshot

<br>

<div style="text-align:center">
  <img src="https://github.com/master-atul/gitbook-plugin-expo-snack/raw/master/screens/preview.png" style="width: 100%;display: inline;">
</div>
<br>



#### Advanced:

```
{% exposnack
  platform="ios"
  preview="true"
  theme="dark"
  hideCorrectLink="false"
  style="overflow:hidden;background:#212733;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:600px;width:100%
%}
@master-atul/test
{% endexposnack %}
```
*The above mentioned example is the default*

#### Options:

- platform=`"android" | "ios"`
- preview=`"true|false"`
- theme="`light|dark`"
- style=`"overflow:hidden;background:#212733;"`
- hideCorrectLink="`false|true`" `// Expo web embed widget has incorrect implementation of open external link to the original snack. The plugin by default adds the correct link icon on the right but u can choose to hide it.`
