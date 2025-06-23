export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/png" href="https://imagedelivery.net/6AJ8EeWMEp3q00vGzdGzAg/b2a84502-43f3-4d3a-37a6-54252c8e4100/public"/>
  <title>Zip zorp, Station gas?</title>
</head>
<body>

<div style="position: relative; padding-top: 100%;">
  <iframe
    src="https://customer-o9bslss1lyry8ad1.cloudflarestream.com/ca2b4ff38d7806387ac6adea370ab917/iframe?poster=https%3A%2F%2Fcustomer-o9bslss1lyry8ad1.cloudflarestream.com%2Fca2b4ff38d7806387ac6adea370ab917%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
    loading="lazy"
    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen="true"
  ></iframe>
</div>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

