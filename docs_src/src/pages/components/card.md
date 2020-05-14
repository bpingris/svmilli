# Card

Card

```example

<script>
  import { Card, Button } from 'svmilli'
</script>

<Card thumbnail="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
  <div slot="title">
    Title
  </div>
  <div slot="subtitle">
    Subtitle
  </div>
  <div slot="content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, pariatur praesentium voluptate blanditiis excepturi eos vitae quae quas doloribus magnam libero distinctio unde voluptas aperiam eaque magni, eveniet, animi exercitationem.
  </div>
  <div slot="actions">
    <Button>
      hello
    </Button>
  </div>
</Card>

```

## Properties
```properties
thumbnail | Thumbnail displayed on top of the card | string(null)
thumbnailHeight | Height of the thumbnail in px | number(200)
title | Title of the card | `optional`
subtitle | Subtitle of the card | `optional`
content | Content of the card | `optional`
actions | Action button of the card | `optional`
```

<!-- ```slots
``` -->
