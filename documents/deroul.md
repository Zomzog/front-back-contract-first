
##chap1
Front:
Hey j'ai besoin d'avoir les infos d'un produit !

Back :
Ça tombe bien je suis en train de faire un service OneMasterCatalogOfData !

Front :
Super je t'appels comment ?

Back :
Bah GET /api/v12/items et je t'envoi le nom, son model et la date

Aller au code
Front :
Cool ! Aller hop je code

Let's fetch
-> ça marche pas

Let's Retalk
Quel moyen pourrions nous utiliser pour reussir à nous comprendre?

Solution OAS 3
Explication de Thibault
The contract

look great let's try this use -> recode

Notif api prod ready

let's try to fetch that in prod
what NaN
inconsistant results

Chapter 2 -> let's reretalk again
we were agree to use OAS 3, but what did happen ?
Quel moyen pourrions nous utiliser pour reussir à nous comprendre?

Chapter 3 -> Contract First as a solution
-> Generator
Explication Thibault sur generator et contract first

Update du code front avec ça

We are in production!

Notifi -> new change in prod

Oh! no let's go modiffy these types

Notif -> generator from thibault

Explication generator back en npx

Now I can trust contract
- generation des types via script 
Now let's get even more crazy
open-api-zod-client generation
- zod schema -> validation

Conclusion ?