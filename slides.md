---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
---

# Once upon a time

in an IT open space

---
layout: image
image: /talk.png
backgroundSize: contain
---

# Chapter 1

<!--

Front:

Hey j'ai besoin d'avoir les infos d'un produit !

Back :

Ça tombe bien je suis en train de faire un service OneMasterCatalogOfData !

Front :

Super je t'appels comment ?

Back :

Bah GET /api/v12/items et je t'envoi le nom, son model et la date

-->

---

# Let's code!

````md magic-move
```ts
type Item{
}
```
```ts
type Item{
    itemID: number,
}
```
```ts
type Item{
    itemID: number,
    name: string,
}
```
```ts
type Item{
    itemID: number,
    name: string,
    model: number,
}
```

````

<!--

Front :

Cool ! Aller hop je code

-->

---
layout: image
image: /fewiterationslater.png
backgroundSize: contain
---

<div v-click>
    <div
    v-motion
    :initial="{ x: 0, y: -100, opacity: 1 }"
    :enter="{ x: 0, y: 0, opacity: 1 }"
    :duration="3000"
    class="absolute top-4 right-4"
    >
        <img src="/apiready.png" alt="api-ready" class="w-48" />
    </div>
</div>

---

# Let's test!

<div v-click.at="1">
GET /api/v12/items
</div>

<div v-click.at="2">
```json
{
    "itemId": null,
    "name": "Bike",
    "model" null
}
```
</div>

<div v-click.at="3">
GET /api/v12/items
</div>

<div v-click.at="4">
```json
{
    "item_id": "123",
    "name": "Bike",
    "model": {
        "id": 1
    }
}
```
</div>

<!--

1er alt devrait etre un vrai appel typescript?

I call the endpoint and...

Ho why everything is null?!

Let's try with Bruno.... ho it's not what I've expected

-->

---
transition: fade
layout: image
image: /talk.png
backgroundSize: contain
---

# Chapter 1

---
transition: fade
layout: image
image: /talkoas.png
backgroundSize: contain
---

# Chapter 2

---

# The contract

````md magic-move
```yaml
paths:
  "/api/v12/items":
    get:
      responses:
        200:
          description: "All content (no next page)"
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Item"
components:
```
```yaml
paths:
  "/api/v12/items":
components:
  schemas:
    Item:
      type: object
      properties:
        item_id:
          type: integer
          example: '3185473'
        name:
          type: string
          example: 'Bike'
        model:
          type: object
          properties:
            id:
              type: integer
              example: '3185473'
```
````

---

# Let's code!

````md magic-move
```ts
type Item{
    itemID: number,
    name: string,
    model: number,
}
```

```ts
type Item{
    item_id: number,
    name: string,
    model: Model,
}

type Model {
    id: number,
}
```
````

---
layout: image
image: /fewiterationslater.png
backgroundSize: contain
---

<div v-click>
    <div
    v-motion
    :initial="{ x: 0, y: -100, opacity: 1 }"
    :enter="{ x: 0, y: 0, opacity: 1 }"
    :duration="3000"
    class="absolute top-4 right-4"
    >
        <img src="/apiready2.png" alt="api-ready-2" class="w-48" />
    </div>
</div>

---

# Let's test!

<div v-click.at="1">
GET /api/v12/items
</div>

<div v-click.at="2">
```json
{
    "item_id": NaN,
    "name": "Bike",
    "model" {
        "id": 1
    }
}
```
</div>

<div v-click.at="3">
GET /api/v12/items
</div>

<div v-click.at="4">
```json
{
    "item_id": "aaa-bbb-ccc",
    "name": "Bike",
    "model": {
        "id": 1
    }
}
```
</div>

<!--

1er alt devrait etre un vrai appel typescript?

I call the endpoint and...

Ho why everything is null?!

Let's try with Bruno.... ho it's not what I've expected

-->

---
transition: fade
layout: image
image: /talkoas.png
backgroundSize: contain
---

# Chapter 2

---
transition: fade
layout: image
image: /talkfirst.png
backgroundSize: contain
---

# Chapter 3

---

# Contract first

````md magic-move
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.openapitools</groupId>
      <artifactId>openapi-generator-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>
```
```xml {all|12}
<build>
  <plugins>
    <plugin>
      <groupId>org.openapitools</groupId>
      <artifactId>openapi-generator-maven-plugin</artifactId>
      <executions>
        <execution>
          <goals>
            <goal>generate</goal>
          </goals>
          <configuration>
            <inputSpec>${project.basedir}/docapi/swagger.yaml</inputSpec>
            <generatorName>spring</generatorName>
            <modelNameSuffix>DTO</modelNameSuffix>
            <configOptions>
              <interfaceOnly>true</interfaceOnly>
              <useSpringBoot3>true</useSpringBoot3>
              <useTags>true</useTags>
              <delegatePattern>true</delegatePattern>
            </configOptions>
          </configuration>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```
````

---

# Contract first

```java
public class ItemDTO {
  private @Nullable String itemId;
  private @Nullable String name;
  private @Nullable ItemModelDTO model;
  // more code
}
```

<div v-click.at="1">

```java
public interface ItemApi {

  @RequestMapping(
    method = RequestMethod.GET,
    value = "/api/v12/items",
    produces = { "application/json" }
  )
  
  default ResponseEntity<List<ItemDTO>> _listItems() {
    return apiV12ItemItemIDGet();
  }
  // more code
}
```
</div>

---

# Let's code!

````md magic-move
```ts
type Item{
    item_id: number,
    name: string,
    model: Model,
}

type Model {
    id: number,
}
```
```ts
type Item{
    item_id: string,
    name: string,
    model: Model,
}

type Model {
    id: number,
}
```
````

---
layout: image
image: /prod.jpg
backgroundSize: contain
---

<div v-click>
    <div
    v-motion
    :initial="{ x: 0, y: -100, opacity: 1 }"
    :enter="{ x: 0, y: 0, opacity: 1 }"
    :duration="3000"
    class="absolute top-4 right-4"
    >
        <img src="/apinewversion.png" alt="api-ready" class="w-48" />
    </div>
</div>

---

# Let's code!

<div v-click>
    <div
    v-motion
    :initial="{ x: 0, y: -100, opacity: 1 }"
    :enter="{ x: 0, y: 0, opacity: 1 }"
    :duration="3000"
    class="absolute top-4 right-4"
    >
        <img src="/shareCodegen.png" alt="api-ready" class="w-48" />
    </div>
</div>

---
layout: TwoColumns
---

::title::

# Let's see

::left::

<div v-click.at="1">

```bash
npx @openapitools/openapi-generator-cli generate \
    -i ./docapi/swagger.yaml \
    -g typescript-axios \
    -o ./ts/generated \
    --global-property models \
    --additional-properties=withSeparateModelsAndApi=true,
            apiPackage=items,modelPackage=items \
    --model-name-suffix DTO
```

</div>

::right::

<div v-click.at="2">

```ts
export interface ItemDTO {
    'item_id'?: number;
    'name'?: string;
    'model'?: ItemModelDTO;
}

export interface ItemModelDTO {
    'id'?: number;
}
```

</div>

---

Pas ce que veux exactement le front,
utilisation du generateur qui fait du zod

---

Et si on allait plus loins, generation client http
