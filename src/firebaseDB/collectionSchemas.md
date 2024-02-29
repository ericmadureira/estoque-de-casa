# Firestore collections schemas

## products
  - id              -> string    -> readonly
  - createdAt       -> date time -> readonly
  - updateAt        -> date time -> readonly
  - ean             -> string
  - category        -> string
  - name            -> string
  - weight          -> number
  - minimalAmount   -> number
  - recurrentAmount -> number

## shoppingList
  - id                -> string    -> readonly
  - updateAt          -> date time
  - singleProducts    -> Product[]
  - recurrentProducts -> Product[]
