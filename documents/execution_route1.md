# Mini-route d'exécution (pour la version Comique - 12 minutes)

Acteurs : DevFront (enthousiaste, expressif), DevBack (un peu blasé au début, puis converti)

Ouverture (0:00 - 0:30)

DevFront : (Au public, grand sourire) "Who here loves building beautiful UIs, but gets a little... nervous... when it's time to plug in the data?" (Qui ici adore construire de belles interfaces, mais devient un peu... nerveux... au moment de brancher les données ?)

DevBack : (Arrive en haussant les épaules) "And who here loves building robust APIs, and just wishes the frontend would... read the doc?" (Et qui ici adore construire des API robustes, et aimerait juste que le front... lise la doc ?)

Minute 0:30 - 2:00 (Phase 1 & début Phase 2)

Transition : Slide "The Verbal Handshake".

Action : Le dialogue de la phase 1 se déroule. DevBack sort. DevFront colle son post-it.

Transition : Slide "The Source of Lies". DevFront revient paniqué.

Action : Dialogue de la phase 2. La friction est à son comble sur "parapluie en papier".

Minute 2:00 - 6:00 (Fin Phase 2 & Phase 3)

Action : Le conflit se poursuit. Le moment de l'aveu de DevBack sur le Swagger non à jour.

Transition : Slide "From Dead Doc to Living Code". Le ton de DevBack change, il devient le professeur.

Action : Dialogue de la phase 3. Le concept pivot est introduit : le back dépend du contrat.

Minute 6:00 - 8:30 (Phase 4 & 1ère Démo)

Transition : Slide "Trust, but Verify... with Code!".

Action : Dialogue de la phase 4. Le "Aha!" moment du DevFront.

DEMO 1 (30s) : DevFront se tourne vers son laptop, écran projeté. Il lance npx openapi-typescript ./api.yaml -o ./types.ts. Il ouvre le fichier généré, le fait défiler rapidement pour montrer les interfaces. Applaudissements.

Minute 8:30 - 10:30 (Phase 5 & 2ème Démo)

Transition : Slide "The Unbreakable Pact".

Action : Dialogue sur la CI et la génération de client.

DEMO 2 (20s) : Il montre juste la ligne const user = await apiClient.v1.users.getUser({ id: 123 }); dans son code, en insistant sur l'auto-complétion et la sécurité de type.

Minute 10:30 - 12:00 (Phase 6 & Conclusion)

Transition : Slide "Contract-First: Your Single Source of Truth".

Action : Le duo récite ses lignes finales en synchronisation.

Transition : Slide finale avec un CTA (Call To Action) et leurs pseudos Twitter.

Action : Salutations.
