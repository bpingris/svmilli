# Button

Milligram table component

## Usage

```example
<script>
 import { Table } from 'svmilli';

 let headers = [
   { value: 'Name' },
   { value: 'Age' },
   { value: 'Height' },
   { value: 'Location' },
  ]

  let data = [
    [
      'Stephen Curry',
      27,
      '1,91',
      'Akron, OH'
    ],
    [
      'Klay Thompson',
      25,
      '2,01',
      'Los Angeles, CA'
    ],
  ]
</script>

<Table {headers} {data} />
```

## Properties

```ts
interface Header {
  value: string
}
```

```properties
headers | Header of the table | Header[](required)
data | Data to be put in the table | string[][](required)
```
