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
    <Col size="6" class="col-demo">
      6
    </Col>
    <Col size="3" offset="3" class="col-demo">
      3 & offset 3
    </Col>
  </Row>
</Container>
```
