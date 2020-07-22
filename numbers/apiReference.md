Note: The numbers API expects phone numbers to be in a 10 digit format `XXXYYYZZZZ`, _not_ in E164 format. This is different from the voice and messaging APIs, which expect phone numbers in E164 format.

{% raw %}
<script src="../scripts/e3d67c1f.vendor.min.js"></script>
<div ng-app="ramlConsoleApp" ng-cloak id="raml-console-unembedded">
  <link rel="stylesheet" href="styles/app.css"/>
  <raml-console with-root-documentation src="raml/iris.min.raml"></raml-console>
  <script src="../scripts/app.js"></script>
  <script>RAML.Settings.proxy = '';</script>
</div>
{% endraw %}
