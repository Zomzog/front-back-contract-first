# Scénario 1 : La Comédie des Erreurs (Comique)

Titre et Ton : La Comédie des Erreurs. Léger, humoristique, basé sur des quiproquos et des exagérations.

Durée et Répartition : 12 minutes (Phase 1: 1m, Phase 2: 3m, Phase 3: 3m, Phase 4: 2m, Phase 5: 2m, Phase 6: 1m).

Raccord SCQA :

Situation : Une équipe front et une équipe back collaborent sur une nouvelle feature avec une API.

Complication : Leur communication est basée sur des accords verbaux et des suppositions, menant à des bugs et des frustrations monumentales.

Question : Comment peuvent-ils se synchroniser sans perdre de temps en meetings et en débogage interminable ?

Answer : En traitant un fichier OpenAPI comme une source unique de vérité (single source of truth), qui génère automatiquement du code et des validations pour les deux équipes.

Script Complet :

### PHASE 1 : "Rien qu'un échange verbal"

#### But de la scène : Montrer l'absurdité et le danger des accords informels. (60s)

DevBack: [Arrive sur scène, l'air très confiant] "Hey ! Pour la nouvelle feature user, l'API est prête. Je t'envoie un user object. C'est simple."
DevFront: [Enjoué, prend des notes sur un post-it] "Super ! L'ID est un `number`, c'est ça ? Comme d'habitude."
DevBack: [Vague, déjà sur son téléphone] "Ouais, ouais, un ID, quoi. Tu gères." [Il sort de scène en saluant]
DevFront: [Regarde le public, hausse les épaules] "Facile, non ? 'Tu gères'. Famous last words." [Il colle le post-it sur son laptop]

#### Moment visuel / slide suggest :

Titre : "The Verbal Handshake"

Visuel : Un dessin humoristique de deux mains se serrant, mais l'une est un gant de boxe et l'autre une fleur.

---

### PHASE 2 : "Un contrat swagger existe mais n’est pas mis à jour"

#### But de la scène : Incarner la douleur d'un contrat non fiable. (180s)

DevFront: [Revient sur scène, l'air paniqué, tenant son laptop] "Ça ne marche pas ! L'app crashe. `undefined is not a function` partout !"
DevBack: [Nonchalamment] "Impossible, ça marche chez moi. T'as regardé le Swagger ?"
DevFront: "Oui ! Et le Swagger dit que l'ID est un `string` ! Le post-it disait `number` !"
DevBack: [Regarde le fichier, mal à l'aise] "Ah... oui. On a dû changer ça pour la v2. J'ai oublié de te le dire. Et de mettre à jour le Swagger, apparemment."
DevFront: [Exaspéré, au public] "Oublié ? Mon week-end vient de disparaître à cause d'un 'oubli' ! Ce Swagger est aussi utile qu'un parapluie en papier." (This Swagger is as useful as a paper umbrella.)

#### Moment visuel / slide suggest :

Titre : "The Source of Lies"

Visuel : Un diff `git` montrant un fichier `swagger.yaml` qui n'a pas été modifié depuis des mois, avec une toile d'araignée dessus.

---

### PHASE 3 : "Swagger à jour car le back a généré du code via le contrat"

#### But de la scène : Introduire la solution où le contrat devient un outil ACTIF. (180s)

DevBack: [Air sérieux, transformé] "Okay, j'ai tout changé. On ne refera plus cette erreur. Regarde." [Il montre son écran]
DevFront: [Méfiance] "Qu'est-ce que tu as fait ? Encore un post-it ?"
DevBack: "Non. Le contrat OpenAPI EST mon code. Ou presque. Je génère mes contrôleurs et mes modèles de données directement depuis ce fichier. S'il n'est pas à jour, ma propre build échoue."
DevFront: [Intrigué, se penche] "Attends... tu veux dire que tu es forcé de le maintenir à jour pour que ton propre code fonctionne ?"
DevBack: "Exactement. Le contrat n'est plus de la documentation. C'est le squelette de l'API."

#### Moment visuel / slide suggest :

 Titre : "From Dead Doc to Living Code"

 Visuel : Un diagramme simple : `api.yaml` -> [flèche avec "GENERATE"] -> `server-stubs.go`

---

### PHASE 4 : "Le front a confiance, génère ses types et ses schémas"

#### But de la scène : Montrer le gain de confiance et l'autonomie du front. (120s)

DevFront: [Sourire retrouvé] "Intéressant... Si ton code en dépend, alors... je peux lui faire confiance ?"
DevBack: "Tu peux parier dessus."
DevFront: [Tape une commande sur son terminal] "Alors attends... si je prends ce même fichier YAML... `npx openapi-typescript ./api.yaml -o ./types.ts`... et voilà !"
DevFront: [Au public, triomphant] "J'ai toutes mes interfaces TypeScript. Parfaitement synchronisées. Sans lui demander. Je n'ai plus besoin de lui parler !"
DevBack: [Faussement vexé] "Hé !"

#### Moment visuel / slide suggest :

 Titre : "Trust, but Verify... with Code!"

 Visuel : Un snippet de code TypeScript montrant une interface `User` générée automatiquement.

---

### PHASE 5 : Ouverture : génération d’API clients et workflow CI

#### But de la scène : Élargir la vision à l'automatisation totale. (120s)

DevBack: "On peut aller plus loin. On génère tout le client de l'API. Plus de `fetch` manuel."
DevFront: "Donc... une fonction `api.getUserById()` typée, qui gère les erreurs, tout ça, gratuitement ?"
DevBack: "Oui. Et mieux : on met un check dans la CI. Si je modifie le contrat et que ça casse ton code... la Pull Request est bloquée."
DevFront: [Regarde le public, les yeux brillants] "Il ne peut plus rien casser. Jamais. C'est le plus beau jour de ma vie."

#### Moment visuel / slide suggest :

 Titre : "The Unbreakable Pact"

 Visuel : Un schéma de workflow de CI/CD avec un badge "OpenAPI check" qui passe au vert.

---

### PHASE 6 : Conclusion : Contract-first == unique source of truth

#### But de la scène : Ancrer le message principal. (60s)

DevBack: "Le contrat n'est plus une discussion..."
DevFront: "...c'est notre langage commun. La source unique de vérité."
DevBack: "Moins de bugs, moins de réunions."
DevFront: "Plus de confiance, plus de temps pour innover. C'est ça, le futur."

#### Moment visuel / slide suggest :

 Titre : "Contract-First: Your Single Source of Truth"

 Visuel : Une pyramide simple avec à la base "OpenAPI", et au-dessus "Backend Code", "Frontend Types", "API Client", "Tests".

## Beats de Live-Demo :

Demo 1 (Phase 4) : npx openapi-typescript ./api.yaml -o ./src/api-types.ts et montrer le fichier généré avec des types User, Order, etc.

Demo 2 (Phase 5) : Montrer une ligne de code utilisant un client généré : const user = await apiClient.v1.users.getUser({ id: 123 });.

Demo 3 (Phase 5) : Montrer une PR sur GitHub avec un check de CI qui a échoué car une modification du contrat était un "breaking change".

