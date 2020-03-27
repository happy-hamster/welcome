import json
data = json.loads(open('roadmap_data.json').read())
roadmap_items = []

for ind, obj in enumerate(data):
    title = obj['title']
    date = obj['date']
    content= obj['content']
    icon=obj['icon']

    if ind % 2:
        item = f'''
    <div class="timeline-item">
      <div class="timeline-img">
        <img src="{icon}" width="100%"/>
      </div>
      <div class="timeline-content js--fadeInLeft">
        <h2>{title}</h2>
        <div class="date">{date}</div>
        <p>{content}</p>
        <!--<a class="bnt-more" href="javascript:void(0)">More</a>-->
      </div>
    </div>'''
    else:
        item = f'''
    <div class="timeline-item">
      <div class="timeline-img">
        <img src="{icon}" width="100%"/>
      </div>
      <div class="timeline-content js--fadeInRight">
        <h2>{title}</h2>
        <div class="date">{date}</div>
        <p>{content}</p>
        <!--<a class="bnt-more" href="javascript:void(0)">More</a>-->
      </div>
    </div>'''

    print(item)
    roadmap_items.append(item)

newline = '\n'
roadmap = f'''<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Roadmap Happy Hamster</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100i,300,400,500,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet">
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
  <link rel="stylesheet" href="./roadmap/style.css">

</head>
<body>
<header>
  <div class="container text-center">
    <h1>Roadmap</h1>
  </div>
</header>

<section class="timeline">
  <div class="container">
    {newline.join(roadmap_items)}
  </div>
</section>
<!-- partial -->
  <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
<script src='https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js'></script><script  src="./roadmap/script.js"></script>

</body>
</html>'''

with open('roadmap.html', 'w') as fout:
    fout.write(roadmap)
    print(roadmap)