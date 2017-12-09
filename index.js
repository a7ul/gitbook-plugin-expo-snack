/*

{% exposnack platform="android|ios" preview="true|false" theme="light|dark" style="overflow:hidden;background:#212733;" %}
@master-atul/test
{% endexposnack %}

*/

module.exports = {
  blocks: {
    exposnack: {
      process: function process(block) {
        var snackId = String(block.body).trim() || "@master-atul/test";
        var kwargs = block.kwargs || {};
        var platform = kwargs.platform || "ios";
        var preview = kwargs.preview || true;
        var theme = kwargs.theme || "dark";
        var style =
          kwargs.style ||
          "overflow:hidden;background:#212733;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%";
        return (
          '<div data-snack-id="' +
          snackId +
          '" data-snack-platform="' +
          platform +
          '" data-snack-preview="' +
          preview +
          '" data-snack-theme="' +
          theme +
          '" style="' +
          style +
          '"></div><script async src="https://snack.expo.io/embed.js"></script>'
        );
      }
    }
  }
};
