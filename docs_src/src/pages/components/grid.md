# Grid

Milligram grid components

## Usage

<div style="display:none">
  ```example
  <style>
  :global(.col-demo) {
    background: #d1d1d1;
    border-radius: .4rem;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    /* font-weight: bold; */
    text-align: center;
  }
  :global(.my-5) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  </style>
  ```
</div>

```example
<script>
 import { Container, Col, Row } from 'svmilli';
</script>

<Container>
  <Row>
    <Col>
      <span class="col-demo">
        Another one
      </span>
    </Col>
    <Col>
      <span class="col-demo">
        Another one
      </span>
    </Col>
    <Col>
      <span class="col-demo">
        Another one
      </span>
    </Col>
  </Row>
</Container>
```

## Column size

Milligram provides a 12-columns grid system.
With `svmilli`, you just need to use &lt;Col /&gt; component and pass it a `size` prop.

```example
<script>
  import { Col, Row, Container } from 'svmilli';

  const sizes = Array.from({ length: 12 }).map((o,i) => i + 1)
</script>

<Container>
{#each sizes as size}
  <Row class="my-5">
    <Col {size} class="col-demo">
      {size}
    </Col>
  </Row>
{/each}
</Container>
```

## Offset

Milligram's columns can have a left offset, it has the same sizes as its width.

```example
<script>
  import { Col, Row, Container } from 'svmilli';

</script>

<Container>
  <Row class="my-5">
    <Col size="6">
      <span class="col-demo">
        6
      </span>
    </Col>
    <Col size="3" offset="3" class="col-demo">
      <span class="col-demo">
        3 & offset 3
      </span>
    </Col>
  </Row>
</Container>
```

## Responsive

There isn't full control over responsiveness with this grid system.

On mobile, the row acts like a `Stack`, each `Col` is put on one another but keep it's size

```example
<script>
  import { Col, Row, Container } from 'svmilli';

</script>

<p>
  On mobile, these cols will take full width, try to reduce the size of your screen:
</p>

<Container>
  <Row class="my-5">
    <Col>
      <span class="col-demo">
        Some content in a col
      </span>
    </Col>
    <Col>
      <span class="col-demo">
        Some content in a col
      </span>
    </Col>
  </Row>
</Container>
```

## &lt;Col /&gt; Properties
```properties
size | Size of the column (0-12), 0 means auto width | number(0)
offset | Offset of the column (0-12), 0 means no offset | number(0)

```