# Input

Milligram's input

```example
<script>
  import { Input } from "svmilli";
  let value
</script>

<Input bind:value />
<Input bind:value label="Text" />
<Input bind:value label="Password" type="password" />
<Input bind:value label="Textarea" type="textarea" />
{value}
```

## Create a form

by using the grid system and buttons, we can create a form easily:

```example
<script>
  import { Input, Col, Row, Button, Container } from 'svmilli';

  let name;
  let age;
  let mail;
</script>


<Container>
<Row>
  <Col>
    <Input bind:value={name} label="Name" />
  </Col>
  <Col>
    <Input type="number" bind:value={age} label="Age" />
  </Col>
</Row>
<Row>
  <Col>
    <Input bind:value={mail} label="Mail" />
  </Col>
</Row>
<Row>
  <Col>
    <Button full>
      Send
    </Button>
  </Col>
</Row>
</Container>

<pre>
<code>
{JSON.stringify({ name, age, mail }, null, 2)}
</code>
</pre>
```

## Properties
```properties
value | Value of the input, can be bound | string("")
label | Label of input | string(null)
type | Type of the input (password, text, textarea, email...) | string("text")
placeholder | Placeholder of the input | string(null")
```